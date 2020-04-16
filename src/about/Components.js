import React from 'react';

import icon from '../images/fogrex_icon.svg';
import style from './About.module.scss';

const Icon = () => (<img src={icon} style={{ width: '2rem' }} alt="fogrexicon" />);

const Section = ({ title, children }) => (
  <div>
    <h1 className="section-title">
      {title}
      <Icon />
    </h1>
    {children}
  </div>
);
const Subsection = ({ title, children }) => (
  <>
    <h2 className="sub-section-title">
      {title}
    </h2>
    <p className="sub-section">
      {children}
    </p>
  </>
);

export default () => (
  <>
    <Section title="Introduction">
      <Subsection title="Name">
        <strong>Fogrex</strong>
        (Fogrexonが正式名称ですが長いので最近はこっちの方が多いです)
      </Subsection>
      <Subsection title="Age">
        19歳(5/29生まれ)
      </Subsection>
      <Subsection title="Affiliation">
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
    </Section>

    <Section title="About Icon">
      <div className={style.fogrex_container}>
        <img src={icon} className={style.fogrex} alt="Big Fogrex Icon" />
      </div>
      このアイコンは私のシンボルともいえるものです。3秒で書きました。私の公式のページやチャンネルにはいたるところに用いられています。以下にsvgファイルを置いておきます。
      <a href={icon}>SVG</a>
    </Section>

    <Section title="Contact">
      Footer参照
    </Section>
  </>
);
