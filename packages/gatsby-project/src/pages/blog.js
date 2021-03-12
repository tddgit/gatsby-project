/**
 * @file Blog page.
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = () => {
    const posts = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        html
                        excerpt
                    }
                }
            }
            #            allMdx {
            #                edges {
            #                    node {
            #                        frontmatter {
            #                            title
            #                            date
            #                        }
            #                        html
            #                        excerpt
            #                    }
            #                }
            #            }
        }
    `);

    return (
        <Layout>
            <h1>Blog</h1>

            <ol>
                {posts.allMarkdownRemark.edges.map(
                    (item, idx) => {
                        return (
                            <li>
                                <h2 key={`${idx}title`}>
                                    {
                                        item.node
                                            .frontmatter
                                            .title
                                    }
                                </h2>
                                <p key={`${idx}date`}>
                                    {
                                        item.node
                                            .frontmatter
                                            .date
                                    }
                                </p>
                                <article
                                    key={`${idx}article`}
                                >
                                    {item.node.excerpt}
                                </article>
                            </li>
                        );
                    },
                )}

                {/* {posts.allMdx.edges.map((item, idx) => { */}
                {/*    return ( */}
                {/*        <li> */}
                {/*            <h2 key={`${idx}title`}> */}
                {/*                { */}
                {/*                    item.node.frontmatter */}
                {/*                        .title */}
                {/*                } */}
                {/*            </h2> */}
                {/*            <p key={`${idx}date`}> */}
                {/*                {item.node.frontmatter.date} */}
                {/*            </p> */}
                {/*            <article key={`${idx}article`}> */}
                {/*                {item.node.excerpt} */}
                {/*            </article> */}
                {/*        </li> */}
                {/*    ); */}
                {/* })} */}
            </ol>
        </Layout>
    );
};

export default BlogPage;
