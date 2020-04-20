import React from 'react';
import { BigTitle, Content } from '../utils/Components';
import About from './Components';

export default () => (
  <>
    <BigTitle title="Fogrex">
      <p>
        Fogrexの概要
      </p>
    </BigTitle>
    <Content>
      <About />
    </Content>
  </>
);
