import {
  MintingManager,
  MintERC721Params,
  FeeType,
  EnvTypes,
} from "myria-core-sdk";
//   import config from "../config";

export async function mint(start, amount) {
  //   let c=amount
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const env = EnvTypes.STAGING;
  const mintingManager = new MintingManager(env);

  const starkKey =
    "0x6f2ee28f45bee2d20f14a371d3f3a0b862accf1db4219f4b20de71f6cbaa872";
  const contractAddress = "0xC6Dd9ff35AEd227a0FBb9bd7d78eD48314FCc8C9";
  const metadataApiUrl =
    "https://coral-decisive-chicken-195.mypinata.cloud/ipfs/QmVzeoxLcan4tdvZScheway66p8JkeSWqUZLSJG1Lpgw42";
  const royaltyRecipient = "0x488A8CA56f29BFbe28e6f4cf898D5c3C1455deDa";

  let bulkMintResult = [];
  console.log("Helooo", amount);
  try {
    console.log("Initiating a bulk minting...");
    for (let i = start + 1; i <= amount; i++) {
      const params = {
        starkKey: starkKey,
        contractAddress: contractAddress,
        uri: `${metadataApiUrl}/${i}`,
        tokenId: i.toString(),
        description: `EverydaySHEROE # ${i} Description`,
        fees: [
          {
            percentage: 5,
            receiptAddress: royaltyRecipient,
            feeType: FeeType.ROYALTY,
          },
        ],
      };
      const mintTransactionResponse =
        await mintingManager.createMintTransactionERC721(params);
      if (mintTransactionResponse) {
        console.log(`Minted asset #${i}`);
        //   bulkMintResult.push(mintTransactionResponse);
      }
      await timer(2000);
    }
    console.log(`Bulk minting is completed.`);
  } catch (error) {
    // throw new Error(JSON.stringify(error, null, 2));
  }
  // console.log(bulkMintResult);
}
