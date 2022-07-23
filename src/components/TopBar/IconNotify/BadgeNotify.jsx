import Badge from "react-bootstrap/Badge";
import { GoAlert } from "react-icons/go";

import "../IconNotify/BadgeNotify.scss";

const BadgeNotify = ({ typeBadge, numberCounter }) => {
  if (typeBadge === "counter") {
    return (
      <Badge pill bg='secondary' className='notify__style'>
        {numberCounter}
      </Badge>
    );
  } else if (typeBadge === "alert") {
    return <GoAlert className='notify__style notify__style--alert' />;
  }
};

export default BadgeNotify;
