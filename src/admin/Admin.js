import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <Container>
    <h1 className="section-title">Admin Panel.</h1>
    <Link to="/admin/work"><Button component={Link} to="/admin/work">作品編集</Button></Link>
  </Container>
);
