"use client";
import { usePathname } from "next/navigation";

import type React from "react";
import clsx from "clsx";

import Link from "next/link";

import styles from "./Header.module.css";

const HeaderNavList = [
  {
    name: "Top",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Blog",
    href: "/blog",
  },
] as const;

export const Header: React.FC = () => {
  const pathName = `/${String(usePathname().split("/")[1])}`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={clsx(styles.logo)}>
          mimifuwa<span>.cc</span>
        </Link>
        <nav>
          <ul className={styles.nav}>
            {HeaderNavList.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className={clsx(
                    styles.navItem,
                    pathName === href ? styles.active : null
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
