const web3Api = require('./Web3Api')('ganachecli')
const {abi, address} = require('./remix_data.json')

async function printTransactionCount(address) {
    const transactionCount = await web3Api.getTransactionCount(address)
    console.log(transactionCount)
}

async function printContractDetails() {
    const contract = await web3Api.getContract(abi, address)
    console.log(contract)
}

if (process.argv.length == 4 && process.argv[2] == 'tc') {
    printTransactionCount(process.argv[3])
}

else if (process.argv.length == 3 && process.argv[2] == 'contract') {
    printContractDetails()
}
