import React from 'react';
import Subscribe from './subscribe';
import Banner from './Banner';
import BlogList from './BlogList';

function Blog()
{
    return(
        <>
        <Banner />
        <BlogList/>
        <Subscribe />
        </>
    );
}
export default Blog;