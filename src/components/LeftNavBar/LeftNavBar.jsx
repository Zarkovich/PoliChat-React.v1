import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {
  BsHouse,
  BsChatText,
  BsPieChartFill,
  BsBuilding,
  BsGearWideConnected,
  BsCurrencyDollar,
  BsTools,
} from "react-icons/bs";

import "../LeftNavBar/LeftNavBar.scss";
import UserSettings from "./UserSettings/UserSettings";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const LeftNavBar = () => {
  const { theme } = useContext(ThemeContext);

  let navigate = useNavigate();

  const handleClickLeftNavBar = () => {
    navigate("/chat", { replace: true });
  };
  const handleClickLeftNavBarHome = () => {
    navigate("/", { replace: true });
  };

  //FIXME: Concertar aqui
  return (
    <div className='NavLeft__Container'>
      <Nav
        defaultActiveKey='link-0'
        bsPrefix={`${theme === "dark" ? "flex" : "flex--ligth"}`}
        variant='pills'
      >
        <Nav.Link eventKey='link-0' onClick={handleClickLeftNavBarHome}>
          <BsHouse
            className={theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"}
          />
        </Nav.Link>
        <Nav.Link onClick={handleClickLeftNavBar} eventKey='link-1'>
          <BsChatText
            className={theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"}
          />
        </Nav.Link>
        <Nav.Link eventKey='link-2'>
          <BsPieChartFill
            className={theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"}
          />
        </Nav.Link>
        <Nav.Link eventKey='link-3'>
          <BsBuilding
            className={theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"}
          />
        </Nav.Link>
        <Nav.Link eventKey='link-4'>
          <BsGearWideConnected
            className={theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"}
          />
        </Nav.Link>
        <Nav.Link eventKey='link-5'>
          <BsCurrencyDollar
            className={theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"}
          />
        </Nav.Link>
        <Nav.Link eventKey='link-6'>
          <BsTools
            className={theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"}
          />
        </Nav.Link>
        <UserSettings />
      </Nav>
    </div>
  );
};

export default LeftNavBar;
