import "./App.css";
import { useState } from "react";
import Chat from "./components/chat";
import { socketContext } from "./socketContext";
import { io } from "socket.io-client";
import Home from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    const socket = io("http://localhost:9000");
    const [username, setUsername] = useState("");

    return (
        <div className="App">
            <socketContext.Provider value={socket}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Home setUsername={setUsername} />
                        </Route>
                        <Route path="/room">
                            <Chat username={username}></Chat>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </socketContext.Provider>
        </div>
    );
}

export default App;
