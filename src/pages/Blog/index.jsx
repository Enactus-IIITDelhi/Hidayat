import React from 'react';
import Subscribe from './subscribe';
import Banner from './Banner';
import BlogList from './BlogList';
import { Routes, Route } from 'react-router';
import Blog1 from './Blogs/Blog1';
import Blog2 from './Blogs/Blog2';
import Blog3 from './Blogs/Blog3';

function Blog()
{
    return(
        <>
        <Routes>
            <Route exact path="/" element={
                <>
                <Banner />
                <BlogList/>
                <Subscribe />
                </>
            } >
            </Route>

            <Route exact path="/1" element={<Blog1 />}></Route>
            <Route exact path="/2" element={<Blog2 />}></Route>
            <Route exact path="/3" element={<Blog3 />}></Route>
        </Routes>
        </>
    );
}
export default Blog;