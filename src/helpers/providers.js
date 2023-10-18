import { ethers } from "ethers";

if (typeof window.ethereum === "undefined") {
  window.alert("MetaMask is not installed or not accessible.");
  throw new Error("MetaMask is not installed or not accessible.");
}

const etherProvider = new ethers.providers.Web3Provider(window.ethereum);
export default etherProvider;
