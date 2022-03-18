import create from 'zustand';
import produce from 'immer';

export interface ICreateModuleStore {
  appState: {
    mnemonic: string | null;
  };
  actions: {
    setMnemonic: (phrase?: string) => void;
  };
}

export const useCreateModuleStore = create<ICreateModuleStore>((set, get) => ({
  appState: {
    mnemonic: null,
  },
  actions: {
    setMnemonic(mnemonic) {
      set(
        produce((state: ICreateModuleStore) => {
          if (!mnemonic) {
            state.appState.mnemonic = '';
          } else {
            state.appState.mnemonic = mnemonic;
          }
        }),
      );
    },
  },
}));
