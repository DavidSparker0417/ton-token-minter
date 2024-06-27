import { TonClient } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { getNetwork } from "./hooks/useNetwork";

const endpointP = "https://testnet.toncenter.com/api/v2/jsonRPC";
const apiKey = "7a0c2bf7b733201f0f4e21d6ccebd4699375b09ea57e1aa0a428cd99687e9b21";

// const endpointP = getHttpEndpoint({
//   network: getNetwork(new URLSearchParams(window.location.search)),
// });

async function _getClient() {
  return new TonClient({
    endpoint: await endpointP,
    apiKey: await apiKey,
  });
}

const clientP = _getClient();

export async function getClient() {
  return clientP;
}

export async function getEndpoint() {
  return endpointP;
}
