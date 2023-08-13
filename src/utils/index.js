export const formatDate = (dateToFormat) => {
  return new Date(dateToFormat).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
