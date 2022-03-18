import styled from 'styled-components';
import { FlexCol, GenericButton } from '../../../components/styled';

export const DashboardWrapper = styled(FlexCol)`
  flex: 1;
  padding: 32px 0;
`;
export const DashboardViewWrapper = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AssetBalanceWrapper = styled.div`
  width: 250px;
  min-height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-out;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
    transition: all 200ms ease-in;
    box-shadow: none;
  }
`;
export const BalanceText = styled.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #f1f1f1;
`;
export const AssetSymbol = styled.span`
  margin-left: 8px;
  font-size: 24px;
`;

export const AssetActionsWrapper = styled.div`
  display: flex;
`;

export const AssetActionBtn = styled(GenericButton)`
  font-size: 18px;
  width: 164px;
  letter-spacing: 2px;
  margin-top: 48px;
  &:first-child {
    margin-right: 24px;
  }
`;
