import ChatBalonReceive from "./ChatBalonReceive/ChatBalonReceive";
import ChatBalonSend from "./ChatBalonSend/ChatBalonSend";

const Chat = () => {
  return (
    <div className='ChatContainer'>
      <ChatBalonReceive />
      <ChatBalonSend />
      <ChatBalonSend />
      <ChatBalonReceive />
      <ChatBalonSend />
      <ChatBalonReceive />
      <ChatBalonSend />
      <ChatBalonReceive />
      <ChatBalonReceive />
    </div>
  );
};

export default Chat;
