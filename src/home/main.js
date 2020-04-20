import React from 'react';
import { BigTitle, Galleries } from './Components';
import { Content } from '../utils/Components';
import '../App.scss';

export default () => (
  <>
    <BigTitle />
    <Content>
      <Galleries />
    </Content>
  </>
);
