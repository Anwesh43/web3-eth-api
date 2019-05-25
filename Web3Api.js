const Web3 = require('web3')
const {urls} = require('./config.json')
class Web3Api {

    constructor(network) {
        this.web3 = new Web3(urls[network])
    }

    getBalance(address) {
        return new Promise((resolve, reject) => {
            try {
                this.web3.eth.getBalance(address, (err, bal) => {
                    if (!err) {
                        resolve(this.web3.utils.fromWei(bal))
                    } else {
                        console.log(err)
                        reject(err)
                    }
                })
            } catch(err) {
                reject(err)
            }
        })
    }

    getTransactionCount(address) {
        return this.web3.eth.getTransactionCount(address)
    }

    getContract(abi, address) {
        return new this.web3.eth.Contract(abi, address)
    }

    getAccounts() {
        return this.web3.eth.getAccounts()
    }
}

const networks = Object.keys(urls)
const networkWeb3ApiMap = {}
networks.forEach((network) => {
    networkWeb3ApiMap[network] = new Web3Api(network)
})

module.exports = (network) => {
    return networkWeb3ApiMap[network]
}
