import type React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./Main.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};
