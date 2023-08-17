import { Helmet } from 'react-helmet-async';

import Blog from '../components/Blog';
import Container from '../components/Container';

const BlogList = ({ blogs }) => {
  return (
    <>
      <Helmet>
        <title>home | blog: any</title>
      </Helmet>
      <Container semantic='main'>
        {[...blogs]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
      </Container>
    </>
  );
};

export default BlogList;
