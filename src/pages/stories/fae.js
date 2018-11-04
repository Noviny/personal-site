import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';

const Fae = ({ data }) =>
  console.log(data) || (
    <Layout>
      <h1>Some v short fiction for an RPG campaign</h1>
      <h2>A briefish explanation</h2>
      <p>
        Kaladesh to Paradise City is a tabletop roleplaying game that I'm
        running with friends from work. It's the first time I've palyed a TTRPG
        outside of my high school friends who have been playing together for
        *deep breath* 16 years.
      </p>
      <p>
        A challenge I didn't realise I needed to meet was to spend more time
        worldbuilding. There's an aesthetic and feel and space that I want for
        the campaign, and without writing small fiction in the world, I wasn't
        going to feel it well enough to support my normally off-the-cuff DMing
        style. I thought I would share them here because fun. At time of writing
        this I'm writing one a day, but this might be updated less. ¯\_(ツ)_/¯
      </p>
      <p>
        Why are we not playing DnD? Go read{' '}
        <a href="https://www.evilhat.com/home/fae/">Fate Accelerated's</a> pitch
        - I think it's both a more accessible RPG, but also one that's better at
        creating the stories I want in my games. As always YMMV.
      </p>
      <h2>The small bits</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} dangerouslySetInnerHTML={{ __html: node.html }} />
      ))}
    </Layout>
  );

export default Fae;

export const query = graphql`
  {
    allMarkdownRemark(filter: { fields: { postType: { eq: "fae" } } }) {
      edges {
        node {
          id
          fields {
            postType
            slug
          }
          html
          frontmatter {
            title
            author
            source
            description
            keywords
          }
        }
      }
    }
  }
`;
