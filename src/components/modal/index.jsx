import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./modal.module.css";

const Modal = ({ setUsername, socket, setModal }) => {
    const [text, setText] = useState("");
    const { roomId } = useParams();
    return (
        <div className={styles.modal}>
            <section className={styles.content}>
                <h3>Choose your alias</h3>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                />
                <button
                    onClick={() => {
                        setUsername(text);
                        setText("");
                        socket.emit("login", { name: text, room: roomId });
                        setModal(false);
                    }}
                >
                    Join room
                </button>
            </section>
        </div>
    );
};

export default Modal;
