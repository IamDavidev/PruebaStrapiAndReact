import { useEffect } from 'react';
import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
import { ListPost } from '../services/Query';

const Sdblog = styled.article`
  background: ${AppTheme.colors.first};
  margin: 0 1rem;
`;

const Dblog = () => {
  console.log('Dblog');
 
  useEffect(() => {
    ListPost()
  }, [])
 
  return (
    <Sdblog>
      <h1>Dblog render</h1>
    </Sdblog>
  );
};

export default Dblog;
