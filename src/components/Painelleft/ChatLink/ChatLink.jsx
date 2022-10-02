import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import "../ChatLink/ChatLink.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext, useState } from "react";
import { useEffect } from "react";

const ChatLink = ({
  nome,
  LastMensage,
  LocalAtendimento,
  DataMenssege,
  ImageChat,
  Estado,
  setSelect,
  idx
}) => {
  const { theme } = useContext(ThemeContext);

  let navigation = useNavigate();
  const [isActive, setIsActive] = useState(Estado);

  const handleClickChatLink = () => {
    setSelect(idx);
    navigation(`/chat/${nome}`);
  };

  useEffect(()=>{
    setIsActive(Estado)
  },[Estado])

  return (
    <div
      className={`ChatLink ${
        theme === "dark" ? "darkMode__Background" : "ligthMode__Background"
      }`}
      onClick={handleClickChatLink}
      style={isActive ? { borderLeft: "6px solid #239BA3" } : {}}
    >
      <div className='ChatLink__ProfileImg'>
        <div className='ChatLink__ProfileImg--div'>
          {nome.split(" ")[0].toUpperCase().slice(0, 1) +
            nome.split(" ")[1].toUpperCase().slice(0, 1)}
        </div>
      </div>
      <div className='ChatLink__Texts'>
        <h4>{nome}</h4>
        <p className='ChatLink__P'>{LastMensage}</p>
        <p className='ChatLink__P'>
          <BsPerson /> {LocalAtendimento}
        </p>
      </div>
      <div className='ChatLink__DataIcon'>
        <div className='ChatLink__DataIcon--Text'>{DataMenssege}</div>
        <div className='ChatLink__ImageChat'>{ImageChat}</div>
      </div>
    </div>
  );
};

export default ChatLink;
