
import React from 'react';
import { Parallax, Element as ScrollElement } from 'rc-scroll-anim';

import Information from './Information';
import style from './Gallery.module.scss';
import Items from './Items';
import noImage from '../images/galleries/noimage.png';

export const GalleryCard = ({ item, index, len }) => {
  let { src } = item;
  const { title } = item;
  src = src || noImage;

  const id = `card_${index}`;

  const [css, setCss] = React.useState({
  });

  const scrollStart = () => {
    setCss({
      ...css,
      position: 'fixed',
      top: 0,
    });
  };
  const scrollEnd = () => {
    setCss({
      ...css,
      position: 'absolute',
      top: '300vh',
    });
  };
  const scrollStartBack = () => {
    setCss({
      ...css,
      position: 'fixed',
      top: 0,
    });
  };
  const scrollEndBack = () => {
    setCss({
      ...css,
      position: '',
      top: '',
    });
  };


  return (
    <ScrollElement className={style.card_outer} id={id}>
      <Parallax
        animation={
          {
            playScale: [1, 4],
            onStart: scrollStart,
            onComplete: scrollEnd,
            onStartBack: scrollStartBack,
            onCompleteBack: scrollEndBack,
          }
        }
        style={css}
        location={id}
        className={style.card_bg}
      >
        <Parallax
          animation={[
            {
              translateY: '0%',
              opacity: 0.3,
              playScale: [1, 2],
            },
            {
              translateY: '-20%',
              opacity: 0,
              playScale: [1, 2],
            },
          ]}
          style={{
            opacity: 0,
            transform: 'translateY(20%)',
          }}
          location={id}
          className={style.card_img_container}
        >
          <img src={src} className={style.card_bg_img} alt={title} />
        </Parallax>
        <div className={style.detail_outer}>
          <Information id={id} item={item} index={index} len={len} />
        </div>
      </Parallax>
    </ScrollElement>
  );
};

export default () => {
  const listItem = Items.map((item, index) => (
    <GalleryCard item={item} index={index} len={Items.length} key={item.title} />
  ));
  return (
    <div className="main-section">
      {listItem}
    </div>
  );
};
