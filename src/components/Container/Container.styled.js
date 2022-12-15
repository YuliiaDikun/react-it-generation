import styled from 'styled-components';

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.light};
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.media.mobile} {
    max-width: 480px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
  ${({ theme }) => theme.media.tablet} {
    background-color: ${({ theme }) => theme.colors.dark};
    max-width: 768px;
  }
  ${({ theme }) => theme.media.desktop} {
    background-color: ${({ theme }) => theme.colors.accent};
    max-width: 1200px;
  }
`;
