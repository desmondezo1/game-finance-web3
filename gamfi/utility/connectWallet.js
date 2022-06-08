
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers, providers  } from "ethers";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';


const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';

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



const web3Modal = new Web3Modal({
    // network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });


//   const instance = await web3Modal.connect();
  
//   const provider = new ethers.providers.Web3Provider(instance);
//   const signer = provider.getSigner();


export default connectWallet = async () => {

    try {
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();
        if (accounts) setAccount(accounts[0]);
      } catch (error) {
  
      }
}