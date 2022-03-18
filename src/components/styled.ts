import { Form } from 'formik';
import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
const LogoWrapper = styled.div`
  max-width: 256px;
  padding: 16px 0;
  img {
    max-width: 100%;
  }
`;
const NetworkSelectWrapper = styled.div`
  position: relative;
`;
const NetworkSelectButton = styled.button`
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 0.7px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 8px 16px;
  font-size: 18px;
  letter-spacing: 1px;
  border-radius: 6px;
  cursor: pointer;
  text-transform: capitalize;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NetworkSelectDropdownWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 8px;
  min-width: 180px;
  text-transform: capitalize;
  z-index: 9999;
`;
const NetworkSelectDropdownItem = styled.span`
  padding: 8px 12px;
  border-bottom: 1px solid #ccc;
  letter-spacing: 1px;
  font-size: 16px;
  cursor: pointer;
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
const GenericButton = styled.button`
  background: hsla(0, 0%, 100%, 0.2);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 2px solid hsla(0, 0%, 100%, 0.1);
  color: #fff;
  padding: 8px 16px;
  font-weight: 100;
  font-style: normal;
  font-size: 22px;
  letter-spacing: 1px;
  border-radius: 6px;

  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
  }
  &:disabled {
    cursor: no-drop;
    color: #ccc;
    background-color: hsla(0, 0%, 0%, 0.1);
  }
`;
const HeroTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  text-transform: capitalize;
`;
const FormError = styled.span`
  margin-top: 24px;
  color: whitesmoke;
  background-color: hsla(348, 80%, 38%, 0.4);
  border: 2px solid hsla(0, 0%, 100%, 0.1);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  /* border-radius: 8px; */
`;
const StyledFormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RightNavWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const UserWalletAddress = styled.span`
  margin-right: 24px;
  margin-left: 8px;
  letter-spacing: 1px;
  font-size: 18px;
  > span {
    color: #ffce57;
    font-weight: 600;
    cursor: pointer;
  }
`;
export {
  AppWrapper,
  FlexCol,
  HeroContainer,
  NavBarWrapper,
  LogoWrapper,
  NetworkSelectWrapper,
  NetworkSelectButton,
  NetworkSelectDropdownItem,
  NetworkSelectDropdownWrapper,
  GenericButton,
  HeroTitle,
  FormError,
  StyledFormikForm,
  RightNavWrapper,
  UserWalletAddress,
};
