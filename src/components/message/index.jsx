export const Message = ({ body, user }) => (
    <div>
        <strong>{user} says: </strong>
        {body}
    </div>
);

export default Message;
