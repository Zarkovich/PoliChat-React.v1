import "../BoasVindas/BoasVindas.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const BoasVindas = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`Boas-Vindas ${
        theme === "dark" ? "darkMode__Icon" : "ligthMode__Icon"
      }`}
    >
      ESPAÇO POLICHAT
    </div>
  );
};
export default BoasVindas;
