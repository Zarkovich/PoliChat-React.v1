import Form from "react-bootstrap/Form";
import "../Select/Select.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const SelectP = ({ options }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='Form__Select__Container'>
      <Form.Select
        bsPrefix='Form__Select'
        className={theme === "dark" ? "darkMode__Painel" : "ligthMode__Painel"}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Form.Select>
    </div>
  );
};

export default SelectP;
