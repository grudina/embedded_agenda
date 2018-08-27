window.addEventListener("load", function() {
  
    if (typeof web3 !== "undefined") {

        window.web3 = new Web3(web3.currentProvider);

    } else {
        console.log("No web3? You should consider trying MetaMask!");
    }
    
    const eth = new Eth(window.web3.currentProvider);
    window.eth = eth; 

    eth.accounts().then(accounts => {

        if ( accounts.length == 0 ) {
            console.log("No Accounts Loaded", "Please make sure you are logged in via metamask in order to fill this position.");
            return;
        }

        address = accounts[0];
      
        let ZapFaucet = eth.contract(CONTRACTS['ZapFaucet']['abi']).at(CONTRACTS['ZapFaucet']['address']);
        let ZAPToken = eth.contract(CONTRACTS['ZapToken']['abi']).at(CONTRACTS['ZapToken']['address']);
        let ZapBondage = eth.contract(CONTRACTS['ZapBondage']['abi']).at(CONTRACTS['ZapBondage']['address'])

        let getBalanceZAP = function(address){
          ZAPToken.balanceOf(address).then((obj) =>{
              console.log('balance ZAP: ' + obj.balance);
              $('#zapBalance').html(obj.balance + " ZAP");
          }).catch((err) => {
              console.log(err);
          });
        };

        let getBalanceETH = function(address){
          eth.getBalance(address).then((balance) =>{
              console.log('balance ETH: ' + balance);
          }).catch((err) => {
              console.log(err);
          });
        };

        
        //10^18 as BigNumber
        const decimals = Eth.toBN(10).pow(Eth.toBN(18)); 

        window.getDots = function(){

            let endpoint = "smart_contract";
            endpoint = Eth.fromUtf8(endpoint);
            console.log(endpoint);
            ZapBondage.getDots( endpoint, address, "0x8a258ff1cb9fa8b4f7b48d2b7e72bf179e2c6210" ).then((res) =>{
                console.log(res);
                console.log(res.dots.toNumber());    
            });
        }

        window.bond = function(amount, callback){
            console.log('bond ',amount,' zap');
            let endpoint = "smart_contract";
            endpoint = Eth.fromUtf8(endpoint);
            ZapBondage.bond( endpoint, amount, "0x8a258ff1cb9fa8b4f7b48d2b7e72bf179e2c6210" , {from:address, gas: new BN('6000000')}).then((txHash) =>{
                console.log(txHash);
                waitForTxToBeMined(txHash, callback);
            });
        }

        window.approve = function(amount, callback){
            let decAmount = Eth.toBN(amount).mul(decimals);
            console.log(decAmount.toString());
            ZapToken.approve( CONTRACTS['ZapBondage']['address'] , decAmount, {from:address, gas: new BN('6000000')}).then((txHash) =>{
                waitForTxToBeMined(txHash, callback(amount)); 
            });
        }      

        window.getZap = function(amount, callback){

            eth.getTransactionCount(address).then((nonce) => {
                eth.sendTransaction({
                  from: address,
                  to: CONTRACTS['ZapFaucet']['address'],
                  value: gWei,
                  gas: new BN('6000000'),
                  gasPrice: new BN('21000000000'),
                  nonce: nonce,
                  data: ""
                }).then((txHash) => {
                  console.log('Transaction Hash', txHash);
                });
             });
        }

        //wait for tx to be mined. keep checking    
        function waitForTxToBeMined(txHash, callback) {
          eth.getTransactionReceipt(txHash, (err, res) => 
          {
            if (err) return callback(err)
            if (res) {
                callback(null, txHash);
            }
            else {
              setTimeout(() => {
                waitForTxToBeMined(txHash, callback);
              }, 2000)
            }
          })
        }

        //wait for transaction receipt. keep checking
        function waitTransactionReceipt(hash) {
          console.log("Waiting for transaction " + hash + " to be mined...");
          var receipt = eth.getTransactionReceipt(hash);
          if (receipt) {
            console.log('receipt', receipt);
          } else {
            setTimeout(waitTransactionReceipt, 1000, hash);
          }
        }

    });
});

