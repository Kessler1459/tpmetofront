import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { socketContext } from "../../socketContext";

const Home = ({ setUsername }) => {
    const [text, setText] = useState("");
    const socket = useContext(socketContext);
    const history = useHistory();
    return (
        <>
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
                    const date=Date.now();
                    socket.emit("create",{name: text, room: date})
                    //socket.emit("login", { name: text, room: date });
                    history.push("/"+date);
                }}
            >
                Create room
            </button>
        </>
    );
};

export default Home;
