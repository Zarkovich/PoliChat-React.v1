import { BsQuestionCircle, BsChevronDoubleRight } from "react-icons/bs";
import "../UserSettings/UserSettings.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const UserSettings = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "UserSettings" : "UserSettings--ligth"}>
      <div>
        <BsQuestionCircle />
      </div>
      <div className='UserSettings__Background'>G</div>
      <BsChevronDoubleRight />
      <h3 className='UserSettings__Text'>
        Versão
        <br />
        <p>v1.0</p>
      </h3>
    </div>
  );
};

export default UserSettings;
