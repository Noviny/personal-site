import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
/* @jsx jsx */
import { jsx, css } from '@emotion/core';

// This react-hot-loader code makes hooks work
import { setConfig } from 'react-hot-loader';
setConfig({ pureSFC: true });

// TODO - make this a vertical carousel of words
// This is our base idea https://codepen.io/rachsmith/pen/BNKJme
const writings = ['Code', 'Docs', 'Stories', 'Philosophy', 'Meanderings'];
// const writings = ['Philosophy', 'Meanderings'];

const Word = ({ word, isCurrent }) => (
  <span
    css={css`
      position: ${isCurrent ? 'relative' : 'absolute'};
      width: 220px;
      @media (max-width: 560px) {
        display: ${isCurrent ? 'inline' : 'none'};
      }
      opacity: ${isCurrent ? 1 : 0};
      ${isCurrent
        ? `transition: opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);`
        : ''};
    `}
  >
    {' '}
    {word}
  </span>
);

const Words = writings.map(word => (
  <span
    css={css`
      position: absolute;
      width: 220px;
      @media (max-width: 560px) {
        display: contents;
      }
    `}
    key={word}
  >
    {word}
  </span>
));

const Header = ({ siteTitle }) => {
  const [wordIndex, updateWordIndex] = useState(0);

  useEffect(
    () => {
      let timeout = setTimeout(() => {
        updateWordIndex((wordIndex + 1) % Words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    },
    [wordIndex]
  );

  return (
    <div
      css={css`
        background-color: #042960;
        marginbottom: 1.45rem;
        @media (max-width: 560px) {
          text-align: center;
        }
      `}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <span
              css={css`
                @media (max-width: 560px) {
                  display: flex;
                  flex-direction: column;
                }
              `}
            >
              {siteTitle}{' '}
            </span>
            {writings.map((word, index) => (
              <Word key={word} word={word} isCurrent={wordIndex === index} />
            ))}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
