import React from 'react';
import {
  Button, Badge, Container,
} from 'react-bootstrap';

import _Line from './Line';
import style from './Gallery.module.scss';

export default ({
  id, item, index, len,
}) => {
  const {
    title, tags, description, link, sourcecode,
  } = item;
  const Line = _Line(id);
  return (
    <Container className={style.detail_inner}>
      <Line delay={0}>
        <h2>
          {`#${index + 1}/${len} ${title}`}
        </h2>
      </Line>
      <Line delay={0.2}>
        <div>
          {
            tags.split(' ').map((tag) => (
              <Badge variant="secondary" key={tag} style={{ borderRadius: '10px', margin: '2px' }}>{tag}</Badge>
            ))
          }
        </div>
      </Line>
      <Line delay={0.4}>
        <p>
          {description}
        </p>
      </Line>
      <Line delay={0.6}>
        <Button variant="primary" href={link} key="play" disabled={!link}>Link</Button>
        <Button variant="secondary" href={sourcecode} key="source" disabled={!sourcecode}>Source</Button>
      </Line>
    </Container>
  );
};
