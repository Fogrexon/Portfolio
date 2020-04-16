
import React from 'react';
import {
  Jumbotron, Button, Media, Card, CardDeck,

} from 'react-bootstrap';
import Items from '../gallery/Items';
import iconPath from '../images/fogrex_icon.svg';
import noImage from '../images/galleries/noimage.png';

const iconImage = new Image();
iconImage.src = iconPath;

export const BigTitle = () => (
  <Jumbotron style={{ background: 'transparent' }}>
    <Media>
      <img
        width={128}
        height={128}
        className="mr-3"
        src={iconImage.src}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h1>Welcome to Fogrex&apos;s Portfolio</h1>
        <p>
          これはFogrexのポートフォリオサイトになります。今まで僕が作った作品などを展示しています。
        </p>
        <p>
          <Button variant="primary" href="about">Learn more</Button>
        </p>
      </Media.Body>
    </Media>

  </Jumbotron>
);

const GalleryCard = (props) => {
  let { src } = props;
  const {
    title, description, link, sourcecode,
  } = props;
  src = src || noImage;
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} key="play" disabled={!link}>Link</Button>
        <Button variant="secondary" href={sourcecode} key="source" disabled={!sourcecode}>Source</Button>
      </Card.Body>
    </Card>
  );
};

export const Galleries = () => {
  const listItem = [];
  for (let i = Math.max(Items.length - 3, 0); i < Items.length; i += 1) {
    listItem.push(
      <GalleryCard
        title={Items[i].title}
        key={Items[i].title}
        src={Items[i].src}
        description={Items[i].description}
        link={Items[i].link}
        sourcecode={Items[i].sourcecode}
      />,
    );
  }
  return (
    <div className="main-section">
      <h1 className="section-title">Gallery</h1>
      <CardDeck>{listItem}</CardDeck>
    </div>
  );
};
