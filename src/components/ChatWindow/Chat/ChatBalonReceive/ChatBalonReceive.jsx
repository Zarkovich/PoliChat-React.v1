import "../ChatBalonReceive/ChatBalonReceive.scss";
import { useParams } from "react-router-dom";

const ChatBalonReceive = () => {
  const params = useParams();

  return (
    <div className='ChatBalonReceiveContainer'>
      <div className='ChatBalonReceiveContainer__ProfileImage'>
        <span className='ChatBalonReceiveContainer__ProfileImage--Image'>
          {params.pessoa.split(" ")[0].slice(0, 1) +
            params.pessoa.split(" ")[1].slice(0, 1)}
        </span>
      </div>
      <div className='ChatBalonReceiveContainer__Text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        recusandae dicta, vel ipsam nisi laboriosam culpa earum veniam minus
        delectus molestiae. Autem numquam aliquid ad deleniti delectus modi,
        reprehenderit nobis.
        <div className='ChatBalonReceiveContainer__Inicial'></div>
      </div>
    </div>
  );
};

export default ChatBalonReceive;
