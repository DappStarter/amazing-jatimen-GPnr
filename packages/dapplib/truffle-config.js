require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note praise company harvest hen fortune gaze'; 
let testAccounts = [
"0x47a69ebd3ea24d24d1d85211cb97a4388e7d34336d54aff767b006b7ef8cddda",
"0x6a385f0769fbad771cccd9ee6322c22fa1db015753154debbc3ecacdac07d0b8",
"0x185fdf3d133edd3bb09f282f22d89abd67ca805028af7af1876afb69afdfe001",
"0xbf8f484febed938dd0b9df37e908eab73db29f6fb6fb32b4c1c4d23ab89f2810",
"0x7b2fc4519ec661e71232012ff437365336a28f4a77c13c7a1ac9f7630b88efc7",
"0x7e99c0d868e0c4f4092a2391b3957caff83c96279b4405e2fceb463762f5ab18",
"0xae9ae592d88112768964904fc5a2cd2bf412cfd1f095cbccbe1e540fe0161d2f",
"0xe5141a6e2cd56d04e5dfb72d006ea5c84e0e303ccefbc0bf280ba9e70f8844ba",
"0xa4a84206985ec17d602fb9930100b9ffffb8cb26a7f678f7e5d1014ee7283198",
"0x6cfc8bf150a7296231e1aac5bfdf08d018ea92f3b288af1bde52037281ff183d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

