import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const seaport = new Seaport(provider);
const { ethereum } = window

const offerer = provider.getSigner();
const fulfiller = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";


export const createOrder = async () => {

    await ethereum.request({ method: 'eth_requestAccounts' })
    console.log(ethereum.selectedAddress)

    try {

        const order = await seaport.createOrder(
            {
                offer: [
                    {
                        itemType: "2",
                        token: "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
                        identifier: "2",
                    },
                ],
                consideration: [
                    {
                        amount: ethers.utils.parseEther("0.0195").toString(),
                        recipient: ethereum.selectedAddress.toString(),
                    },
                ],

                salt: '24446860302761739304752683030156737591518664810215442929817429364958281432566'
            },
            ethereum.selectedAddress.toString()

        );

        let getMessageToSign = order.actions[0].getMessageToSign
        console.log(order.actions[0])

        let executeAllActions = order.executeAllActions
        let sign = await executeAllActions()
        console.log(sign)

        return order


    } catch (error) {
        console.log(error)
    }


}


// const { executeAllActions: executeAllFulfillActions } =
//     await seaport.fulfillOrder({
//         order,
//         accountAddress: fulfiller,
//     });

// const transaction = executeAllFulfillActions();

// console.log(transaction)


