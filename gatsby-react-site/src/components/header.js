import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import SearchBar from '../components/searchbar'
import './header.styl'

const Header = ({ siteTitle }) => (
    <div class="nav">
      <nav class="nav navbar">
        <ul id="" class="nav navbar-nav">
          <li class="menu-item"><a href="/"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; 首页</a></li>
            <li class="menu-item dropdown">
            <a href="/inode/">个人随笔
              <i class="fas fa-angle-down fa-fw" aria-hidden="true"></i>
            </a>
            <ul class="dropdown-menu">
              <li class="menu-item"><a href="/inode">个人日记</a></li>
              <li class="menu-item"><a href="/inode">生活随记</a></li>
            </ul>
          </li>
          <li class="menu-item dropdown"><a href="/technology/">技术杂谈<i class="fas fa-angle-down fa-fw" aria-hidden="true"></i></a>
            <ul class="dropdown-menu">
              <li class="menu-item"><a href="/technology">C/C++</a></li>
              <li class="menu-item"><a href="/technology">Java</a></li>
              <li class="menu-item"><a href="/technology">JavaScript</a></li>
              <li class="menu-item"><a href="/technology">Html5</a></li>
              <li class="menu-item"><a href="/technology">WebGL</a></li>
              <li class="menu-item"><a href="/technology">UnrealEngine4</a></li>
            </ul>
          </li>
          <li class="menu-item dropdown"><a href="/projects/">实战案例<i class="fas fa-angle-down fa-fw" aria-hidden="true"></i></a>
            <ul class="dropdown-menu">
              <li class="menu-item"><a href="/projects">Web</a></li>
              <li class="menu-item"><a href="/projects">游戏</a></li>
              <li class="menu-item"><a href="/projects">模型</a></li>
              <li class="menu-item"><a href="/projects">材质</a></li>
            </ul>
          </li>
          <li class="menu-item"><a href="/sources/">相关资源</a></li>
          <li class="menu-item"><a href="/about/">关于</a></li>
          <li style={{
              float: 'right',
            }}>
            <SearchBar />
            </li>
        </ul>
      </nav>
      <div class="toggle-search">
      </div>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
