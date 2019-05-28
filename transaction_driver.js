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

async function createTransaction() {
    if (process.argv.length >= 4) {
        const sendingAddress = process.argv[2]
        const receivingAddress = process.argv[3]
        const privateKey = process.argv[4]
        const value = parseFloat(process.argv[5] || 3)
        await printBalance(sendingAddress, receivingAddress)
        const sendingTxCount = await web3Api.getTransactionCount(sendingAddress)
        console.log(sendingTxCount)
        const txObj = {
            nonce : sendingTxCount,
            value : value,
            gasPrice : 2000000,
            gasLimit : 30000,
            to : receivingAddress,
            data : ''
        }
        console.log(txObj)
        console.log(privateKey)
        web3Api.createTransaction(privateKey, txObj).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }
}

createTransaction()
