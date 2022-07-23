import "../SearchChat/SearchChat.scss";
import { BsFunnel, BsPerson } from "react-icons/bs";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const SearchChat = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "Container__Search" : "Container__Search--light"
      }
    >
      <div
        className={`Search__Box ${
          theme === "dark"
            ? "Search__Box__Border"
            : "Search__Box__Border--ligth"
        }`}
      >
        <input
          type='search'
          name='search'
          id='Seach__Name'
          placeholder='  Pesquisar!'
          className={theme === "dark" ? "Seach__Name" : "Seach__Name--ligth"}
        />
      </div>
      <div
        className={
          theme === "dark"
            ? "Container-Search__IconContainer--Sizing"
            : "Container-Search__IconContainer--Sizing--light"
        }
      >
        <BsPerson className='Search__Icon' />
      </div>
      <div
        className={
          theme === "dark"
            ? "Container-Search__IconContainer--Sizing"
            : "Container-Search__IconContainer--Sizing--light"
        }
      >
        <BsFunnel className='Search__Icon' />
      </div>
    </div>
  );
};

export default SearchChat;
