import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Placeholder = () => (
  <Layout>
    <h1>Documentation Work</h1>
    <p>
      Since getting into this programming thing, I've gravitated (been pushed
      towards?) documentation, since I've already written a lot of words, I must
      be okay at writing them, and so I've helped document a bunch of things. As
      my <Link to="code">code</Link> section shows, I've also taken quite a lot
      of interest in tools to help with documentation. Let's have some links to
      them.
    </p>
    <h2>Docs I have helped out on:</h2>
    <ul>
      <li>
        <a href="https://keystonejs.com/getting-started">Keystone 4</a>
      </li>
      <li>
        <a href="https://react-select.com/home">react-select</a>
      </li>
      <li>
        <a href="https://atlaskit.atlassian.com/">atlaskit</a>
      </li>
    </ul>
  </Layout>
);

export default Placeholder;
