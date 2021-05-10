import { useContext, useState,useEffect } from "react";
import { socketContext } from "../../socketContext";
import Message from "../message";

const Chat = () => {
    const socket = useContext(socketContext);
    const [mess, setMess] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("message", (data) => {
            setMessages([...messages, data]);
            setMess("");
        });
    });

    const submitMessage = (e) => {
        e.preventDefault();
        socket.send(mess);
    };

    return (
        <div>
            {messages.map((msg, i) => (
                <Message body={msg} key={i} />
            ))}
            <form onSubmit={submitMessage}>
                <input
                    type="text"
                    name="inp"
                    id="inp"
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                />
                <button type="submit">send</button>
            </form>
        </div>
    );
};
export default Chat;
