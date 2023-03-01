import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './MainNavigation.module.scss'
import { faGear, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>FireApp</h1>
            <ul className={classes['nav-list']}>
                <li className={classes['nav-list-item']}>Urlopy</li>
                <li className={classes['nav-list-item']}>Nadgodziny</li>
                <li className={classes['nav-list-item']}>Zwolnienia lekarskie</li>
                <li className={classes['nav-list-item']}> Użytkownicy</li>
                <li className={classes['nav-list-item']}>
                    <FontAwesomeIcon
                        icon={faGear}
                        style={{ fontSize: 35, color: "black" }}
                    />
                </li>
                <li className={classes['nav-list-item']}>
                    <FontAwesomeIcon
                        icon={faUser}
                        style={{ fontSize: 35, color: "black" }}
                    />
                </li>
                <li className={classes['nav-list-item']}>
                    <FontAwesomeIcon
                        icon={faUserPlus}
                        style={{ fontSize: 35, color: "black" }}
                    />
                </li>
            </ul>

        </header>
    )
}

export default MainNavigation