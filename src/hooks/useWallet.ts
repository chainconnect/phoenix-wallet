import React from "react";
import * as Bip39 from "bip39";
import * as bs58 from "bs58";
import { Keypair } from "@solana/web3.js";
import { useGlobalStore, useVaultStore } from "../utils/store";
import { decryptPrivateKey, encryptPrivateKey } from "../utils/walletHelpers";
import { refreshBalance } from "../pages/Dashboard/utils/dashboardHelper";

export default function useWallet() {
	const [account, currentNetwork, setAccount] = useGlobalStore((state) => [
		state.appState.account,
		state.appState.selectedNetwork,
		state.actions.setAccount,
	]);
	const key = useVaultStore((state) => state.key);
	const [balance, setBalance] = React.useState(0);

	const storeAccountFromMnemonic = (mnemonic: string, password: string) => {
		//
		// const seed = Bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);
		// const newAccount = Keypair.fromSeed(seed);
		// const privateBase58 = bs58.encode(newAccount.secretKey);
		const privateBase58 =
			"2NPms23canoV5ca8RUSJfnAtGC4TabAhx23SWtie7JU1pquQHWmFbsrKWUQMuHz7oUBwg4UeVzSGfUvxG2GvoARB";
		localStorage.setItem("privateKey", privateBase58);
	};
	const getAccountFromStorage = () => {
		const privateBase58 = key;
		const privateBuffer = bs58.decode(privateBase58!);
		const newAccount = Keypair.fromSecretKey(privateBuffer);
		setAccount(newAccount);
	};
	const balanceUpdateHandler = async () => {
		try {
			const accBal = await refreshBalance(currentNetwork, account);
			setBalance(+accBal.toFixed(5));
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		getAccountFromStorage();
	}, []);
	React.useEffect(() => {
		if (account) {
			balanceUpdateHandler();
		}
	}, [account, currentNetwork]);
	return {
		account,
		balance,
		storeAccountFromMnemonic,
		getAccountFromStorage,
		balanceUpdateHandler,
	};
}
