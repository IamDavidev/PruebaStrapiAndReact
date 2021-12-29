import { useEffect } from 'react';
import styled from 'styled-components';
import GetPots from '../components/GetPots';
import Query from '../components/Query';
import { AppTheme } from '../mainStyled';

const Sdblog = styled.article`
  background: ${AppTheme.colors.first};
  margin: 0 1rem;
`;

const Dblog = () => {
  console.log('Dblog');
  return (
    <Sdblog>
      <h1>Dblog render</h1>
      <GetPots />
    </Sdblog>
  );
};

export default Dblog;
