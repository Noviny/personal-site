import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const keyPages = [
  ['Code', '/code'],
  ['Docs', '/docs'],
  ['Stories', '/stories'],
  ['Blogstuff', '/meanderings'],
  ['Philosophy', '/philosophy'],
];

const IndexPage = ({ data }) => {
  let mdPages = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>
        Hi! My name's Ben Conolly, though I go by Noviny around the internets.
        People have been talking about how nice quaint personal sites are, so I
        decided to make myself one. Since I code a bunch, I'll probably use it
        to do some technology tests as well. There's a bit more on who I am{' '}
        <Link to="/whoami">here</Link>.
      </p>
      <p>Here's some simple pages on the kinds of writing I do.</p>
      <ul>
        {keyPages.map(([name, page]) => (
          <li>
            <Link to={page} key={name}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            postType
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
