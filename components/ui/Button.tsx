import Link from 'next/link';
import styles from './Button.module.css';

export default function Button(props: any) {
  return (
    <Link className={styles.btn} href={props.link}>
      {props.children}
    </Link>
  );
}
