require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth shift protect guess kitten off gift'; 
let testAccounts = [
"0x463b33d94ad19d5550f4ec3a12687dff6e165d9f2f2e81b7b1d4798d6d233174",
"0xcfa37c30d9d567dcacaf725211a14348073c8f19c52f60c28d4b39d0bdf94d37",
"0xb01de7f54277f1a806453ee17380e21a94c5625035a024e6f3af256a292eef19",
"0x4ec59e1bd96b7ff8304fecd07c1ff5fd60d03ef1ee22b676ca0b607003c0b43d",
"0xa428f2a045c031cfae922f5db127bc7100cedf1f2a97d46748f2ac932aadf5ce",
"0xa38ad0d0c6ba5632fa2ba6963af450f5a8680562b12d9594620bf293a918d956",
"0xba491549c03cf77e03c810c5770bde1031518e2e313bcf796321511149052108",
"0x02ff1c44b3d067995513476022f0cf64c6b4bacd3ac3e45e0f590ffbadc62854",
"0x1215df1a59286acc9f60c57eb75c3aa1b4ddf89306bcb89c2744e41a4ed38229",
"0x58c6c980ce061ae64de2d557025ef5f0ee8c489f383eed216583f3ca5811bd68"
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

