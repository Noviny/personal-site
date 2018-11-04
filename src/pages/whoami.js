import React from 'react';
import Layout from '../components/layout';

const WhoAmI = () => (
  <Layout>
    <h1>Ben Conolly (Noviny)</h1>
    <blockquote>
      I have no idea what I'm doing, I'm just very opinionated, and think too
      much*
    </blockquote>
    <p>
      Philosopher turned writer, then rotated to coding, where I have found a
      nice groove in the ground that seems to be nicely holding me.
    </p>
    <h2>Links to more useful places:</h2>
    <li>
      <a href="https://github.com/Noviny">github</a> to see what code I write
    </li>
    <li>
      <a href="https://twitter.com/noviny">twitter</a> for vague sincerity
    </li>
    <li>
      <a href="https://medium.com/@noviny">medium</a> for v profesh blogging
    </li>
    <p>
      *Quote credited to{' '}
      <a href="https://www.youtube.com/watch?v=dRkbqK9SqJ0">Dael Kingsmill</a>{' '}
      who I thank for saying something that resonated so strongly with me{' '}
    </p>
  </Layout>
);

export default WhoAmI;
