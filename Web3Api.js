const Web3 = require('web3')
const {url} = require('./config.json')
class Web3Api {

    constructor() {
        this.web3 = new Web3(url)
    }

    getBalance(address) {
        return new Promise((resolve, reject) => {
            try {
                this.web3.eth.getBalance(address, (err, bal) => {
                    if (!err) {
                        resolve(bal)
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
}

module.exports = new Web3Api()
