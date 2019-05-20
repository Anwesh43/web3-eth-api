const args = process.argv
const web3Api = require('./Web3Api')
if (args.length == 3) {
    const address = args[2]
    web3Api.getBalance(address).then((balance) => {
        console.log(balance)
    }).catch((err) => {
        console.log("we are getting an error")
        console.log(err)
    })
}
