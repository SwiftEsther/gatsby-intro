import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>Home</h1>
        <p>Hello Nigeria!</p>
        <Link to='/about/'>&rarr; Learn more about me</Link>
    </Layout>
);
