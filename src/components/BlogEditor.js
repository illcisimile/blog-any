import Editor from 'react-simple-wysiwyg';

const BlogEditor = ({ html, handleChange }) => {
  const style = {
    backgroundColor: 'white',
    display: 'flex',
    flex: 'flex-wrap',
    resize: 'vertical',
    height: 'auto',
    border: '2px solid #d1d5db',
    margin: '0.5rem 0 0.5rem 0',
  };

  return (
    <Editor
      tabIndex='3'
      value={html}
      onChange={handleChange}
      containerProps={{ style: style }}
      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    />
  );
};

export default BlogEditor;
