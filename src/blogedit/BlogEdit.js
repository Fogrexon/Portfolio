import React, { useState, useEffect } from 'react';
import SimpleMDE from 'react-simplemde-editor';
// import 'easymde/dist/easymde.min.css';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { getBlog, updateBlog } from '../firebase/firestore';

export default (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');
  const [submited, setSubmited] = useState(false);

  useEffect(
    () => {
      getBlog(id).then((blog) => {
        setMarkdown(blog.content);
        setTitle(blog.title);
      });
    },
    [],
  );

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleMarkdownChange = (e) => {
    setMarkdown(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(id, {
      title,
      content: markdown,
    }).then(() => {
      setSubmited(true);
    });
  };

  if (submited) {
    return <Redirect to="/admin/blog" />;
  }

  return (
    <Container>
      <h1 className="section-title">Blog Editor</h1>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control key="title" placeholder="Title" type="text" onChange={handleTitleChange} value={title} />
        </Form.Group>
        {markdown ? <SimpleMDE onChange={handleMarkdownChange} value={markdown} /> : ''}
        <Form.Control key="update" type="submit" onClick={handleSubmit} value="Update" />
      </Form>
    </Container>
  );
};
