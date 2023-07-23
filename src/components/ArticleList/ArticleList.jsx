/* eslint-disable react/prop-types */
import data from '../../../articles.json';
import Article from '../Article/Article';

const ArticleList = () => {
  return (
    <div className='mt-5 sm:mt-0 grid gap-5 m-auto max-w-5xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000]'>
      {data.map((props, index) => (
        <Article
          key={index}
          {...props}
        />
      ))}
    </div>
  );
};

export default ArticleList;
