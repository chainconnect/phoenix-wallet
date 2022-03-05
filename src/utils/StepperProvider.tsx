import * as React from 'react';

interface StepperProviderProps {
  children: React.ReactNode;
}
interface IStepperContext {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  getState: (curStep: number, idx: number) => void;
}
const stepperContext = React.createContext<IStepperContext>({
  activeStep: 0,
  setActiveStep: (num) => {},
  getState: (curNum, idx) => {},
});
export default function StepperProvider({ children }: StepperProviderProps) {
  const [activeStep, setActiveStep] = React.useState(1);
  const determineState = (activeIndex: number, index: number) => {
    if (activeIndex > index) return 'complete';
    if (activeIndex === index + 1) return 'active';
    return 'incomplete';
  };
  const getState = (currentStep: number, index: number) => {
    const step = determineState(currentStep, index);
    return step;
  };

  return (
    <stepperContext.Provider value={{ setActiveStep, getState, activeStep }}>
      {children}
    </stepperContext.Provider>
  );
}

export const useStepperContext = () => {
  const context = React.useContext(stepperContext);

  if (!context) {
    throw new Error('useStepperContext must only be used within AnalyticsProvider');
  }

  return context;
};
