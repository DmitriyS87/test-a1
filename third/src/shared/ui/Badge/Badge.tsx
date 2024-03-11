import styles from './Badge.module.css';

interface IBadgeProps {
  title?: string;
  children?: React.ReactNode;
}

export const Badge = ({ title, children }: IBadgeProps) => (
  <span className={styles.badge}>
    {title}
    {children}
  </span>
);
