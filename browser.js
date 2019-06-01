if (typeof web3 != "undefined") {
    web3 = new Web3(web3.currentProvider)
} else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))
    web3.eth.defaultAccount = web3.eth.accounts[0]
}
const setUpContract = (abi, address) => {
    const contract = web3.eth.contract(abi)
    const myMessage = contract.at(address)
    return myMessage
}

const byId = (id) => document.getElementById(id)

byId('setup').onclick = () => {
    const abi = byId('abi').value
    const address = byId('contract').value
    if (abi.trim() !== "" && address.trim() !== "") {
        var myMessage = setUpContract(JSON.parse(abi.trim()), address)
        byId('form1').style.display = 'none'
        byId('form2').style.display = 'block'
        myMessage.getMessage((err, result) => {
            if (!err) {
              byId('message').value = result
            }
        })
        byId('submitmessage').onclick = () => {
            const message = byId('message').value
            if (message.trim() !== "") {
                myMessage.setMessage(message, (err, result) => {
                    if (err) {
                        alert("failed")
                    }
                    else {
                        alert("saved successfully")
                        console.log(result)
                    }
                })
            }
        }
    }
}
