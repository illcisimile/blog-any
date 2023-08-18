const SortButton = ({ sort, handleSort }) => {
  return (
    <div className='flex justify-end px-8'>
      <button
        type='button'
        className='flex gap-1 rounded-md border-2 border-black px-2 py-1 text-sm hover:bg-black hover:text-white'
        onClick={handleSort}
      >
        {sort}
        {sort === 'latest' ? (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 15.75l7.5-7.5 7.5 7.5'
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SortButton;
