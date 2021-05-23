import "./App.css";
import { useState } from "react";
import Chat from "./components/chat";
import { socketContext,socket } from "./socketContext";
import Home from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    const [username, setUsername] = useState("");
    return (
        <div className="App">
            <socketContext.Provider value={socket}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Home setUsername={setUsername} />
                        </Route>
                        <Route path="/:roomId">
                            <Chat username={username} setUsername={setUsername}></Chat>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </socketContext.Provider>
        </div>
    );
}

export default App;
