import React from 'react';
import { BigTitle } from '../utils/Components';
import { Galleries } from './Components';

export default () => (
  <React.Fragment>
    <BigTitle title='Gallery' >
      <p>
        ここではFogrexの作品を展示しています
      </p>
    </BigTitle>
    <Galleries />
  </React.Fragment>
);