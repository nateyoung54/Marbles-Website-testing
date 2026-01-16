import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'text';

const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none';

const styles: Record<Variant, string> = {
  primary: 'bg-orange text-white hover:opacity-90',
  secondary: 'border border-line bg-transparent text-ink hover:bg-white/40',
  text: 'bg-transparent text-ink underline hover:text-charcoal'
};

export function Button(props: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const { children, href, variant = 'primary', onClick, ariaLabel } = props;

  if (href) {
    return (
      <Link aria-label={ariaLabel} className={`${base} ${styles[variant]}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={`${base} ${styles[variant]}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}
