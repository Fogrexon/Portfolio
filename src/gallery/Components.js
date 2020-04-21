
import React from 'react';
import {
  Button, Card, CardColumns, Badge,
} from 'react-bootstrap';
import Items from './Items';
import noImage from '../images/galleries/noimage.png';


export const GalleryCard = ({ item }) => {
  let { src } = item;
  const {
    title, description, link, sourcecode, tags,
  } = item;
  src = src || noImage;
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div>{tags.split(' ').map((tag) => (<Badge variant="secondary" key={tag} style={{ borderRadius: '10px', margin: '2px' }}>{tag}</Badge>))}</div>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} key="play" disabled={!link}>Link</Button>
        <Button variant="secondary" href={sourcecode} key="source" disabled={!sourcecode}>Source</Button>
      </Card.Body>
    </Card>
  );
};

export default () => {
  const listItem = Items.map((item) => <GalleryCard item={item} key={item.title} />);
  return (
    <div className="main-section">
      <h1 className="section-title link">Gallery</h1>
      <CardColumns>{listItem}</CardColumns>
    </div>
  );
};
