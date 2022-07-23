import Nav from "react-bootstrap/Nav";
import {
  BsChatText as IconChats,
  BsFillChatDotsFill as IconChat,
  BsEnvelope,
} from "react-icons/bs";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

import "../TopIcons/TopIcons.scss";

const TopIcons = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='ContainerIcons'>
      <Nav
        variant='pills'
        defaultActiveKey='link-1'
        className={
          theme === "dark"
            ? "ContainerIcons__Nav"
            : "ContainerIcons__Nav--ligth"
        }
      >
        <Nav.Item>
          <Nav.Link eventKey='link-1'>
            <IconChats />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>
            <IconChat />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3'>
            <BsEnvelope />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default TopIcons;
