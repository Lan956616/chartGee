"use client";
import { useAppSelector } from "@/lib/hooks";
import Container from "../../container/container";
import styles from "./headerSharePage.module.css";
import Image from "next/image";
import Link from "next/link";
import UserButton from "@/components/projects/header/userButton/userButton";
type HeaderSharePageProps = {
  projectID: string;
  isLoading: boolean;
  showNotFind: boolean;
};
const HeaderSharePage: React.FC<HeaderSharePageProps> = ({
  projectID,
  isLoading,
  showNotFind,
}) => {
  const uid = useAppSelector((store) => {
    return store.auth.currentUser;
  });
  const showEdit = Boolean(uid && !isLoading && !showNotFind);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Link href="/">
            <Image
              src="/tryChartGeeIcon.png"
              alt="logo"
              width={165}
              height={45}
            />
          </Link>

          <div className={styles.rightHeader}>
            {showEdit && (
              <Link href={`/edit/${projectID}`} className={styles.editBTN}>
                <Image
                  src="/whitepencil.png"
                  alt="edit icon"
                  width={20}
                  height={20}
                />
                Edit Graph
              </Link>
            )}
            {uid && <UserButton />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderSharePage;
