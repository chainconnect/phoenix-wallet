import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";

export type SelectedNetwork = "devnet" | "testnet" | "mainnet-beta";
export interface GlobalStore {
	//
	appState: {
		selectedNetwork: SelectedNetwork;
	};
	actions: {
		setSelectedNetwork: (network: SelectedNetwork) => void;
	};
}

export const useGlobalStore = create<GlobalStore>(
	devtools((set, get) => ({
		appState: {
			selectedNetwork: "mainnet-beta",
		},
		actions: {
			setSelectedNetwork(network) {
				set(
					produce((state: GlobalStore) => {
						state.appState.selectedNetwork = network;
					})
				);
			},
		},
	}))
);
