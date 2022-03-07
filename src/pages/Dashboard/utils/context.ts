import React from 'react';

export const DashboardContext = React.createContext({});

export const useDashboardContext = () => {
  const context = React.useContext(DashboardContext);

  if (!context) {
    throw new Error('useDashboardContext must only be used within its Provider');
  }

  return context;
};
