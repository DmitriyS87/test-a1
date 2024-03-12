'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './ResponsiveImage.module.css';

interface IProps {
  src: string;
  minWidth?: number;
  maxWidth?: number;
}

export const ResponsiveImage = ({ src, minWidth, maxWidth }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () => {
        const countWidth = (newValue: number) => {
          let width = newValue;
          if (minWidth && minWidth > newValue) {
            width = minWidth;
          }
          if (maxWidth && maxWidth < newValue) {
            width = maxWidth;
          }
          return width;
        };

        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setImageWidth(countWidth(width));
        }
      };

      updateWidth();

      window.addEventListener('resize', updateWidth);

      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [maxWidth, minWidth]);

  return (
    <div ref={containerRef} className={styles.imgContainer}>
      <Image
        src={src}
        alt='Game poster'
        layout='fill'
        objectFit='contain'
        priority
      />
    </div>
  );
};
