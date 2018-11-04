import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const links = [
  ['codesandboxer', 'https://github.com/Noviny/codesandboxer'],
  [
    'pretty-proptypes (and extract-react-types)',
    'https://github.com/Noviny/pretty-proptypes',
  ],
  ['babel-crime', 'https://github.com/Noviny/babel-crime'],
];

const Placeholder = () => (
  <Layout>
    <h1>Code work</h1>
    <p>
      My joke when I started coding my joke was "I'm still going to be doing a
      lot of writing, just with more squiggly brackets.
    </p>
    <p>
      Uh, I don't know why I shared that bad joke. Here's a list of open source
      stuff I've worked on/helped with:
    </p>
    <ul>
      {links.map(([name, place]) => (
        <li key={name}>
          <Link to={place}>{name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Placeholder;
