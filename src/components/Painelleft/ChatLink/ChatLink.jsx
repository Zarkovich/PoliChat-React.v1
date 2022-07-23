import { useNavigate, useParams } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import "../ChatLink/ChatLink.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";

const ChatLink = ({
  nome,
  LastMensage,
  LocalAtendimento,
  DataMenssege,
  ImageChat,
  Estado,
}) => {
  const { theme } = useContext(ThemeContext);

  let navigation = useNavigate();
  const [isActive, setIsActive] = useState(Estado);

  const params = useParams();

  useEffect(() => {
    const handleEstado = (value) => {
      setIsActive(value);
    };

    return () => {
      if (params.pessoa === nome) return handleEstado(true);

      return handleEstado(false);
    };
  }, [params, nome]);

  const handleClickChatLink = () => {
    navigation(`/chat/${nome}`);
  };

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
