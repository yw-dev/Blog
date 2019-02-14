import React from 'react'
import { Link } from 'gatsby'
import {Helmet} from "react-helmet"

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

// import '../css/index.css'; // add some style if you want!

export default function About({
    data
   }) {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <div className="blog-posts">
                {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                    return (
                    <div className="blog-post-preview" key={post.id}>
                        <h1>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>{post.frontmatter.date}</h2>
                        <p>{post.excerpt}</p>
                    </div>
                    );
                })}
            </div>
            <Link to="/page-2/">Go to page 2</Link>
            <Link to="/inode/">inode</Link>
        </Layout>
    );
   }
   
export const pageQuery = graphql`
    query AboutQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    path
                    }
                }
            }
        }
    }
`;