import Web3 from "web3";
import AWSWebsocketProvider from "./aws-websocket-provider.js";
const endpoint = process.env.AMB_WS_ENDPOINT;
const web3 = new Web3(new AWSWebsocketProvider(endpoint));
var subscription = web3.eth
  .subscribe("pendingTransactions")
  .on("data", function (transactionHash) {
    web3.eth.getTransaction(transactionHash).then((result) => {
      if (result !== null) {
        if (result.to == "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D") {
          console.log(result);
        } else {
          console.log("sdf");
        }
      }
    });
  });
