'use client';

import React, { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Breadcrumb.module.css';

const Breadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const separator = <span className={styles.separator}>|</span>;

  return (
    <nav className={styles.nav} aria-label='breadcrumb'>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href='/' className={styles.link}>
            Home
          </Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((segment, index, arr) => (
          <Fragment key={`breadcrumb-${index}`}>
            <li className={styles.item} key={index}>
              {segment}
            </li>
            {arr.length > index + 1 && separator}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
