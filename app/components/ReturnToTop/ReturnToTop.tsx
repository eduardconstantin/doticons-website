'use client';

import { useEffect, useState, type FC } from 'react';
import { ArrowUpDoticon } from 'doticons/16';
import styles from './ReturnToTop.module.scss';

const ReturnToTop: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const searchEl = document.getElementById('site-search-container');
    if (!searchEl) return;

    const stickyTop = 216; // matches Search.module.scss top: 216px

    const onScroll = () => {
      const rect = searchEl.getBoundingClientRect();
      // When the search container's top is less than or equal to stickyTop,
      // it has become sticky — show the button.
      setVisible(rect.top <= stickyTop);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      aria-label="Return to top"
      title="Return to top"
      className={`${styles._button} ${visible ? styles.visible : ''}`}
      onClick={handleClick}
      onKeyDown={handleKey}
      tabIndex={0}
    >
      <ArrowUpDoticon fill="#fff" width="100%" height="100%" />
    </button>
  );
};

export default ReturnToTop;
