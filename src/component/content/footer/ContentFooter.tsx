import React from "react";
import ContentLeftFooter from "./ContentLeftFooter";
import ContentRightFooter from "./ContentRightFooter";

function ContentFooter() {
    return (
        <div className="content-footer">
            <ContentLeftFooter/>
            <ContentRightFooter/>
        </div>
    );
}

export default ContentFooter;
