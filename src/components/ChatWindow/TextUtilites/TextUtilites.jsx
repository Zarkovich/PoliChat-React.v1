import "../TextUtilites/TextUtilites.scss";
import {
  BsFonts,
  BsPhone,
  BsFillJournalBookmarkFill,
  BsPaperclip,
  BsEmojiSmileFill,
  BsMicFill,
} from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const TextUtilites = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`TextUtilitesContainer ${
        theme === "dark"
          ? "TextUtilitesContainer--dark"
          : "TextUtilitesContainer--ligth"
      }`}
    >
      <div className='TextUtilitesContainer__Left'>
        <div
          className={`TextUtilitesContainer__Left__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Left__Icon--dark"
              : "TextUtilitesContainer__Left__Icon--ligth"
          }`}
        >
          <BsFonts />
        </div>
        <div
          className={`TextUtilitesContainer__Left__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Left__Icon--dark"
              : "TextUtilitesContainer__Left__Icon--ligth"
          }`}
        >
          <BsPhone />
        </div>
      </div>
      <div className='TextUtilitesContainer__Rigth'>
        <div
          className={`TextUtilitesContainer__Rigth__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Rigth__Icon--dark"
              : "TextUtilitesContainer__Rigth__Icon--ligth"
          }`}
        >
          <BsFillJournalBookmarkFill />
        </div>
        <div
          className={`TextUtilitesContainer__Rigth__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Rigth__Icon--dark"
              : "TextUtilitesContainer__Rigth__Icon--ligth"
          }`}
        >
          <BsPaperclip />
        </div>
        <div
          className={`TextUtilitesContainer__Rigth__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Rigth__Icon--dark"
              : "TextUtilitesContainer__Rigth__Icon--ligth"
          }`}
        >
          <IoRocketSharp />
        </div>
        <div
          className={`TextUtilitesContainer__Rigth__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Rigth__Icon--dark"
              : "TextUtilitesContainer__Rigth__Icon--ligth"
          }`}
        >
          <BsEmojiSmileFill />
        </div>
        <div
          className={`TextUtilitesContainer__Rigth__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Rigth__Icon--dark"
              : "TextUtilitesContainer__Rigth__Icon--ligth"
          }`}
        >
          <BsMicFill />
        </div>
        <div
          className={`TextUtilitesContainer__Rigth__Icon ${
            theme === "dark"
              ? "TextUtilitesContainer__Rigth__Icon--dark"
              : "TextUtilitesContainer__Rigth__Icon--ligth"
          }`}
        >
          <RiSendPlaneFill color='#269ba4' />
        </div>
      </div>
    </div>
  );
};

export default TextUtilites;
