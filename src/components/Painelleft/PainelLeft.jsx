import "../Painelleft/PainelLeft.scss";
import ContainerChats from "./ContainerChats/ContainerChats";
import SearchChat from "./SearchChat/SearchChat";
import TopIcons from "./TopIcons/TopIcons";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const PainelLeft = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`Container__PainelLeft ${
        theme === "dark" ? "darkMode__Painel" : "ligthMode__Painel"
      }`}
    >
      <TopIcons />
      <SearchChat />
      <ContainerChats />
    </div>
  );
};

export default PainelLeft;
