/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { firebase } from '../firebase/firebase';
import { getBlogList, addBlog } from '../firebase/firestore';
import style from './gallery/Items.module.scss';

const Item = ({ blog }) => (
  <Card className={style.card}>
    <Link to={`/admin/blog/${blog.id}`}>
      <Button variant="link">{blog.title}</Button>
    </Link>
  </Card>
);

export default () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getBlogList().then((list) => {
      setItems(list);
    });
  }, []);

  const addItem = () => {
    addBlog({
      title: '仮タイトル',
      content: '仮コンテンツ',
      tags: [],
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    }).then(() => {
      getBlogList().then((workList) => {
        setItems(workList);
      });
    });
  };

  return (
    <Container>
      <h1 className="section-title">Blog Editing</h1>
      {
        items.map((item) => <Item key={item.id} blog={item} />)
      }
      <Button onClick={addItem}>AddItem</Button>
    </Container>
  );
};
