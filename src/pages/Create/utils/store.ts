import create from 'zustand';
import produce from 'immer';
import * as Bip39 from 'bip39';

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
            const generatedMnemonic = Bip39.generateMnemonic();
            console.log({ generatedMnemonic });
            state.appState.mnemonic = generatedMnemonic;
          } else {
            state.appState.mnemonic = mnemonic;
          }
        }),
      );
    },
  },
}));
