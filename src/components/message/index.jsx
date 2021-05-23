export const Message = ({ body, user }) => {
    return (
        <div>
            <strong>{user} says: </strong>
            {body}
        </div>
    );
};

export default Message;
