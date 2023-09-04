import styles from './ErrorAlert.module.css';

export default function ErrorAlert(props: any) {
  return <div className={styles.alert}>{props.children}</div>;
}
