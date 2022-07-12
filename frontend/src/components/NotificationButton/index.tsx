import icon from '../../assets/images/notification-icon.svg'

import './styles.css'

function NotificationButton() {
    return (
        <div className="nbsales-red-btn">
            <img src={icon} alt="notificar" />
        </div>
    )
}

export default NotificationButton