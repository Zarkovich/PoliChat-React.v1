import Form from "react-bootstrap/Form";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import "../ThemeSelector/ThemeSelector.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const ThemeSelector = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleThemeSelector = (e) => {
    let checked = e.target.checked;
    checked === true ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className='container'>
      <label className='Switch__Theme__Icons'>
        <BsFillMoonFill />
        <div className='Switch__Theme__Icons'>
          <Form.Check
            onClick={handleThemeSelector}
            type='switch'
            id='custom-switch'
          />
        </div>
        <BsSunFill />
      </label>
    </div>
  );
};

export default ThemeSelector;
