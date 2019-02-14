import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Template from '../templates/blog-post';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Template />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
