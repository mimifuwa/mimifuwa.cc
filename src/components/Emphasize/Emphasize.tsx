import styles from "./Emphasize.module.css";

interface Props {
  children: React.ReactNode;
}

export const Emphasize: React.FC<Props> = ({ children }) => { 
  return <div className={styles.emphasize}>{children}</div>;
}