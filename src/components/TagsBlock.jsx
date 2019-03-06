import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes, { element } from 'prop-types';

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 16px;
  padding: 1rem 2rem;
  a {
    margin: 0 0.5rem 0.5rem 0;
    color: ${props => props.theme.colors.white.grey};
    padding: 0.15rem 0.5rem;
    background: ${props => props.theme.colors.card.light};
    border-radius: 10px;
  }
  a:hover {
    color: ${props => props.theme.colors.white.light};
    background:  ${props => props.theme.colors.card.base};
    border: ${props => props.theme.colors.card.base};
  }
`;

const TagsBlock = ({ spath, list }) => (
  <TagsContainer>

    {list.map((element, index) => {
      return (
        <Link key={index} to={`/${spath}/${element}`}>
          <span>{element}</span>
        </Link>
      )}
    )}

  </TagsContainer>
);

export default TagsBlock;

TagsBlock.propTypes = {
    spath: PropTypes.string,
    list: PropTypes.array,
};