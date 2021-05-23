import styles from "./alert.module.css";

const Alert = ({ connected, username }) => (
    <div className={styles.alert}>
        {connected ? `${username} has joined the room` : `${username} has disconnected`}
    </div>
);

export default Alert;
