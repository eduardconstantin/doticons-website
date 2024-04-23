'use client';

import { useState, type FC } from 'react';
import * as Icons16 from 'doticons/16/index';
import * as Icons32 from 'doticons/32/index';
import styles from './IconSwitchers.module.scss';

const IconSwitchers: FC = () => {
  const [activeButton, setActiveButton] = useState<string>('detailed');

  return (
    <>
      <div className={styles.btnContainer}>
        <button
          className={activeButton === 'detailed' ? styles.selected : ''}
          onClick={() => setActiveButton('detailed')}
        >
          <p>32x32 DOT MATRIX</p>
          <span>More detailed</span>
        </button>
        <button
          className={activeButton === 'lessDetailed' ? styles.selected : ''}
          onClick={() => setActiveButton('lessDetailed')}
        >
          <p>16x16 DOT MATRIX</p>
          <span>Less detailed</span>
        </button>
      </div>
      <div>
        {Object.keys(Icons16).map((iconKey) => {
          const Icon = Icons16[iconKey as keyof typeof Icons16];
          return <Icon key={iconKey} fill={'white'} />;
        })}
      </div>
    </>
  );
};

export default IconSwitchers;
