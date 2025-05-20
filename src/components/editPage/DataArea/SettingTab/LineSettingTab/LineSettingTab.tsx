import AppearancePanel from "../AppearancePanel/AppearancePanel";
import AxesPanel from "../AxesPanel/AxesPanel";
import LinePointPanel from "./LinePointPanel/LinePointPanel";
const LineSettingTab: React.FC = () => {
  return (
    <>
      <AppearancePanel />
      <LinePointPanel />
      <AxesPanel />
    </>
  );
};
export default LineSettingTab;
