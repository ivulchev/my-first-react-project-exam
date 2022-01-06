import { useEffect } from "react";
import { Toast } from "react-bootstrap"
import { useNotificationContext } from "../../contexts/NotificationContext"
import "./Notification.css"

const Notification = () => {
    const { notification, hideNotification  } = useNotificationContext();
    useEffect(() => {
        const timer = setTimeout(() => {
            hideNotification()
        }, 7000);
    },[notification])

    if (!notification.show) {
        return null;
    }
    return (
        <Toast className="d-inline-block m-1" bg={notification.type}>
            <Toast.Header className="toast-head">
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong >F1 Fanhome:</strong>
            </Toast.Header>
            <Toast.Body className = "toast-body">
                {notification.message}
            </Toast.Body>
        </Toast>
    )
}

export default Notification