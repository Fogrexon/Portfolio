/* eslint-disable react/prop-types */
import React from 'react';
import {
  Jumbotron, Button, Card, CardColumns,

} from 'react-bootstrap';
import Items from './Items';
import noImage from '../images/galleries/noimage.png';

export const BigTitle = () => (
  <Jumbotron>
    <h1>Gallery Page</h1>
    <div>
      これはFogrexが今まで作った作品を置いておくページ
    </div>
  </Jumbotron>
);

const GalleryCard = (props) => {
  let { src } = props.item;
  const {
    title, description, link, sourcecode,
  } = props.item;
  src = src || noImage;
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} key="play" disabled={!link}>Play</Button>
        <Button variant="secondary" href={sourcecode} key="source" disabled={!sourcecode}>Source</Button>
      </Card.Body>
    </Card>
  );
};

export const Galleries = () => {
  const listItem = [[], [], []];
  for (let i = 0; i < Items.length; i += 1) {
    listItem[0].push(
      <GalleryCard 
        item={Items[i]}
        key={Items[i].title}
      />
    );
  }
  return (
    <div className="main-section">
      <h1 className="section-title link">Gallery</h1>
      <CardColumns key='list1'>{listItem[0]}</CardColumns>
      <CardColumns key='list2'>{listItem[1]}</CardColumns>
      <CardColumns key='list3'>{listItem[2]}</CardColumns>
    </div>
  );
};