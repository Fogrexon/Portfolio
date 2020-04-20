import React from 'react';
import { BigTitle, Content } from '../utils/Components';
import Galleries from './Components';

export default () => (
  <>
    <BigTitle title="Gallery">
      <p>
        ここではFogrexの制作物を展示しています
      </p>
    </BigTitle>
    <Content>
      <Galleries />
    </Content>
  </>
);
