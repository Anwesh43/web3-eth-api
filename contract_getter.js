const {abi, address, network} = require('./contract_details.json')
const Web3Api = require('./Web3Api')
const web3Api = Web3Api(network)
const contract = web3Api.getContract(abi,address)
console.log(Object.keys(contract.methods))
async function getContractName() {
    const name = await contract.methods.name().call()
    return name
}
async function printName() {
    const name = await getContractName()
    console.log(name)
}
contract.methods.totalSupply().call().then((result) => {
    console.log(`result of total supply is ${result}`)
})
printName()
