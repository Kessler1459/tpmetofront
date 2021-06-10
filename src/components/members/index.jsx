import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Members = ({ socket }) => {

    const [members, setMember] = useState([]);
    const { roomId } = useParams();

    useEffect(() => {

        return () => {
            
        }
    }, [members]);

    return (
        <div className="col-md-8">
          <h2>Members</h2>
            <ul> 
                {members.map(member => (
                <li key={member.id}>{member}</li>
                ))}                
            </ul>
        </div>		
	);
};
export default Members ;

