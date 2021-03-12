/**
 * @file Entry point of App.
 */

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2>{"I'm Stas"}</h2>
            <p>
                Need a developer?
                <a href="/contacts">Contact me</a>
                <p>
                    Need a developer{' '}
                    <Link to={'/contacts'}>Contact me</Link>
                </p>
            </p>
        </Layout>
    );
};

export default IndexPage;
