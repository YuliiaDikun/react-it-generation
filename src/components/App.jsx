import data from '../data/article';
import stats from '../data/data';
import forbes from '../data/forbes';
import transactions from '../data/transactions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section.styled';
import { Heading } from './Heading/Heading.styled';
import { Container } from './Container/Container.styled';
import { BlogCard } from './BlogCard/BlogCard';
import { ForbesList } from './ForbesList/ForbesList';
import { CryptoHistory } from './CryptoHistory/CryptoHistory';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Container>
          <Heading marginBottom="50px" textAlign="center">
            Task 1
          </Heading>
          <BlogCard data={data} />
          <Heading marginBottom="50px" textAlign="center" marginTop="50px">
            Task 2
          </Heading>
          <Statistics title="main statistics" stats={stats} />
          <Heading marginBottom="50px" textAlign="center" marginTop="50px">
            Task 3
          </Heading>
          <ForbesList list={forbes} />
          <Heading marginBottom="50px" textAlign="center" marginTop="50px">
            Task 4
          </Heading>
          <CryptoHistory transactionHistory={transactions} />
          <GlobalStyleComponent />
        </Container>
      </Section>
    </ThemeProvider>
  );
};
