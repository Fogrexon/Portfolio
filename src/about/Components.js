/* eslint-disable no-return-assign */
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Container from 'react-bootstrap/Container';

import icon from '../images/fogrex_icon.svg';
import style from './About.module.scss';


const SectionTitle = ({ title }) => {
  let x = title.length * -0.5 - 1;

  return (
    <div className="section-outer">
      <h1 className="text-center section-title">
        { title.split('').map((letter) => <Parallax x={[`${-(x += 1) * 0}px`, `${x * 50}px`]} className={style.title_letter}>{letter}</Parallax>) }
      </h1>
    </div>
  );
};

const Subsection = ({ title, children }) => (
  <div className="sub-section">
    <Parallax tagInner="h2" y={['-10px', '40px']} className="sub-section-title">
      {title}
    </Parallax>
    <p>
      {children}
    </p>
  </div>
);

export default () => (
  <>
    <SectionTitle title="Introduction" key="intro" />
    <Container>
      <Subsection title="Name" key="name">
        <strong>Fogrex</strong>
        (Fogrexonが正式名称ですが長いので最近はこっちの方が多いです)
      </Subsection>
      <Subsection title="Age" key="age">
        19歳(5/29生まれ)
      </Subsection>
      <Subsection title="Affiliation" key="affiliation">
        東京工業大学情報工学系学部2年
        <br />
        東京工業大学デジタル創作同好会traP
        (
        <a href="https://trap.jp/author/fogrex/">
          自分の記事
        </a>
        )
        <br />
        東京工業大学ロボット技術研究会 CGSquare,VR研
      </Subsection>
      <Subsection title="Interested in">
        Javascript(Nodejs React Vue) Typescript Go GLSL Unity 3DCGModeling Illust Gaming
      </Subsection>
      <Subsection title="Use">
        Javascript(Nodejs React) Typescript Go GLSL Unity
      </Subsection>
    </Container>

    <SectionTitle title="About Icon" key="icon" />
    <Container>
      <div className={style.fogrex_container}>
        <img src={icon} className={style.fogrex} alt="Big Fogrex Icon" />
      </div>
      このアイコンは私のシンボルともいえるものです。3秒で書きました。私の公式のページやチャンネルにはいたるところに用いられています。以下にsvgファイルを置いておきます。
      <a href={icon}>SVG</a>
    </Container>
    <SectionTitle title="Contact" key="contact" />
    <Container>
      Footer参照
    </Container>
  </>
);
