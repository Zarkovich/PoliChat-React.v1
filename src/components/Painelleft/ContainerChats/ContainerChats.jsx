import { BsWhatsapp } from "react-icons/bs";
import ChatLink from "../ChatLink/ChatLink";
import "../ContainerChats/ContainerChats.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const ContainerChats = () => {
  const { theme } = useContext(ThemeContext);
  const chats = [
    {
      nome: "Gustavo Vieira",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },

    {
      nome: "Nyemi Essoy",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },
    {
      nome: "Fauduso Baego",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },
    {
      nome: "Difus Ciosr",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },
    {
      nome: "Coelu Bupogoy",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },
    {
      nome: "Suhao Raope",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },
    {
      nome: "Usmeo Flete",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },
    {
      nome: "Unbli Laeneos",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
    },
    {
      nome: "Kuovi Xomor",
      LastMensage: "oi",
      LocalAtendimento: "Suporte CS 18",
      DataMenssege: "18/05/2022",
      Estado: false,
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
      {chats.map((chat) => (
        <ChatLink
          nome={chat.nome}
          LastMensage={chat.LastMensage}
          LocalAtendimento={chat.LocalAtendimento}
          DataMenssege={chat.DataMenssege}
          Estado={chat.Estado}
          ImageChat={<BsWhatsapp />}
        />
      ))}
    </div>
  );
};

export default ContainerChats;
