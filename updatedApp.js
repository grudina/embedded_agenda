window.addEventListener("load", function() {
  
  if (typeof web3 !== "undefined") {

      window.web3 = new Web3(web3.currentProvider);

  } else {
      console.log("No web3? You should consider trying MetaMask!");
      // window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
  }
  
  const eth = new Eth(window.web3.currentProvider);
  window.eth = eth; 

  eth.accounts().then(accounts => {
    window.accounts = accounts
      if ( accounts.length == 0 ) {
          console.log("No Accounts Loaded", "Please make sure you are logged in via metamask in order to fill this position.");
          return;
      }

      address = accounts[0];
    
      ZapRegistry = eth.contract(CONTRACTS['ZapRegistry']['abi']).at(CONTRACTS['ZapRegistry']['address']);
      ZapFaucet = eth.contract(CONTRACTS['ZapFaucet']['abi']).at(CONTRACTS['ZapFaucet']['address']);
      ZapToken = eth.contract(CONTRACTS['ZapToken']['abi']).at(CONTRACTS['ZapToken']['address']);
      ZapBondage = eth.contract(CONTRACTS['ZapBondage']['abi']).at(CONTRACTS['ZapBondage']['address'])
      ZapDispatch = eth.contract(CONTRACTS['ZapDispatch']['abi']).at(CONTRACTS['ZapDispatch']['address'])
      ZapArbiter = eth.contract(CONTRACTS['ZapArbiter']['abi']).at(CONTRACTS['ZapArbiter']['address']);

      // ZapRegistry = web3.eth.contract(CONTRACTS['ZapRegistry']['abi']).at(CONTRACTS['ZapRegistry']['address']);
      // ZapFaucet = web3.eth.contract(CONTRACTS['ZapFaucet']['abi']).at(CONTRACTS['ZapFaucet']['address']);
      // ZapToken = web3.eth.contract(CONTRACTS['ZapToken']['abi']).at(CONTRACTS['ZapToken']['address']);
      // ZapBondage = web3.eth.contract(CONTRACTS['ZapBondage']['abi']).at(CONTRACTS['ZapBondage']['address'])
      // ZapDispatch = web3.eth.contract(CONTRACTS['ZapDispatch']['abi']).at(CONTRACTS['ZapDispatch']['address'])
      // ZapArbiter = web3.eth.contract(CONTRACTS['ZapArbiter']['abi']).at(CONTRACTS['ZapArbiter']['address']);
      endpoint = Eth.fromUtf8("smart_contract");
      
      //10^18 as BigNumber
      const decimals = Eth.toBN(10).pow(Eth.toBN(18)); 
      const gWei = Eth.toBN(10).pow(Eth.toBN(9));
      const input = $('#eth_input');
      const oracleAddress = "0x8a258ff1cb9fa8b4f7b48d2b7e72bf179e2c6210";
      // const oracleAddress = "0x2c2b9c9a4a25e24b174f26114e8926a9f2128fe4"; // zapDispatch added for test
      const gas = new BN('6000000');
      const publicKey = 111;
      const title = "test";
      const params = [];
      const curveLinear = 1;
      const start = 1;
      const mul = 2;

      window.getBalanceZAP = function(address){
        ZapToken.balanceOf(address).then((obj) =>{
            console.log('balance ZAP: ' + obj.balance);
            $('#zapBalance').html(obj.balance + " ZAP");
        }).catch((err) => {
            console.log(err);
        });
      };

      window.getBalanceETH = function(address){
        eth.getBalance(address)
          .then((balance) =>{
            console.log('balance ETH: ' + balance);
          })
          .catch((err) => {
            console.log(err);
        });
      };

      window.getDots = function(){
        ZapBondage.getDots( endpoint, address, oracleAddress )
          .then((res) =>{
            console.log(res);
            console.log(res.dots.toNumber()); 
          }
        );
      }

      window.bond = function(amount, callback){
        ZapBondage.bond( endpoint, amount, oracleAddress , {from:address, gas: new BN('6000000')})
          .then((txHash) =>{
            console.log(txHash);
            waitForTxToBeMined(txHash, callback);
          })
          .catch(err => console.log(err));
      }

      window.approve = function(amount, callback){
          let decAmount = Eth.toBN(amount).mul(decimals);
          ZapToken.approve( CONTRACTS['ZapBondage']['address'] , decAmount, {from:address, gas: new BN('6000000')})
            .then((txHash) =>{
              waitForTxToBeMined(txHash, callback); 
            })
            .catch(err => console.log(err));
      }      

      window.getZap = function(amount){
        const decAmount = Eth.toBN(amount);
          eth.getTransactionCount(address).then((nonce) => {
              eth.sendTransaction({
                from: address,
                to: CONTRACTS['ZapFaucet']['address'],
                value: decAmount,
                gas: new BN('6000000'),
                gasPrice: new BN('21000000000'),
                nonce: nonce,
                data: ""
              })
              .then(txHash => {
                console.log('Transaction Hash', txHash);
                input.val('');
                $('#bond_form').show();
                return Promise.resolve('')
              })
              // .then(() => initiateProvider())
              // .then(() => initiateProviderCurve())
              .catch(err => console.log('Transaction Hash error', err));
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

      $('#submit').click((e) => {
        e.preventDefault()
        e.stopPropagation()
        const amount = input.val()
        getZap(amount)
      })

      async function initiateProvider() {
        try {
          return await ZapRegistry.initiateProvider(
            publicKey,
            title,
            endpoint,
            params,
            {from: address, gas: gas})
        } catch(err) {
          console.log('initiateProvider',err)
          throw err
        }
      };

      async function initiateProviderCurve() {
        try {
          return await ZapRegistry.initiateProviderCurve(endpoint, curveLinear, start, mul, {from: address, gas: gas})
        } catch(err) {
          console.log('initiateProviderCurve', err)
          throw err
        }
      };
  });
});

