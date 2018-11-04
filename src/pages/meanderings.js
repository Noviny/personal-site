import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';

const MDLink = ({ node }) => (
  <li key={node.fields.slug}>
    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
  </li>
);

const Placeholder = ({ data }) => {
  let mdPages = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <p>
        For more formal writing, I post it to my{' '}
        <a href="https://medium.com/@noviny">medium</a> account. There is a blog
        section on this very website though for things I wrote more for me, or
        that have less obvious relevance+value:
      </p>
      <ul>{mdPages.map(MDLink)}</ul>
    </Layout>
  );
};

export default Placeholder;

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
