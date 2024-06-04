'use client';

import { useRef, useState, type FC } from 'react';
import Search from '@doticons-website/app/components/Search/Search';
import * as Icons16 from 'doticons/16/index';
import * as Icons32 from 'doticons/32/index';
import styles from './IconSwitchers.module.scss';

const IconSwitchers: FC = () => {
  const [activeButton, setActiveButton] = useState<string>('detailed');
  const [iconSet, setIconSet] = useState<typeof Icons32 | typeof Icons16>(
    Icons32
  );
  const [searchText, setSearchText] = useState<string>('');
  const svgRefs = useRef<Record<string, SVGSVGElement>>({});

  const handleCopyJSX = async (iconKey: string) => {
    const icon = `<${iconKey} />`;
    try {
      await navigator.clipboard.writeText(icon);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const handleCopySVG = async (iconSVG: any) => {
    try {
      await navigator.clipboard.writeText(iconSVG.outerHTML);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const filterIcons = Object.keys(iconSet).filter((iconKey) => {
    return iconKey.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <Search onChange={setSearchText} />
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
        {filterIcons.length > 0 ? (
          filterIcons.map((iconKey) => {
            const Icon = iconSet[iconKey as keyof typeof iconSet];

            return (
              <div key={iconKey} className={styles.iconContainer}>
                <div className={styles.controls}>
                  <button onClick={() => handleCopyJSX(iconKey)}>JSX</button>
                  <button
                    onClick={() => handleCopySVG(svgRefs.current[iconKey])}
                  >
                    SVG
                  </button>
                </div>
                <Icon
                  ref={(el: SVGSVGElement) => {
                    svgRefs.current[iconKey] = el;
                  }}
                  fill={'white'}
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            );
          })
        ) : (
          <p className={styles.noIcon}>No icons found.</p>
        )}
      </div>
    </>
  );
};

export default IconSwitchers;
