import styled from 'styled-components';

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 3.5rem;
  letter-spacing: 2px;
`;
export const NewUserOptionsWrapper = styled.div`
  padding: 25px 15px;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`;
export const UserOptionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  min-height: 350px;
  margin-right: ${(p: { mr?: string }) => (p.mr ? p.mr : '')};
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: background 200ms ease-out, transform 200ms ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    transition: background 200ms ease-in, transform 200ms ease-in;
    cursor: pointer;
  }
`;
export const UserOptionTitle = styled.h2`
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 24px;
`;
