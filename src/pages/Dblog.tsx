import styled from 'styled-components';
import { AppTheme } from '../mainStyled';

const Sdblog = styled.article`
  background: ${AppTheme.colors.first};
  margin: 0 1rem;
`;

const Dblog = () => {
  console.log('Dblog');
  console.log(process.env.DBLOG_API_URL);
  return (
    <Sdblog>
      <h1>Dblog render</h1>
    </Sdblog>
  );
};

export default Dblog;
