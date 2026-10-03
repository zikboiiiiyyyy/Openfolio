import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
  showArrow?: boolean;
};

export function Button({
  children,
  variant = 'primary',
  showArrow = true,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      {showArrow && (
        <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16" fill="none">
          <path d="M3.25 12.75 12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )}
    </a>
  );
}
