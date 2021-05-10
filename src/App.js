import "./App.css";
import  Chat  from "./components/chat";
import { socketContext } from "./socketContext";
import {io} from 'socket.io-client';

function App() {
	const socket = io("http://localhost:9000")
	
    return <div className="App">
		<socketContext.Provider value={socket}>
			<Chat></Chat>
		</socketContext.Provider>
		
	</div>;
}

export default App;
