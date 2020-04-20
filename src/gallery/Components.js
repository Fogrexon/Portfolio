
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
  const listItem = [[], [], []];
  for (let i = 0; i < Items.length; i += 1) {
    listItem[0].push(
      <GalleryCard
        item={Items[i]}
        key={Items[i].title}
      />,
    );
  }
  return (
    <div className="main-section">
      <h1 className="section-title link">Gallery</h1>
      <CardColumns key="list1">{listItem[0]}</CardColumns>
      <CardColumns key="list2">{listItem[1]}</CardColumns>
      <CardColumns key="list3">{listItem[2]}</CardColumns>
    </div>
  );
};
