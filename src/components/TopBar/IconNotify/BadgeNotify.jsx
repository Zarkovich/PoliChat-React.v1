import { GoAlert } from "react-icons/go";
import "../IconNotify/BadgeNotify.scss";

const BadgeNotify = ({ typeBadge, numberCounter }) => {
  if (typeBadge === "counter") {
    return (
      <div className='Notification'>
      <div>{numberCounter}</div>
    </div>
    );
  } else if (typeBadge === "alert") {
    return <GoAlert className='Alert' />;
  }
};

export default BadgeNotify;
