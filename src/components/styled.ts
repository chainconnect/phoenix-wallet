import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 80%;
  margin: 0 auto;
`;
const FlexCol = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeroContainer = styled.div`
  padding: 50px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavBarWrapper = styled.div`
  min-height: 74px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div``;
const NetworkSelectWrapper = styled.div`
  position: relative;
`;
const NetworkSelectButton = styled.button`
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 0.7px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 8px 12px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 6px;
  cursor: pointer;
  text-transform: capitalize;
`;

export {
  AppWrapper,
  FlexCol,
  HeroContainer,
  NavBarWrapper,
  LogoWrapper,
  NetworkSelectWrapper,
  NetworkSelectButton,
};