"use client";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
type StoreProviderProps = {
  children: React.ReactNode;
};
const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
