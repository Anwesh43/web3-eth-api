const args = process.argv
const Web3Api = require('./Web3Api')
if (args.length == 4) {
    const network = args[2]
    const address = args[3]
    const web3Api = Web3Api(network)
    web3Api.getTransactionCount(address).then((data) => {
        console.log(data)
    })
}
