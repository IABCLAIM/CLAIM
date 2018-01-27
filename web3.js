Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
code = fs.readFileSync('contracts/claim.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':Claim'].interface)
ClaimContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Claim'].bytecode
deployedContract = ClaimContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
deployedContract.address
contractInstance = ClaimContract.at(deployedContract.address)