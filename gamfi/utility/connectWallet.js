
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers, providers  } from "ethers";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'; //replace ID with yours

const providerOptions = {
    binancechainwallet: {
        package: true
      },
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId:  INFURA_ID // required
        }
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "My Awesome App", // Required
          infuraId: INFURA_ID, // Required
          rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          chainId: 1, // Optional. It defaults to 1 if not provided
          darkMode: false // Optional. Use dark theme, defaults to false
        }
      }
  }


  if (typeof window !== "undefined") {
   const web3Modal = new Web3Modal({
    // network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
  }


export const disconnect = async () => {
    await web3Modal.clearCachedProvider();
  };


export const connectWallet = async () => {

    try {
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();  
        return accounts;

    } catch (error) {
        console.log(error)  
    }
 
}

export default { connectWallet, disconnect };
