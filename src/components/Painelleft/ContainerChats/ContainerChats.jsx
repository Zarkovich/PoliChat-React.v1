import { BsWhatsapp } from "react-icons/bs";
import ChatLink from "../ChatLink/ChatLink";
import "../ContainerChats/ContainerChats.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import { useState } from "react";

const ContainerChats = () => {
  const { theme } = useContext(ThemeContext);
  const [selectChat, setSelectChat] = useState(0);

  const chats = [
    {
      nome: "Gustavo Vieira",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },

    {
      nome: "Nyemi Essoy",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
    {
      nome: "Fauduso Baego",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
    {
      nome: "Difus Ciosr",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
    {
      nome: "Coelu Bupogoy",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
    {
      nome: "Suhao Raope",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
    {
      nome: "Usmeo Flete",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
    {
      nome: "Unbli Laeneos",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
    {
      nome: "Kuovi Xomor",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
    },
  ];

  return (
    <div
      className={`ContainerChats ${
        theme === "dark"
          ? "darkMode__Painel__BorderTop"
          : "ligthMode__Painel__BorderTop"
      }`}
    >
      {chats.map((chat, idx) => (
        <ChatLink
          key={idx}
          nome={chat.nome}
          LastMensage={chat.LastMensage}
          LocalAtendimento={chat.LocalAtendimento}
          DataMenssege={chat.DataMenssege}
          Estado={idx === selectChat}
          ImageChat={<BsWhatsapp />}
          setSelect={setSelectChat}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default ContainerChats;
