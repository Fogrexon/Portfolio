import React from 'react';

const SecTitle = ({ title }) => <h1 className="section-title">{title}</h1>;

export default () => (
  <SectionOne />

);

const SectionOne = () => (
  <>
    <SecTitle title="Introduction" />
    <div />
  </>
);
