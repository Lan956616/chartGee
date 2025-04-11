"use client";
import Container from "../../container/container";
import styles from "./headerProjectPage.module.css";
import Image from "next/image";
import UserButton from "./userButton/userButton";
const HeaderProjectPage: React.FC = ({}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Image
            src="/chartGeeWithTitle.png"
            alt="logo"
            width={165}
            height={45}
          />
          <UserButton />
        </div>
      </Container>
    </header>
  );
};

export default HeaderProjectPage;
