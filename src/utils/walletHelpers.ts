import * as crypto from "crypto-js";
import * as Bip39 from "bip39";
import * as bs58 from "bs58";
import { Keypair } from "@solana/web3.js";

export function encryptPrivateKey(privateKey: string, password: string) {
	const enc = new TextEncoder();
	const encoded = enc.encode(privateKey);
	// iv will be needed for decryption
	const iv = window.crypto.getRandomValues(new Uint8Array(16));
	return window.crypto.subtle.encrypt(
		{
			name: "AES-CBC",
			iv,
		},
		password as any,
		encoded
	);
}
export function decryptPrivateKey(encryptedKey: string, password: string) {
	const encKey =
		"U2FsdGVkX18iaQa/6Q6qzW78k99NYD3HXc8iIxkl3np7rZkZ1hroDXZfiOc2ibn8Mi7TRYCrRgjcCXfdXf+J6afYl0VVusRJhATkGYMEX6cfOdJjtBhFfUFkkEESCab9wRC8ldDBvPPhLg/VDjmkxA==";
	const key = "H4CK3R98@a";
	const decrypted = crypto.AES.decrypt(encKey, key);
	return decrypted.toString();
}
export function getAccountAndPrivateKeyFromMnemonic(mnemonic: string | null) {
	if (!mnemonic) {
		throw new Error("Mnemonic not found");
	}
	const seed = Bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);
	const newAccount = Keypair.fromSeed(seed);
	const privateBase58 = bs58.encode(newAccount.secretKey);
	return { newAccount, privateBase58 };
}
