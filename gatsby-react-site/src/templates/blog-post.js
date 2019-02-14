import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

// import '../css/blog-post.css'; // make it pretty!
// create react templates
export default function Template({
    data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return ( 
        <div className="blog-post-container">
        <Helmet title = { `Your Blog Name - ${frontmatter.title}` }/> 
        <div className="blog-post">
            <h1> {frontmatter.title} </h1> 
            <h2>{frontmatter.date}</h2>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        </div>
    )
}
 
// create graphql 
export const pageQuery = graphql`
query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}`
