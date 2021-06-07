import Message from "../message";
import Alert from "../alert";

const MessagesBox = ({ contentArray }) => {
    return (
        <section>
            {contentArray.map((obj, i) => {
                return obj.body ? (
                    <Message body={obj.body} user={obj.username} key={i} />
                ) : (
                    <Alert
                        connected={obj.connected}
                        username={obj.user}
                        key={i}
                    />
                );
            })}
        </section>
    );
};

export default MessagesBox;
