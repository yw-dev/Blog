import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'


const SearchBar = ({siteTitle})=>(
    <div class="toggle-search">
      <i class="fa fa-search fa-fw"></i>
      <form class="navbar-search" action="" method="get" role="search">
        <input type="text" name="s" class="" autoComplete="off" placeholder="输入关键词..."></input>
      </form>
    </div>
)

SearchBar.propTypes = {
  siteTitle: PropTypes.string,
}

SearchBar.defaultProps = {
  siteTitle: ``,
}

export default SearchBar
