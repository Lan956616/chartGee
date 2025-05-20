import styles from "../projectCard.module.css";
import ActionIcon from "./ActionIcon/ActionIcon";
import type { Dispatch, SetStateAction } from "react";

type CardActionProps = {
  projectID: string;
  setShowSharePopup: Dispatch<SetStateAction<boolean>>;
  setShowDeletePopup: Dispatch<SetStateAction<boolean>>;
};
const CardActions: React.FC<CardActionProps> = ({
  projectID,
  setShowDeletePopup,
  setShowSharePopup,
}) => {
  return (
    <div className={styles.cardActionContainer}>
      <ActionIcon
        isLink={true}
        href={`/edit/${projectID}`}
        src="/icons/blackpencil.png"
        alt="edit icon"
        hint="edit"
      />
      <ActionIcon
        isLink={false}
        src="/icons/share.png"
        alt="share icon"
        hint="share"
        onClick={() => {
          setShowSharePopup((prev) => !prev);
        }}
      />
      <ActionIcon
        isLink={false}
        src="/icons/trash.png"
        alt="delete icon"
        onClick={() => {
          setShowDeletePopup((prev) => !prev);
        }}
        hint="delete"
      />
    </div>
  );
};

export default CardActions;
