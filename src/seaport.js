import { ethers, Signer } from "ethers";
import { SEAPORT_INTERFACE } from './seaportInterface'
var Web3 = require('web3');

let SEAPORT_ADDR = '0x00000000006c3852cbEf3e08E8dF289169EdE581'
//const { domain, orderType, orderValues } = require('./sign.js')

let provider = ethers.providers.getDefaultProvider(process.env.REACT_APP_POLYGON_MUMBAI_ALCHEM)
var web3 = new Web3(Web3.givenProvider || process.env.REACT_APP_POLYGON_MUMBAI_ALCHEM);
let seaport = new ethers.Contract(SEAPORT_ADDR, SEAPORT_INTERFACE, provider)

const { ethereum } = window;

// BasicOrderParameters = {
//     considerationToken: '0x0000000000000000000000000000000000000000',
//     considerationIdentifier: 0,
//     considerationAmount: parseEther('0.0195'),

//     offerer: '0xdd305DCf8C019B2E89cCEcfeDD80093726F611EF',

//     offerToken: '0x23774Ea0CA2469b569511C514dA5fEcDd64319fF',
//     offerIdentifier: 1,
//     offerAmount: 1,

//     basicOrderType: 0,
//     startTime: 1669036505,
//     endTime: 1669641305,

//     zone: '0x0000000000000000000000000000000000000000',
//     zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
//     salt: '24446860302761739304752683030156737591518664810215442929817429364958281432566',

//     offererConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
//     fulfillerConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',

//     totalOriginalAdditionalRecipients: 2,
//     additionalRecipients: [parseEther('0.0005'), '0x0000a26b00c1F0DF003000390027140000fAa719']
//     signature

// }

// export const sign = async () => {

//     const provider = new ethers.providers.Web3Provider(window.ethereum)
//     let signer = provider.getSigner()
//     let signature = await signer._signTypedData(domain, orderType, orderValues);
//     console.log(signature)
// }

export const getName = async () => {
    let name = await seaport.name()
    console.log(name)
    return name

}

export const sign = async () => {
    // const msgParams = JSON.stringify({
    //     domain: {
    //         // Defining the chain aka Rinkeby testnet or Ethereum Main Net
    //         chainId: 80001,
    //         // Give a user friendly name to the specific contract you are signing for.
    //         name: 'Ether Mail',
    //         // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
    //         verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    //         // Just let's you know the latest version. Definitely make sure the field name is correct.
    //         version: '1',
    //     },

    //     // Defining the message signing data content.
    //     message: {
    //         /*
    //          - Anything you want. Just a JSON Blob that encodes the data you want to send
    //          - No required fields
    //          - This is DApp Specific
    //          - Be as explicit as possible when building out the message schema.
    //         */
    //         contents: 'Hello, Bob!',
    //         attachedMoneyInEth: 4.2,
    //         from: {
    //             name: 'Cow',
    //             wallets: [
    //                 '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    //                 '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
    //             ],
    //         },
    //         to: [
    //             {
    //                 name: 'Bob',
    //                 wallets: [
    //                     '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    //                     '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
    //                     '0xB0B0b0b0b0b0B000000000000000000000000000',
    //                 ],
    //             },
    //         ],
    //     },
    //     // Refers to the keys of the *types* object below.
    //     primaryType: 'Mail',
    //     types: {
    //         // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
    //         EIP712Domain: [
    //             { name: 'name', type: 'string' },
    //             { name: 'version', type: 'string' },
    //             { name: 'chainId', type: 'uint256' },
    //             { name: 'verifyingContract', type: 'address' },
    //         ],
    //         // Not an EIP712Domain definition
    //         Group: [
    //             { name: 'name', type: 'string' },
    //             { name: 'members', type: 'Person[]' },
    //         ],
    //         // Refer to PrimaryType
    //         Mail: [
    //             { name: 'from', type: 'Person' },
    //             { name: 'to', type: 'Person[]' },
    //             { name: 'contents', type: 'string' },
    //         ],
    //         // Not an EIP712Domain definition
    //         Person: [
    //             { name: 'name', type: 'string' },
    //             { name: 'wallets', type: 'address[]' },
    //         ],
    //     },
    // });

    const msgParams = JSON.stringify({
        domain: {
            // Defining the chain aka Rinkeby testnet or Ethereum Main Net
            // chainId: await ethereum.request({ method: 'eth_chainId' }),
            // // Give a user friendly name to the specific contract you are signing for.
            // name: 'Sea Port',
            // // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
            // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
            // // Just let's you know the latest version. Definitely make sure the field name is correct.
            // version: '1',
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
            considerationAmount: '9750000000000000',

            offerToken: '0x23774Ea0CA2469b569511C514dA5fEcDd64319fF',
            offerIdentifier: 2,
            offerAmount: 1,

            offerer: '0xdd305DCf8C019B2E89cCEcfeDD80093726F611EF',
            zone: '0x0000000000000000000000000000000000000000',


            basicOrderType: 0,
            startTime: 1669016017,
            endTime: 1671608017,
            zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
            salt: '24446860302761739304752683030156737591518664810215442929803619960689293281935',

            offererConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
            fulfillerConduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
            totalOriginalAdditionalRecipients: 1,
            additionalRecipients: [

                { amount: 250000000000000, address: '0x0000a26b00c1F0DF003000390027140000fAa719' },

            ]
        },


        primaryType: 'BasicOrderParameters',
        types: {
            // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
            EIP712Domain: [
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
                { name: 'chainId', type: 'uint256' },
                { name: 'verifyingContract', type: 'address' },
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
                { name: 'additionalRecipients', type: 'Recipient[]' }
            ],

            Recipient:
                [
                    { name: 'amount', type: 'uint256' },
                    { name: 'address', type: 'address' },
                ]



        }
    });

    await ethereum.request({ method: 'eth_requestAccounts' })

    try {

        const response = await ethereum.request({
            method: 'eth_signTypedData_v4',
            params: [ethereum.selectedAddress, msgParams]
        });

        return response

    } catch (error) {
        console.error(error)
        console.log(error)
    }


}




