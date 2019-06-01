const web3Api = require('./Web3Api')('ganacheui')
const {abi, address} = require('./remix_data.json')

async function printTransactionCount(address) {
    const transactionCount = await web3Api.getTransactionCount(address)
    console.log(transactionCount)
}

async function getContract() {
    const contract = await web3Api.getContract(abi, address)
    return contract
}

async function printContractDetails() {
    const contract = await getContract()
    console.log(contract)
}


async function setMessage(message) {
    const contract = await getContract()
    contract.methods.setMessage(message).call({},(err, result) => {
        if (err) {
            console.log("error in setting message")
        } else {
            console.log("message set successfully")
            console.log(result)
        }
    })
    console.log(contract.methods.getMessage)
}

async function getMessage() {
    const contract = await getContract()
    contract.methods.getMessage().call({}, (err, result) => {
        if (!err) {
            console.log(result)
        } else {
            console.log("some issue while getting message")
        }
    })
}

if (process.argv.length == 4 && process.argv[2] == 'tc') {
    printTransactionCount(process.argv[3])
}

else if (process.argv.length == 3 && process.argv[2] == 'contract') {
    printContractDetails()
}

else if (process.argv.length == 4 && process.argv[2] == 'setMessage') {
    setMessage(process.argv[3])
}

else if (process.argv.length == 3 && process.argv[2] == 'getMessage') {
    getMessage()
}
