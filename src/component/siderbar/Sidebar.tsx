import React from 'react';
import OneDepthMenu from "./OneDepthMenu";

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul className="sidebar-menu tree" data-widget="tree">
                <OneDepthMenu menuName="홈" url="/"/>
                <OneDepthMenu menuName="차트 리포트"  url="/chart-report"/>
            </ul>
        </aside>
    );
}

export default Sidebar;