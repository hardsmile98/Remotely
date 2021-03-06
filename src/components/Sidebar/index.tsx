import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { COLORS, POINTS } from 'mytheme/theme';
import ROUTES from 'constants/routes';
import useAuth from 'hooks/useAuth';

const SidebarBox = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;

  @media (max-width: ${POINTS.md}) {
    width: 100%;
    flex-direction: row;
    padding-bottom: 0;
  }
`;

const LogoNameBox = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const LogoDescBox = styled.div`
  font-size: 11px;
`;

const AuthButton = styled.div`
  cursor: pointer;
  padding: 10px 30px;
  display: block;
  border-radius: 10px;
  :hover{
    background: ${COLORS.PRIMARY};
    color: white;
  }
  svg{
    margin-right: 5px;
  }

  @media (max-width: ${POINTS.md}) {
    display: none;
  }
`;

const MenuBox = styled.ul`
  margin-top: 100px;
  @media (max-width: ${POINTS.md}) {
    display: none;
  }
`;

const LinkBox = styled.li`
  a {
    padding: 10px 30px;
    display: block;
    border-radius: 10px;
    :hover{
      background: ${COLORS.PRIMARY};
      color: white;
    }
    svg{
      margin-right: 5px;
    }
  }
`;

function Sidebar() {
  const { isAuth, logout } = useAuth();

  const filterRoutes = isAuth
    ? ROUTES
    : ROUTES.filter((route) => !route.isNeedAuth);

  return (
    <SidebarBox>
      <div>
        <Link to="/">
          <LogoNameBox>
            REMOTELY.
          </LogoNameBox>
          <LogoDescBox>
            Ищи работу с нами
          </LogoDescBox>
        </Link>

        <MenuBox>
          {filterRoutes.map((route) => (
            <LinkBox key={route.name}>
              <Link to={route.path}>
                <FontAwesomeIcon icon={route.icon} />
                {route.name}
              </Link>
            </LinkBox>
          ))}
        </MenuBox>
      </div>

      {isAuth ? (
        <AuthButton onClick={logout}>
          <FontAwesomeIcon
            icon={faShareFromSquare}
          />
          Выход
        </AuthButton>
      ) : (
        <div>
          <LinkBox>
            <Link to="/auth">
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
              />
              Вход
            </Link>
          </LinkBox>
        </div>
      )}

    </SidebarBox>
  );
}

export default Sidebar;
