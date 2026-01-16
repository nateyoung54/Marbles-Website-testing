export type AnalyticsEvent =
  | { name: 'search_submit'; payload: { query: string; filters?: Record<string, string>; resultsCount?: number } }
  | { name: 'search_result_click'; payload: { type: string; id: string; position: number } }
  | { name: 'download_click'; payload: { docId: string; docType: string; productId?: string; partNumber?: string } }
  | { name: 'where_to_buy_click'; payload: { partnerId: string; contextPage: string; productId?: string } }
  | { name: 'contact_submit'; payload: { formType: string; topic?: string } }
  | { name: 'video_play'; payload: { contentId: string; position?: number } };

export function track(evt: AnalyticsEvent) {
  if (typeof window === 'undefined') return;

  // GA4
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
  if (gtag) {
    gtag('event', evt.name, evt.payload);
  }

  // Custom hook point (PostHog/Plausible)
  window.dispatchEvent(new CustomEvent('ma_event', { detail: evt }));
}
