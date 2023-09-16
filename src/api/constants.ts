import { NetworkEnum } from "../models";

export const LOCALNET_API_URL = "http://localhost:3001";
export const DEVNET_API_URL = "https://devnet.underdogprotocol.com";
export const MAINNET_API_URL = "https://api.underdogprotocol.com";

export const networkToUnderdogApiEndpoints = {
  [NetworkEnum.Localnet]: LOCALNET_API_URL,
  [NetworkEnum.Devnet]: DEVNET_API_URL,
  [NetworkEnum.Mainnet]: MAINNET_API_URL,
};
