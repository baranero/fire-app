import React, { ReactNode } from "react";
import MainNavigation from "./MainNavigation";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
    <>
        <MainNavigation/>
        <div className="layout">{props.children}</div>
    </>
)