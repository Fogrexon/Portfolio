import React from 'react';
import { Parallax } from 'rc-scroll-anim';

export default (id) => ({ delay, children }) => (
  <Parallax
    animation={[
      {
        opacity: 1,
        translateX: 0,
        playScale: [delay + 1.0, delay + 1.5],
      },
      {
        opacity: 0,
        translateX: '-10%',
        playScale: [1, 1.5],
      },
    ]}

    style={{
      transform: 'translateX(-10%)',
      opacity: 0,
    }}
    location={id}
  >
    {children}
  </Parallax>
);
