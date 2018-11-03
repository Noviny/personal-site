import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
/** @jsx jsx */
import { jsx } from '@emotion/core';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout curPage="projects">
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        postType
      }
      frontmatter {
        title
      }
    }
  }
`;
