const web3Api = require('./Web3Api')('ganachecli')
web3Api.getAccounts().then((accounts) => {
    console.log(accounts)
})
