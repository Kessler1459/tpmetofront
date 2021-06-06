import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as workerTimers from "worker-timers";

const Timer = ({ socket }) => {
    const [seconds, setSeconds] = useState();
    const { roomId } = useParams();
    const history = useHistory();

    useEffect(() => {
        socket.on("timer", (remainingMs) => {
            setSeconds(Math.trunc(remainingMs / 1000));
        });
        const interval = workerTimers.setInterval(() => {
            setSeconds((seconds) => seconds - 1);
            if (seconds === 0) {
                socket.emit("timeout", roomId);
				socket.close();
                history.push("/");
            }
        }, 1000);
        return () => {
            workerTimers.clearInterval(interval);
        };
    });

    return (<>
        <div>{seconds ? <h3>Your time will end in {seconds}</h3> : null}</div>
		<button onClick={()=>socket.emit("reset")}> reset</button></>
		);
};

export default Timer;
