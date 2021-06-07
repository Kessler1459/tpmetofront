import { useContext, useState, useEffect } from "react";
import { socketContext } from "../../socketContext";
import Modal from "../modal";
import MessagesBox from "../messagesBox";
import Timer from "../timer";

const Chat = ({ username, setUsername }) => {
    const socket = useContext(socketContext);
    const [showModal, setModal] = useState(false);
    const [body, setBody] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!username) setModal(true);
        socket.on("alert", (alert) => {
            setMessages((messages) => [...messages, alert]);
        });
        socket.on("message", (msg) => {
            setMessages((messages) => [...messages, msg]);
        });
        socket.on("prevMessages", (prevMessages) => {
            setMessages(prevMessages);
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
            <MessagesBox contentArray={messages}></MessagesBox>
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

            <Timer socket={socket} />
        </div>
    );
};
export default Chat;
