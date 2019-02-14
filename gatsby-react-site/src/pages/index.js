import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SearchBar from '../components/searchbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { fas } from '@fortawesome/free-solid-svg-icons'

//library.add(FontAwesomeIcon, fab, fas)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1><i class="fas fa-angle-down"></i>
Download SVGPerfect for when you want to use just one icon as a vector on the desktop or in your own icon workflow.
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <SearchBar />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/inode/">inode</Link>
  </Layout>
)

export default IndexPage
