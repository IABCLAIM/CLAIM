sudo apt-get update
sudo apt install npm
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - 
sudo apt-get install -y nodejs
sudo apt-get install build-essential python
mkdir claim
cd claim
mkdir node_modules
npm install ganache-cli web3@0.20.2 solc
node_modules/.bin/ganache-cli
