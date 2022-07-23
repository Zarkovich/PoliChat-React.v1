import "../ChatWindowContainer/ChatWindowContainer.scss";
import { BsWhatsapp } from "react-icons/bs";
import TextUtilites from "../TextUtilites/TextUtilites";
import Chat from "../Chat/Chat";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const ChatWindowContainer = () => {
  const { theme } = useContext(ThemeContext);
  const params = useParams();

  return (
    <div className='ChatWindowContainer'>
      <div
        className={`ChatWindowContainer__TopPainel ${
          theme === "dark"
            ? "ChatWindowContainer__TopPainel--dark"
            : "ChatWindowContainer__TopPainel--ligth"
        }`}
      >
        <div className='ChatWindowContainer__TopPainel__Profile'>
          <div className='ChatWindowContainer__TopPainel__Profile__ProfileImage'>
            {params.pessoa.slice(0, 1)}
          </div>
          <div
            className={`ChatWindowContainer__TopPainel__Profile__NameChat ${
              theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"
            }`}
          >
            {params.pessoa}
          </div>
        </div>
        <div className='ChatWindowContainer__TopPainel__User'>
          <div className='ChatWindowContainer__TopPainel__User__Image'>GH</div>
          <div className='ChatWindowContainer__TopPainel__User__Options'>
            <span className='ChatWindowContainer__TopPainel__User__Options--dot'></span>
            <span className='ChatWindowContainer__TopPainel__User__Options--dot'></span>
            <span className='ChatWindowContainer__TopPainel__User__Options--dot'></span>
          </div>
        </div>
      </div>
      <div
        className={`ChatWindowContainer__Conversation ${
          theme === "dark" ? "dark__Image" : "ligth__Image"
        }`}
      >
        <Chat />
      </div>
      <div
        className={`ChatWindowContainer__Write ${
          theme === "dark"
            ? "darkMode__Painel__BorderTop"
            : "ligthMode__Painel__BorderTop"
        }`}
      >
        <BsWhatsapp color='green' fontStyle='bold' />
        <textarea
          name='Mensagem'
          id='Messenge'
          rows={3}
          placeholder='Aa'
          className={
            theme === "dark"
              ? "ChatWindowContainer__Write__Messenge--dark"
              : "ChatWindowContainer__Write__Messenge--ligth"
          }
        ></textarea>
      </div>
      <TextUtilites />
    </div>
  );
};

export default ChatWindowContainer;
