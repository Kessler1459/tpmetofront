import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Timer= ({socket}) => {

  const timer = 10;

  const [seconds, setSeconds] = useState(timer);
  const { roomId } = useParams();
  const history = useHistory();
  


    useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
      if (seconds === 0) {
        console.log("hola");
        socket.emit("timeout", roomId);
         history.push("/");
      }
     
    },1000);    
    return () => clearInterval(interval);
  }, [seconds,history,roomId,socket]);


     

    return (
        <div >
          <h3 >
                Your time will end in {seconds} 
          </h3>
        </div>
    );

}

export default Timer ;
