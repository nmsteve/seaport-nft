const { utils } = require("ethers");
const { parseEther } = require("ethers/lib/utils");
// All properties on a domain are optional
const domain = {
    // name: 'Quixotic',
    // version: '4',
    // chainId: 1,
    // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'

};

// The named list of all type definitions
const types = {
    SellOrder: [
        { name: 'seller', type: 'address' },/* Seller of the NFT */
        { name: 'contractAddress', type: 'address' },/* Contract address of NFT */
        { name: 'tokenId', type: 'uint256' },/* Token id of NFT to sell */
        { name: 'startTime', type: 'uint256' }, /* Start time in unix timestamp */
        { name: 'expiration', type: 'uint256' }, /* Expiration in unix timestamp */
        { name: 'price', type: 'uint256' }, /* Price in wei */
        { name: 'quantity', type: 'uint256' },/* Number of tokens to transfer; should be 1 for ERC721 */
        { name: 'createdAtBlockNumber', type: 'uint256' }, /* Block number that this order was created at */
        { name: 'paymentERC20', type: 'address' } /* Address of the ERC20 token for the payment. Will be the zero-address for payments in native ETH. */

    ]
};



let orderType = {
    Recipient: [
        { name: 'amount', type: 'uint256' },
        { name: 'address', type: 'address' },
    ],
    BasicOrderParameters: [
        { name: 'considerationToken', type: "address" },
        { name: 'considerationIdentifier', type: "uint256" },
        { name: 'considerationAmount', type: "uint256" },
        { name: 'offerer', type: "address" },
        { name: 'zone', type: "address" },
        { name: 'offerToken', type: "address" },
        { name: 'offerIdentifier', type: "uint256" },//NFT ID
        { name: 'offerAmount', type: "uint256" }, //No of NFTs
        { name: 'basicOrderType', type: "uint8" },
        { name: 'startTime', type: "uint256" },
        { name: 'endTime', type: "uint256" },
        { name: 'zoneHash', type: "bytes32" },
        { name: 'salt', type: "uint256" },
        { name: 'offererConduitKey', type: "bytes32" },
        { name: 'fulfillerConduitKey', type: "bytes32" },
        { name: 'totalOriginalAdditionalRecipients', type: "uint256" },
        { name: 'additionalRecipients', type: 'Recipients[]' }
    ]
};

let values = {
    seller: process.env.ADDRESS2,
    contractAddress: process.env.NP,
    tokenId: 2,
    startTime: 1657098127,// BigInt(Math.floor(Date.now() / 1000) - 60 * 10),
    expiration: 1657445900,//BigInt(Math.floor(Date.now() / 1000) + 60 * 60 * 10),
    price: parseEther('0.003'),
    quantity: 1,
    createdAtBlockNumber: 30398292,
    paymentERC20: process.env.VR
}

let orderValues = {
    considerationToken: '0x0000000000000000000000000000000000000000',
    considerationIdentifier: 0,
    considerationAmount: parseEther('32375000000000000'),

    offerer: '0xF6d47763f157f42E8BD711A3B41510267eaF4ba1',
    zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
    offerToken: '0x86eF335CB0ADA3c681Ec4240Ef6520c407ADEb0b',
    offerIdentifier: 9489,
    offerAmount: 1,

    basicOrderType: 2,
    startTime: 1668549660,
    endTime: 1669154460,
    zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    salt: '24446860302761739304752683030156737591518664810215442929804101501498965266830',

    offererConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
    fulfillerConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
    totalOriginalAdditionalRecipients: 2,
    additionalRecipients: [875000000000000, '0x0000a26b00c1F0DF003000390027140000fAa719', 1750000000000000, '0x9E51954aaf1d8A73Fa1E78DC55fe8637fcf805Cf']

}

let signaturebytes = '0xd87b8f72c1bd7a53230ae5a0c152a541d77712be1d51d110cb77ff243bd52ff559fcf15ddab1035800a4984d122fd4009a215a6457ac7bf8c967c55ef2ad59ea1c'

const msgParams = JSON.stringify({
    domain: {
        // Defining the chain aka Rinkeby testnet or Ethereum Main Net
        chainId: 80001,
        // Give a user friendly name to the specific contract you are signing for.
        name: 'Sea Port',
        // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        // Just let's you know the latest version. Definitely make sure the field name is correct.
        version: '1',
    },
    // Defining the message signing data content.
    message: {
        /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
        considerationToken: '0x0000000000000000000000000000000000000000',
        considerationIdentifier: 0,
        considerationAmount: parseEther('32375000000000000'),

        offerer: '0xF6d47763f157f42E8BD711A3B41510267eaF4ba1',
        zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
        offerToken: '0x86eF335CB0ADA3c681Ec4240Ef6520c407ADEb0b',
        offerIdentifier: 9489,
        offerAmount: 1,

        basicOrderType: 2,
        startTime: 1668549660,
        endTime: 1669154460,
        zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        salt: '24446860302761739304752683030156737591518664810215442929804101501498965266830',

        offererConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
        fulfillerConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
        totalOriginalAdditionalRecipients: 2,
        additionalRecipients: [875000000000000, '0x0000a26b00c1F0DF003000390027140000fAa719', 1750000000000000, '0x9E51954aaf1d8A73Fa1E78DC55fe8637fcf805Cf']
    },

    types: {
        // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
        EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
        ],
        // Not an EIP712Domain definition
        Group: [
            { name: 'name', type: 'string' },
            { name: 'members', type: 'Person[]' },
        ],


        BasicOrderParameters: [
            { name: 'considerationToken', type: "address" },
            { name: 'considerationIdentifier', type: "uint256" },
            { name: 'considerationAmount', type: "uint256" },
            { name: 'offerer', type: "address" },
            { name: 'zone', type: "address" },
            { name: 'offerToken', type: "address" },
            { name: 'offerIdentifier', type: "uint256" },//NFT ID
            { name: 'offerAmount', type: "uint256" }, //No of NFTs
            { name: 'basicOrderType', type: "uint8" },
            { name: 'startTime', type: "uint256" },
            { name: 'endTime', type: "uint256" },
            { name: 'zoneHash', type: "bytes32" },
            { name: 'salt', type: "uint256" },
            { name: 'offererConduitKey', type: "bytes32" },
            { name: 'fulfillerConduitKey', type: "bytes32" },
            { name: 'totalOriginalAdditionalRecipients', type: "uint256" },
            { name: 'additionalRecipients', type: 'Recipients[]' }
        ],

        Recipient: [
            { name: 'amount', type: 'uint256' },
            { name: 'address', type: 'address' },
        ],
    },

});

module.exports = { domain, orderType, orderType }
