import React from 'react';
import Layout from '../components/layout';

const WhoAmI = () => (
  <Layout>
    <h1>Noviny</h1>
    <blockquote>
      I have no idea what I'm doing, I'm just very opinionated, and think too
      much*
    </blockquote>
    <p>I should probably fill this out sometime</p>
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
      *Quote at the top is credit to{' '}
      <a href="https://www.youtube.com/watch?v=dRkbqK9SqJ0">Dael Kingsmill</a>{' '}
      who I thank for saying something that resonated so strongly with me{' '}
    </p>
  </Layout>
);

export default WhoAmI;
