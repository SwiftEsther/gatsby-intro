import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

export default () => {
    const posts = usePosts();
    return(
        <Layout>
            <h1>Home</h1>
            <p>Hello Nigeria!</p>
            <Link to='/about/'>&rarr; Learn more about me</Link>

            <h2>Read my blog</h2>
            {posts.map(post => (
                <pre>{JSON.stringify(post, null, 2)}</pre>
            ))}
        </Layout>
    )
};
