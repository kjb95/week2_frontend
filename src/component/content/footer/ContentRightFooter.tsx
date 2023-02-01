import React from 'react';
import ContentRightFooterText from "./ContentRightFooterText";

const ContentRightFooter = () => {
    return (
        <div className="box-right">
            <ContentRightFooterText text="이용약관"/>
            <ContentRightFooterText text="개인정보처리방침"/>
        </div>
    );
};

export default ContentRightFooter;