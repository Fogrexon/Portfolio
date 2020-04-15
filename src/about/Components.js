import React from 'react';

import icon from '../images/fogrex_icon.jpg';

const Icon = () => (<img src={icon} style={{ width: '40px' }} alt="fogrexicon" />);

const SecTitle = ({ title }) => (
  <h1 className="section-title">
    {title}
    <Icon />
  </h1>
);

const SectionOne = () => (
  <>
    <SecTitle title="Introduction" />
    <p>
      東京工業大学に所属する学部2年生。情報工学を専攻。
    </p>
  </>
);

export default () => (
  <>
    <SectionOne />
  </>
);
