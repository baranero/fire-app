import React, { ReactNode } from "react";
import MainNavigation from "./MainNavigation";
import classes from '../styles/Layout.module.scss'

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
    <>
        <MainNavigation/>
        <div className={classes.layout}>{props.children}</div>
    </>
)

export default Layout