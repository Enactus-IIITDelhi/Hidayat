import React from 'react'
import Banner from './Banner'
import Jumbo from './Jumbo'
import Contact from './Contact'
import Blog from './Blog'
import Mentor from './Mentor'
import AssessYourself from './AssessYourself'
function Home(props) {
    return (
        <>
        <Jumbo />
        <Banner />
        <AssessYourself />
        <Mentor />
        <Blog />
        <Contact />
        </>
    );
}

export default Home;
