import Button from "react-bootstrap/Button";

import "../Button/ButtonP.scss";

const ButtonP = ({ nome }) => {
  return (
    <div className='container__button'>
      <Button variant='warning' size='lg'>
        {nome}
      </Button>
    </div>
  );
};

export default ButtonP;
