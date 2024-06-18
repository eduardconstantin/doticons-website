'use client';

import { type FC } from 'react';
import { SearchDoticon } from 'doticons/16';
import styles from './Search.module.scss';

const Search: FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search icons"
        onClick={() => {
          const element = document.getElementById('content');
          const elementPosition = element!.getBoundingClientRect().top;
          const offsetPosition = elementPosition - 182;

          window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => (e.target.placeholder = '')}
        onBlur={(e) => (e.target.placeholder = 'Search icons')}
      />
      <SearchDoticon fill="#fff" width="45px" height="45px" />
    </div>
  );
};

export default Search;
