import {
  GetMintedAssetsParams,
  GetMintedAssetsResponse,
  MintingManager,
  EnvTypes,
} from "myria-core-sdk";
//   import config from "../config";

export async function abc() {
  const env = EnvTypes.STAGING;
  const mintingManager = new MintingManager(env);
  const starkKey =
    "0x6f2ee28f45bee2d20f14a371d3f3a0b862accf1db4219f4b20de71f6cbaa872";

  const params = {
    starkKey: starkKey,
  };

  let mintTransactionResponse;
  try {
    console.log(
      `Retrieving a list of mint transactions with ${starkKey} stark key...`
    );
    mintTransactionResponse = await mintingManager.getMintedAssetByStarkKey(
      params
    );
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Mint transactions response:");
  // console.log(JSON.stringify(mintTransactionResponse, null, 2));
  return mintTransactionResponse;
  // return mintTransactionResponse;
}
