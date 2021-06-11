import Message from "../message";
import Alert from "../alert";
import styles from "./messageBox.module.css";

const MessagesBox = ({ contentArray }) => {
    return (
        <section className={styles.box}>
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
