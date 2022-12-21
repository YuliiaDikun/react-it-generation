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
import { GlobalFontComponent } from 'fonts/FontStyled';
import { theme } from 'styles/theme';
import { MediaQ } from './MediaQ/MediaQ';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MediaQ deviceName={'mobile'}>
        <div style={{
          width: 100,
          height: 100,
          background: 'black',
        }}></div>
        </MediaQ>
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
          <GlobalFontComponent />
        </Container>
      </Section>
    </ThemeProvider>
  );
};
