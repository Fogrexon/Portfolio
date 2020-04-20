
import React from 'react';
import {
  Jumbotron, CardDeck, Container,

} from 'react-bootstrap';
import Items from '../gallery/Items';
import { GalleryCard } from '../gallery/Components';
import iconPath from '../images/fogrex_icon.svg';

const iconImage = new Image();
iconImage.src = iconPath;

export const BigTitle = () => (
  <Jumbotron className="jumbotron-fullheight jumbo-vertical-center text-light text-center bg-dark mb-0 radius-0 ht-tm-jumbotron">
    <Container>
      <h1>Welcome to Fogrex&apos;s Portfolio</h1>
      <div>
        これはFogrexのポートフォリオサイトになります。今まで僕が作った作品などを展示しています。
      </div>
    </Container>

  </Jumbotron>
);

export const Galleries = () => {
  const listItem = [];
  for (let i = Math.max(Items.length - 3, 0); i < Items.length; i += 1) {
    listItem.push(
      <GalleryCard
        item={Items[i]}
        key={Items[i].title}
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
