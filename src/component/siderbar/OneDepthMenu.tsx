import React from 'react';

interface OneDepthMenuProps {
    menuName:string
    url:string
}
function OneDepthMenu ({menuName, url}:OneDepthMenuProps) {
    return (
        <li>
            <a className="one-depth-title" href={url}>
                <div className="box-left">
                    <i className="ico ico-32 ico-menu-01"></i>
                    <span className="fz-16">{menuName}</span>
                </div>
            </a>
        </li>
    );
}

export default OneDepthMenu;