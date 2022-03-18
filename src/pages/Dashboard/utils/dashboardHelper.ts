import { Cluster, Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const refreshBalance = async (network: Cluster | undefined, account: Keypair | null) => {
  if (!account) return 0;

  try {
    const connection = new Connection(clusterApiUrl(network), 'confirmed');
    const { publicKey } = account;
    const accountPubKey = publicKey;

    const balance = await connection.getBalance(accountPubKey);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown Error';

    return 0;
  }
};
