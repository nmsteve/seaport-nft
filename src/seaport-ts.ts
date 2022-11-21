import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const seaport = new Seaport(provider);

const offerer = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const fulfiller = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";



const { executeAllActions } = await seaport.createOrder(
    {
        offer: [
            {
                itemType: "ERC721",
                token: "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
                identifier: "1",
            },
        ],
        consideration: [
            {
                amount: ethers.utils.parseEther("10").toString(),
                recipient: offerer,
            },
        ],
    },
    offerer
);

const order = await executeAllActions();

const { executeAllActions: executeAllFulfillActions } =
    await seaport.fulfillOrder({
        order,
        accountAddress: fulfiller,
    });

const transaction = executeAllFulfillActions();

console.log(transaction)


