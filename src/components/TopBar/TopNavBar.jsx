import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import IconPoli from "./IconPoli/IconPoli";
import SelectP from "./Select/Select";
import ButtonP from "./Button/ButtonP";
import IconLink from "./IconLink/IconLink";
import { BsCommand, BsMegaphone, BsDisplay } from "react-icons/bs";
import { IoEarth } from "react-icons/io5";
//TODO:
import "../TopBar/TopNavBar.scss";
import BadgeNotify from "./IconNotify/BadgeNotify";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import ProfileImage from "./ProfileImg/ProfileImg";
import LogoPoli from "../../img/poliLogo.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
//FIXME:

const TopNavBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar
        expand='lg'
        bg={theme === "dark" ? "dark" : "ligth"}
        className={
          theme === "dark" ? "navBar__container" : "navBar__container--ligth"
        }
      >
        <div className='Container__PoliLogo'>
          <img src={LogoPoli} id='PoliLogo' alt='Imagem Logo' />
        </div>
        <div className='Container__NavBar__PolichatName'>
          <IconPoli nome='POLICHAT' />
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <div>
              <ProfileImage />
            </div>
            <div>
              <SelectP options={["Poli", "Filial 1", "Filial 2"]} />
            </div>
            <div>
              <SelectP
                options={[`Canal Canal SDR 001`, "Opção 2", "Opção 3"]}
              />
            </div>
            <div>
              <ButtonP nome='Indique e ganhe' />
            </div>

            <IconLink
              imagem={<BsCommand />}
              notify={<BadgeNotify typeBadge={"counter"} numberCounter={3} />}
            />
            <IconLink imagem={<BsDisplay />} notify={<BadgeNotify />} />
            <IconLink
              imagem={<IoEarth />}
              notify={<BadgeNotify typeBadge={"alert"} />}
            />
            <IconLink imagem={<BsMegaphone />} notify={<BadgeNotify />} />

            <div>
              <ThemeSelector />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavBar;
