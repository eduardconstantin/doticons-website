'use client';

import { useState, type FC } from 'react';
import * as Icons16 from 'doticons/16/index';
import * as Icons32 from 'doticons/32/index';
import styles from './IconSwitchers.module.scss';

const IconSwitchers: FC = () => {
  const [activeButton, setActiveButton] = useState<string>('detailed');
  const [iconSet, setIconSet] = useState<typeof Icons32 | typeof Icons16>(
    Icons32
  );

  return (
    <>
      <div className={styles.btnContainer}>
        <button
          className={activeButton === 'detailed' ? styles.selected : ''}
          onClick={() => {
            setActiveButton('detailed');
            setIconSet(Icons32);
          }}
        >
          <p>32x32 DOT MATRIX</p>
          <span>More detailed</span>
        </button>
        <button
          className={activeButton === 'lessDetailed' ? styles.selected : ''}
          onClick={() => {
            setActiveButton('lessDetailed');
            setIconSet(Icons16);
          }}
        >
          <p>16x16 DOT MATRIX</p>
          <span>Less detailed</span>
        </button>
      </div>
      <div className={styles.iconsContainer}>
        {Object.keys(iconSet).map((iconKey) => {
          const Icon = iconSet[iconKey as keyof typeof iconSet];
          return (
            <div key={iconKey} className={styles.iconContainer}>
              <Icon fill={'white'} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IconSwitchers;
