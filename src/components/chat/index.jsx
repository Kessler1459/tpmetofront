import { useContext, useState, useEffect } from "react";
import { socketContext } from "../../socketContext";
import Modal from "../modal";
import Message from "../message";
import Alert from "../alert";
import Timer from "../timer";


const Chat = ({ username, setUsername }) => {
    const socket = useContext(socketContext);
    const [showModal, setModal] = useState(false);
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!username) setModal(true);
        socket.on("alert",(alert)=>{
            setMessages([
                ...messages,
                <Alert
                    connected={alert.connected}
                    username={alert.user}
                    key={messages.length}
                />,
            ]);
        })
        socket.on("message", (msg) => {
            setMessages([
                ...messages,
                <Message
                    body={msg.body}
                    user={msg.username}
                    key={messages.length}
                />,
            ]);
            console.log("a");
        });
        
        return () => socket.removeAllListeners();
    }, [messages, socket, username]);

    const submitMessage = (e) => {
        e.preventDefault();
        socket.send({ username, body });
        setBody("");
    };

    return (
      <div>
        {messages}
        <form onSubmit={submitMessage}>
          <input
            type="text"
            name="inp"
            id="inp"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">send</button>
        </form>
        {showModal ? (
          <Modal
            setUsername={setUsername}
            socket={socket}
            setModal={setModal}
          />
            ) : null}
            
         <Timer 
         socket={socket}
        />
      </div>

        
    );
};
export default Chat;
