import { useEffect, useState } from "react";
import PainelLeft from "../Painelleft/PainelLeft";

export const RouteRender = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize.innerWidth <= 960) return;
  return <PainelLeft />;
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
