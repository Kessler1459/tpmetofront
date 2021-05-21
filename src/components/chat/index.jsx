import { useContext, useState, useEffect } from "react";
import { socketContext } from "../../socketContext";
import { useHistory } from "react-router-dom";
import Message from "../message";

const Chat = ({ username }) => {
    const history = useHistory();
    const socket = useContext(socketContext);
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!username) history.replace("/");
        socket.on("message", (msg) => {
            setMessages([...messages, msg]);
            setBody("");
        });
    });

    const submitMessage = (e) => {
        e.preventDefault();
        socket.send({ username, body });
    };

    return (
        <div>
            {messages.map((msg, i) =>
                msg.body ? (
                    <Message body={msg.body} user={msg.username} key={i} />
                ) : (
                    ""
                )
            )}
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
        </div>
    );
};
export default Chat;
