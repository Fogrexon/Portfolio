import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getBlogList } from '../firebase/firestore';
import style from './Blog.module.scss';

const BlogCard = ({ item }) => (
  <Card className={style.card}>
    <Link to={`/blog/${item.id}`}>{item.title}</Link>
  </Card>
);

export default () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(
    () => {
      getBlogList().then((workList) => {
        setItems(workList);
      });
    },
    [],
  );
  return (
    <>
      <Container className="main-content">
        <h1 className="section-title">Blog</h1>
        {items.map((item) => (
          <BlogCard item={item} />
        ))}
      </Container>
    </>
  );
};
