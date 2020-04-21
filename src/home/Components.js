
import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Items from '../gallery/Items';
import { GalleryCard } from '../gallery/Components';
import iconPath from '../images/fogrex_icon.svg';

const iconImage = new Image();
iconImage.src = iconPath;

export default () => {
  const listItem = [];
  for (let i = Math.max(Items.length - 2, 0); i < Items.length; i += 1) {
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
      <CardColumns>{listItem}</CardColumns>
    </div>
  );
};
