// https://eth-ropsten.alchemyapi.io/v2/CwljvdcK5MMZrsnUfmv90-KlA6BGQSuC

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
        url: 'https://eth-ropsten.alchemyapi.io/v2/CwljvdcK5MMZrsnUfmv90-KlA6BGQSuC',
        accounts: ['bd26846b860b8adf38b16ee099a91a948b445db6d4976c02619c43e466b363ae']
    }
  }
}