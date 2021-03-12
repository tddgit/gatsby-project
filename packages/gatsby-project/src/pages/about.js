/**
 * @file About Page.
 */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>AboutPage</h1>
            <p>
                I am Andrew you can find my contacts{' '}
                <Link to={'/contacts'}>Here</Link>{' '}
            </p>
        </Layout>
    );
};

export default AboutPage;
