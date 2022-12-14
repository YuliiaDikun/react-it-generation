import data from '../data/article';
import stats from '../data/data';
import forbes from '../data/forbes'
import { Statistics } from './Statistics/Statistics';
import { BlogCard } from './BlogCard/BlogCard';
import { ForbesList } from './ForbesList/ForbesList';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      {/* <BlogCard data={data} /> */}
      <Statistics title="main statistics" stats={stats} />
      <ForbesList list={forbes}/>
    </div>
  );
};
