import React from 'react';
import HomeContentBody from "./body/home/HomeContentBody";
import Content from "./Content";

function Home() {
    return (
        <Content contentHeaderTitle={"사라질 홈이다"}>
            <HomeContentBody/>
        </Content>
    );
}

export default Home;