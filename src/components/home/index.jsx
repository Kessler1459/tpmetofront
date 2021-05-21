import { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = ({ setUsername }) => {
    const [text, setText] = useState("");
    const history = useHistory();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setUsername(text);
                setText("");
                history.push("/room");
            }}
        >
            <h3>Choose your alias</h3>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                name="username"
                id="username"
            />
            <button type="submit">Create room</button>
        </form>
    );
};

export default Home;
