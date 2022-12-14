import data from '../data/article';
import stats from '../data/data';
import forbes from '../data/forbes';
import transactions from '../data/transactions';
import { Statistics } from './Statistics/Statistics';
import { BlogCard } from './BlogCard/BlogCard';
import { ForbesList } from './ForbesList/ForbesList';
import { CryptoHistory } from './CryptoHistory/CryptoHistory';
import { ThemeProvider } from 'styled-components'
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import {theme} from 'styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
        <BlogCard data={data} />
        <Statistics title="main statistics" stats={stats} />
        <ForbesList list={forbes} />
        <CryptoHistory transactionHistory={transactions} />
        <GlobalStyleComponent />
      </div>
    </ThemeProvider>
  );
};
