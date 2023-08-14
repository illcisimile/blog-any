import { Helmet } from 'react-helmet-async';

import Container from '../components/Container';
import UserBlog from '../components/UserBlog';

const Profile = ({ userBlogs }) => {
  //   console.log(userBlogs);
  //   console.log(userBlogs.author);

  return (
    <>
      <Helmet>
        <title>Profile | blog: any</title>
      </Helmet>
      <Container semantic='main'>
        {userBlogs.map((userBlog) => (
          <UserBlog key={userBlog.id} blog={userBlog} />
        ))}
      </Container>
    </>
  );
};

export default Profile;
