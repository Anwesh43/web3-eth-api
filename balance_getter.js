const args = process.argv
const web3Api = require('./Web3Api')
if (args.length == 4) {
    const network = args[2]
    const address = args[3]
    web3Api(network).getBalance(address).then((balance) => {
        console.log(balance)
    }).catch((err) => {
        console.log("we are getting an error")
        console.log(err)
    })
} else {
    console.log("enter network and address")
}
