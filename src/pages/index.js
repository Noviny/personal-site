import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const MDLink = ({ node }) => (
  <li key={node.fields.slug}>
    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
  </li>
);

const IndexPage = ({ data }) => {
  let mdPages = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>Very Placeholder</h1>
      <p> - enjoy these two things I have:</p>
      <ul>
        {mdPages.map(MDLink)}
        <li>
          <Link to="/whoami">Who even am I?</Link>
        </li>
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
