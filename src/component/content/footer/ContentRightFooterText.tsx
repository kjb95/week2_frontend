import React from 'react';

interface ContentRightFooterTextProps {
    text: string
}

const ContentRightFooterText = ({text}: ContentRightFooterTextProps) => {
    return (
        <a className="fz-13 fc-5" href="#!">
            {text}
        </a>
    );
};

export default ContentRightFooterText;