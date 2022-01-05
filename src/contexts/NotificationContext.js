import { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

export const types = {
    error: 'danger',
    warn: 'warning',
    info: 'info',
    succes: 'success',
}
const defaultState = { show: false, message: '', type: types.error };

export const NotificationProvider = ({
        children
    }) => {
    const [notification, setNotification] = useState(defaultState)
    const addNotification = useCallback((message, type = types.error) => {
        setNotification({ show: true, message, type })
    }, []);

    const hideNotification = useCallback(() => setNotification(defaultState)) 
    return <NotificationContext.Provider value={{ notification, addNotification, hideNotification }}>
        {children}
    </NotificationContext.Provider>
}
export const useNotificationContext = () => {
    const state = useContext(NotificationContext)
    return state
}