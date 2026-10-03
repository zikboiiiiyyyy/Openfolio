import { useEffect, useRef, type KeyboardEvent } from 'react';
import { portfolio } from '../data/portfolio';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);
  const { accessibility } = portfolio.copy;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!isOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== 'Tab') return;
    const items = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    if (!items?.length) return;
    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className={`mobile-menu ${isOpen ? 'is-open' : ''}`.trim()}
      aria-hidden={!isOpen}
      inert={!isOpen}
      onMouseDown={(event) => event.target === event.currentTarget && isOpen && onClose()}
    >
      <nav
        ref={panelRef}
        className="mobile-menu__panel"
        id="mobile-navigation"
        aria-label={accessibility.mainNavigation}
        aria-modal={isOpen ? 'true' : undefined}
        role="dialog"
        onKeyDown={handleKeyDown}
      >
        <div className="mobile-menu__topline">
          <span className="eyebrow">{portfolio.copy.mobileMenu.heading}</span>
          <button className="icon-button mobile-menu__close" type="button" onClick={onClose} aria-label={accessibility.closeMenu}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="mobile-menu__links">
          {portfolio.navigation.items.map((item, index) => (
            <a key={item.href} href={item.href} onClick={onClose}>
              <span className="mobile-menu__index">{String(index + 1).padStart(2, '0')}</span>
              <span>{item.label}</span>
              <span className="mobile-menu__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="mobile-menu__note">{portfolio.copy.mobileMenu.note}</p>
      </nav>
    </div>
  );
}
