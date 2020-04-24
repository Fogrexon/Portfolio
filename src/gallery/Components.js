
import React from 'react';
import {
  Button, Badge, Container,
} from 'react-bootstrap';
import { Parallax } from 'rc-scroll-anim';

import style from './Gallery.module.scss';
import Items from './Items';
import noImage from '../images/galleries/noimage.png';


export const GalleryCard = ({ item }) => {
  let { src } = item;
  const {
    title, description, link, sourcecode, tags,
  } = item;
  src = src || noImage;

  return (
    <div className={style.card_outer}>
      <Parallax
        animation={{ y: '30%' }}
        style={
          {
            transform: 'translateY(-30%)',
          }
        }
        className={style.card_bg}
      >
        <img src={src} className={style.card_bg_img} alt="aaa" />
      </Parallax>
      <Container className={style.detail_container}>
        <h2>
          {title}
        </h2>
        <div>{tags.split(' ').map((tag) => (<Badge variant="secondary" key={tag} style={{ borderRadius: '10px', margin: '2px' }}>{tag}</Badge>))}</div>
        <p>
          {description}
        </p>
        <Button variant="primary" href={link} key="play" disabled={!link}>Link</Button>
        <Button variant="secondary" href={sourcecode} key="source" disabled={!sourcecode}>Source</Button>
      </Container>
    </div>
  );
};

export default () => {
  const listItem = Items.map((item) => <GalleryCard item={item} key={item.title} />);
  return (
    <div className="main-section">
      {listItem}
    </div>
  );
};
