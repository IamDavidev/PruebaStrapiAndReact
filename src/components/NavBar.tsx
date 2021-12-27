import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
const Snavbar = styled.nav`
  background: ${AppTheme.colors.first};
  width: 100%;
    

  .nav {
    display: flex;
    justify-content: space-between;
  }
  .navAcess {
    display: flex;
    align-items:center;
    justify-content:center;
  }
  li{
    text-decoration:none;
    margin-right:2rem;
    list-style:none;
  }
  ul{
      display:flex
  }
`;

const Navbar = () => {
  return (
    <Snavbar>
      <div className="nav">
        <div className="navImage">
            <img src='' alt="" />
          <strong>dblog</strong>
        </div>
        <div className="navAcess">
          <div className="navLinks">
            <ul>
              <li>posts</li>
              <li>abuot</li>
            </ul>
          </div>
          <div className="navsearch">
            <label>
              search
              <input type="text" />{' '}
            </label>
          </div>
        </div>
      </div>
    </Snavbar>
  );
};

export default Navbar;
