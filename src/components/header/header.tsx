"use client";
import { useState } from "react";
import Container from "../container/container";
import ButtonArea from "./buttonarea/buttonarea";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import NavbarLarge from "./navbarlarge/navbarlarge";
import Hamburger from "./hamburger/hamburger";
type HeaderProps = {
  showCreateGraph?: boolean;
};
const Header: React.FC<HeaderProps> = ({ showCreateGraph = true }) => {
  const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.leftHeader}>
            <Link href="/">
              <Image
                src="/logos/chartGeeWithTitle.png"
                alt="logo"
                width={165}
                height={45}
              />
            </Link>

            {showCreateGraph && <NavbarLarge />}
          </div>
          <Hamburger
            isClicked={hamburgerClicked}
            setIsClicked={setHamburgerClicked}
          />
          <ButtonArea />
        </div>
      </Container>
    </header>
  );
};

export default Header;
