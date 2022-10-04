import React from "react";

function NFTCard({ asset }) {
  console.log("Asset:", asset);
  return (
    <div className="">
      <img
        src={asset?.metadataOptional?.image}
        alt="collection-imag"
        className="w-full h-64 rounded-t-xl bg-cover"
        style={{ objectFit: "cover", position: "center"}}
      />
      <div className="bg-primary_card p-4 rounded-b-xl">
        <p className="text-xs text-gray-300">Sigil Metaverse</p>
        <p className=" text-sm font-semibold mb-4">{asset?.name}</p>
        <div className="flex justify-between">
          <p className="text-xs text-gray-300">Creator</p>
          <p className="text-xs text-gray-300">Price</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium">Kaizen</p>
          <p className="text-sm font-medium">0.00001</p>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
