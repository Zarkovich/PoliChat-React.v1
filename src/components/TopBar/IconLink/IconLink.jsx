import "../IconLink/IconLink.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const IconLink = ({ imagem, notify }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`Container__Icon ${
        theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"
      }`}
    >
      <div id='Container__Icon--Image'>{imagem}</div>
      <div id='Cntainer__Icon--Notify'>{notify}</div>
    </div>
  );
};

export default IconLink;
