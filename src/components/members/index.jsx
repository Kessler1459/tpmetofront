
const Members = ({ members }) => {


    return (
        <div >
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

