const Web3Api = require('./Web3Api')
const web3Api = Web3Api('ganacheui')

async function checkBalance(senderAddress, receivingAddress) {
    const balanceObj = await web3Api.checkBalance(senderAddress, receivingAddress)
    return balanceObj
}

async function printBalance(senderAddress, receivingAddress) {
    const balanceObj = await checkBalance(senderAddress, receivingAddress)
    console.log(balanceObj)
}

if (process.argv.length >= 4) {
    printBalance(process.argv[2], process.argv[3])
}
