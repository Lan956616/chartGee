"use client";
import { useState } from "react";
import Container from "../container/container";
import ButtonArea from "./buttonarea/buttonarea";
import styles from "./header.module.css";
import Image from "next/image";
import NavbarSmall from "./navbarsmall/navbarsmall";
import NavbarLarge from "./navbarlarge/navbarlarge";
import Hamburger from "./hamburger/hamburger";

const Header: React.FC = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.leftHeader}>
            <Image
              src="/chartGeeWithTitle.png"
              alt="logo"
              width={165}
              height={45}
            />
            <NavbarLarge />
          </div>
          <NavbarSmall isClicked={hamburgerClicked} />
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
