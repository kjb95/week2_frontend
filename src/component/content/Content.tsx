import React, {PropsWithChildren} from 'react';
import ContentHeader from "./header/ContentHeader";
import ContentFooter from "./footer/ContentFooter";

interface ContentProps {
    contentHeaderTitle: string;
}

const Content = ({contentHeaderTitle, children}: PropsWithChildren<ContentProps>) => {
    return (
        <div className="content">
            <ContentHeader title={contentHeaderTitle}/>
            {children}
            <ContentFooter/>
        </div>
    );
};

export default Content;