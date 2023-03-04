import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './MainNavigation.module.scss'
import { faGear, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import React from 'react';

const MainNavigation: React.FC = () => {

    return (
        <header className={classes.header}>

            <Link href="/">
                <h1 className={classes.title}>FireApp</h1>
            </Link>

            <ul className={classes['nav-list']}>
                <li className={classes['nav-list-item']}>Urlopy</li>
                <li className={classes['nav-list-item']}>Nadgodziny</li>
                <li className={classes['nav-list-item']}>Zwolnienia lekarskie</li>
                <Link href="/users">
                    <li className={classes['nav-list-item']}>Użytkownicy</li>
                </Link>
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