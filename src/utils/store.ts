import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import produce from "immer";

export type SelectedNetwork = "devnet" | "testnet" | "mainnet-beta";
export interface GlobalStore {
	//
	appState: {
		selectedNetwork: SelectedNetwork;
		account: any;
	};
	actions: {
		setSelectedNetwork: (network: SelectedNetwork) => void;
		setAccount: (account: any) => void;
	};
}
export interface IVaultStore {
	key: string | null;
	setKey: (key: string) => void;
}

export const useGlobalStore = create<GlobalStore>(
	devtools((set, get) => ({
		appState: {
			selectedNetwork: "mainnet-beta",
			account: null,
		},
		actions: {
			setSelectedNetwork(network) {
				set(
					produce((state: GlobalStore) => {
						state.appState.selectedNetwork = network;
					})
				);
			},
			setAccount(account) {
				set(
					produce((state: GlobalStore) => {
						state.appState.account = account;
					})
				);
			},
		},
	}))
);
export const useVaultStore = create<IVaultStore>(
	persist(
		(set, get) => ({
			key: null,
			setKey: (key: string) => set({ key }),
		}),
		{
			name: "phoenix-vault", // unique name
		}
	)
);
