const Members = ({ members }) => {

    return (
        <div>
            <h2>Members</h2>
            <ul>
                {members.map((member,i) => (
                    <li key={i}>{member}</li>
                ))}
            </ul>
        </div>
    );
};
export default Members;
