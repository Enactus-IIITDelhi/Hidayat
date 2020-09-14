import React from 'react'
import Banner from './Banner'
import Jumbo from './Jumbo'
import Contact from './Contact'
import Blog from './Blog'
function Home(props) {
    return (
        <>
        <Jumbo />
        <Banner />
        <Blog />
        <Contact />
        </>
    );
}

export default Home;
