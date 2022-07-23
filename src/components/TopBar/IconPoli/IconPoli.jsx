import { IoChatbubblesOutline } from "react-icons/io5";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

import "../IconPoli/IconPoli.scss";

const IconPoli = ({ nome }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='container__Icon'>
      <div className='ICON'>
        <IoChatbubblesOutline />
      </div>
      <div
        className={`container__Icon--nome ${
          theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"
        }`}
      >
        {nome}
      </div>
    </div>
  );
};

export default IconPoli;
