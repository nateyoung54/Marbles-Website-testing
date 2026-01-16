export type Download = {
  id: string;
  title: string;
  type: 'PDF' | 'DWG' | 'STEP' | 'OTHER';
  url: string;
  version?: string;
  date?: string; // ISO
  size?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string; // slug
  shortDescription: string;
  heroImages: { src: string; alt: string }[];
  bullets?: string[];
  specs: Record<string, string>;
  compatibilityNotes?: string;
  downloads?: Download[];
  whereToBuyPartnerIds?: string[];
  relatedProductIds?: string[];
  tags?: string[];
};

export type Part = {
  id: string;
  partNumber: string;
  sku?: string;
  name: string;
  slug: string;
  synonyms?: string[];
  crossRefs?: string[];
  specs: Record<string, string>;
  fitmentTags?: string[];
  downloads?: Download[];
  relatedProductIds?: string[];
};

export type Doc = {
  id: string;
  title: string;
  docType: 'manual' | 'spec' | 'drawing' | 'install';
  url: string;
  version?: string;
  date?: string;
  relatedProductIds?: string[];
  relatedPartNumbers?: string[];
};

export type LearningItem = {
  id: string;
  title: string;
  slug: string;
  format: 'video' | 'article' | 'podcast';
  topics: string[];
  duration?: string;
  date?: string;
  heroImage?: { src: string; alt: string };
  excerpt?: string;
};

export type Partner = {
  id: string;
  name: string;
  type: 'retailer' | 'distributor';
  regions?: string[];
  url: string;
  notes?: string;
  logo?: string;
  lines?: string[];
};
