"use client";
import styles from "./datatab.module.css";
import DataTableHeader from "./datatableheader/datatableheader";
import DataTableBody from "./datatablebody/datatablebody";
import Button from "@/components/button/button";
const DataTab: React.FC = () => {
  return (
    <div className={styles.dataTabContainer}>
      <div className={styles.tableContainer}>
        <table>
          <DataTableHeader />
          <DataTableBody />
        </table>
      </div>
      <div className={styles.tableControlButton}>
        <Button width={50} color="white" border="#ddd">
          Clear Data
        </Button>
        <Button width={50} color="white" border="#ddd">
          Reset Data
        </Button>
      </div>
    </div>
  );
};

export default DataTab;
