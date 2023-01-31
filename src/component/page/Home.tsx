import React from 'react';
import ContentHeader from "../content/header/ContentHeader";
import ContentFooter from "../content/footer/ContentFooter";
import HomeContentBody from "../content/body/HomeContentBody";

function Home() {
    return (
        <div className="content">
            <ContentHeader title="사라질 홈이다" />
            <HomeContentBody/>
            <ContentFooter/>
        </div>
    );
}

export default Home;