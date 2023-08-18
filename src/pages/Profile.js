import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Container from '../components/Container';
import Blog from '../components/Blog';
import SortButton from '../components/SortButton';

const Profile = ({ userBlogs }) => {
  const [sort, setSort] = useState('latest');

  const handleSort = () => {
    setSort(sort === 'latest' ? 'oldest' : 'latest');
  };

  const sortedUserBlogs =
    sort === 'latest'
      ? [...userBlogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )
      : userBlogs;

  return (
    <>
      <Helmet>
        <title>profile | blog: any</title>
      </Helmet>
      <Container semantic='main'>
        <SortButton sort={sort} handleSort={handleSort} />
        {sortedUserBlogs.map((userBlog) => (
          <Blog key={userBlog.id} blog={userBlog} />
        ))}
      </Container>
    </>
  );
};

export default Profile;
