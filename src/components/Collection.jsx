// import React, { useState } from "react";
// import { EnvTypes, ModuleFactory, MyriaClient } from "myria-core-sdk";

// // import {
// //   GetMintedAssetsParams,
// //   GetMintedAssetsResponse,
// //   MintingManager,
// // } from "myria-core-sdk";
// import NFTCard from "./utils/NFTCard";

// function Collection() {
//   const [miAssets, setMiAssets] = useState([]);

//   const env = EnvTypes.STAGING;
//   const iClient = {
//     provider: null,
//     networkId: null,
//     web3: null,
//     env: env,
//   };
//   const mClient = new MyriaClient(iClient);
//   const moduleFactory = new ModuleFactory(mClient);
//   const assetManager = moduleFactory.getAssetOnchainManager();
//   console.log(assetManager);
//   // const assetManager = moduleFactory.getAssetOnchainManager();

//   const fetchCollection = () => {
//     assetManager
//       // .getNftAssets(process.env.REACT_APP_STARK_KEY)
//       // .getAssetByCollectionId(process.env.REACT_APP_STARK_KEY)
//       .getAssetByStarkKey(process.env.REACT_APP_STARK_KEY)
//       .then(
//         (response) => {
//           console.log(response);
//           setMiAssets(response);
//         }
//         // response.MINTABLE_ERC721.forEach((item) => {
//         //   item.forEach((asset) => {
//         //     // assets.push(asset);
//         //     console.log(asset);
//         //   });
//         // })
//       )
//       .catch((err) => console.log("errror:", err));
//   };

//   React.useEffect(() => {
//     fetchCollection();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   // if (!miAssets)
//   //   return (
//   //     <h2 className="p-3 py-12 lg:p-12 text-2xl text-red-200">Loading...</h2>
//   //   );

//   // import { EnvTypes, MyriaClient, OnchainAssetManager } from "myria-core-sdk";

//   // let assets = [];
//   // const env = EnvTypes.STAGING;
//   // const iClient = {
//   //   provider: null,
//   //   networkId: null,
//   //   web3: null,
//   //   env: env,
//   // };
//   // const mClient = new MyriaClient(iClient);

//   // async function getMyriaErc721ByStarkKey(
//   //   mClient,
//   //   starkKey = "0x6f2ee28f45bee2d20f14a371d3f3a0b862accf1db4219f4b20de71f6cbaa872"
//   // ) {
//   //   const assetManager = new OnchainAssetManager(mClient);

//   //   try {
//   //     console.log(`Retrieving a list of assets with ${starkKey} stark key...`);
//   //     await assetManager.getFullInfoAssetByStarkKey(starkKey).then((data) => {
//   //       data.data.MINTABLE_ERC721.forEach((item) => {
//   //         item.forEach((asset) => {
//   //           assets.push(asset);
//   //         });
//   //       });
//   //     });
//   //     console.log(assets);
//   //     return assets;
//   //   } catch (error) {
//   //     if (error instanceof Error) {
//   //       console.log(error);
//   //     }
//   //     return;
//   //   }
//   // }
//   // function Collection() {
//   //   getMyriaErc721ByStarkKey().then(() => console.log(assets));
//   return (
//     <div className="p-3 py-12 lg:p-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8 px-0 md:12 lg:px-24 xl:px-36">
//         {miAssets.map((asset, index) => (
//           <NFTCard asset={asset} key={"as" + index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Collection;
///AssetManager
// import React, { useState } from "react";
// import { EnvTypes, ModuleFactory, MyriaClient } from "myria-core-sdk";
// import NFTCard from "./utils/NFTCard";

// function Collection() {
//   const [miAssets, setMiAssets] = useState([]);

//   const env = EnvTypes.STAGING;
//   const iClient = {
//     provider: null,
//     networkId: null,
//     web3: null,
//     env: env,
//   };
//   const mClient = new MyriaClient(iClient);
//   const moduleFactory = new ModuleFactory(mClient);
//   const assetManager = moduleFactory.getAssetOnchainManager();

//   const fetchCollection = () => {
//     assetManager
//       .getAssetByStarkKey(process.env.REACT_APP_STARK_KEY)
//       .then(async (responce) => {
//         console.log(responce?.data);
//         // let res = await fetch(
//         //   "https://staging.myriacore-marketp-api.nonprod-myria.com/v1/assets/stark-key/0x6f2ee28f45bee2d20f14a371d3f3a0b862accf1db4219f4b20de71f6cbaa872?limit=10&page=1",
//         //   {
//         //     // mode: "no-cors",
//         //     // method: "get",
//         //     headers: {
//         //       // "Content-Type": "application/json",
//         //       "x-api-key":
//         //         "4d2f50617f1f7bc23a06762284534a671a4300929fe7cc1b86359a27e522f35f",
//         //     },
//         //     // body: JSON.stringify(ob),
//         //   }
//         // );
//         // console.log(await res);
//         // await res.body.getReader().then((resss) => console.log(resss));

//         // fetch(responce.link[0]).then((x) => console.log(x));
//         setMiAssets(responce?.data?.items);
//       })
//       .catch((err) => console.log("errror:", err));
//   };

//   React.useEffect(() => {
//     fetchCollection();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   // if (!miAssets)
//   //   return (
//   //     <h2 className="p-3 py-12 lg:p-12 text-2xl text-red-200">Loading...</h2>
//   //   );
//   return (
//     <div className="p-3 py-12 lg:p-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8 px-0 md:12 lg:px-24 xl:px-36">
//         {miAssets.map((asset, index) => (
//           <NFTCard asset={asset} key={"as" + index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Collection;

///mint Manager

import React, { useState, useRef } from "react";
import { EnvTypes, ModuleFactory, MyriaClient } from "myria-core-sdk";
import NFTCard from "./utils/NFTCard";
import { abc } from "./data.js";
import { mint } from "./bulkMint.js";

function Collection() {
  const [miAssets, setMiAssets] = useState([]);
  const [amount, setAmount] = useState(0);

  const env = EnvTypes.STAGING;
  const iClient = {
    provider: null,
    networkId: null,
    web3: null,
    env: env,
  };
  const mClient = new MyriaClient(iClient);
  const moduleFactory = new ModuleFactory(mClient);
  console.log(moduleFactory);
  // const assetManager = moduleFactory.getAssetOnchainManager();
  const assetManager = moduleFactory.getMintingManager();
  console.log(assetManager);

  const fetchCollection = async () => {
    await abc().then((res) => {
      console.log(
        "Heloooo",
        res.data.filter(
          (item) =>
            item.tokenAddress == "0xc6dd9ff35aed227a0fbb9bd7d78ed48314fcc8c9"
        ).length
      );
      setAmount(
        res.data.filter(
          (item) =>
            item.tokenAddress == "0xc6dd9ff35aed227a0fbb9bd7d78ed48314fcc8c9"
        ).length
      );
    });
    // console.log(c);
    // assetManager.mintMarketpAPI
    //   .requestGetMintStarkKey(
    //     "0x6f2ee28f45bee2d20f14a371d3f3a0b862accf1db4219f4b20de71f6cbaa872"
    //   )
    //   .then((res) => console.log(res));
    // .getAssetByStarkKey(process.env.REACT_APP_STARK_KEY)
    //   .then(async (responce) => {
    //     console.log(responce?.data);
    //     // let res = await fetch(
    //     //   "https://staging.myriacore-marketp-api.nonprod-myria.com/v1/assets/stark-key/0x6f2ee28f45bee2d20f14a371d3f3a0b862accf1db4219f4b20de71f6cbaa872?limit=10&page=1",
    //     //   {
    //     //     // mode: "no-cors",
    //     //     // method: "get",
    //     //     headers: {
    //     //       // "Content-Type": "application/json",
    //     //       "x-api-key":
    //     //         "4d2f50617f1f7bc23a06762284534a671a4300929fe7cc1b86359a27e522f35f",
    //     //     },
    //     //     // body: JSON.stringify(ob),
    //     //   }
    //     // );
    //     // console.log(await res);
    //     // await res.body.getReader().then((resss) => console.log(resss));
    //     // fetch(responce.link[0]).then((x) => console.log(x));
    //     setMiAssets(responce?.data?.items);
    //   })
    //   .catch((err) => console.log("errror:", err));
  };

  React.useEffect(() => {
    fetchCollection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // if (!miAssets)
  //   return (
  //     <h2 className="p-3 py-12 lg:p-12 text-2xl text-red-200">Loading...</h2>
  //   );
  const submit = () => {
    console.log(inputRef.current.value);
    mint(amount, parseInt(inputRef.current.value, 10) + amount);
  };

  let inputRef = useRef();
  return (
    <div className="p-3 py-12 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8 px-0 md:12 lg:px-24 xl:px-36">
        <input className="text-black" type="number" ref={inputRef} />
        <button onClick={submit} className="cursor:pointer">
          Mint
        </button>
        {/* // {miAssets.map((asset, index) => (
        //   <NFTCard asset={asset} key={"as" + index} />
        // ))} */}
      </div>
    </div>
  );
}

export default Collection;
