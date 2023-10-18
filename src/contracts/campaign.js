import { ethers } from "ethers";
import etherProvider from "../helpers/providers";

const address = "";

export const abi = [];

// Create an ethers.js Contract instance
const contract = new ethers.Contract(address, abi, etherProvider);
export default contract;
