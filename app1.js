window.addEventListener("load", function() {
    if (typeof web3 !== "undefined") {

        window.web3 = new Web3(web3.currentProvider);

    } else {
        console.log("No web3? You should consider trying MetaMask!");
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))

    }

    window.callb = function(err, data) {
        if(err) {
            console.log('errr===>>>>>.', err)
        }
        if(data) {
            console.log('data==>>>>>', data)
            return data
        }
    }
    eth = new Eth(window.web3.currentProvider);
    window.BN = BN;

    eth.accounts().then(accounts => {
        accounts = accounts
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

        ZapDispatch.allEvents({ fromBlock: 0, toBlock: 'latest' }, (err, event) => {
          console.log('listening has started!!!')
          if (err) console.log(err)
          console.log(event)
        })

        window.getBalanceZAP = function(address){
          ZapToken.balanceOf(address).then((obj) =>{
              console.log('balance ZAP: ' + obj.balance);
              $('#zapBalance').html(obj.balance + " ZAP");
          }).catch((err) => {
              console.log(err);
          });
        };

        window.getBalanceETH = function(address){
          eth.getBalance(address).then((balance) =>{
              console.log('balance ETH: ' + balance);
          }).catch((err) => {
              console.log(err);
          });
        };

        
        //10^18 as BigNumber
        decimals = Eth.toBN(10).pow(Eth.toBN(18));
        const gas = new BN('6000000')
        const tokensForOwner = new BN("1500000000000000000000");
        const tokensForProvider = new BN("5000000000000000000000");
        const approveTokens = new BN("1000000000000000000000");
        const endpoint = Eth.fromUtf8("smart_contract");
        const publicKey = 111;
        const title = "test";
        const params = [];
        const routeKeys = [1];
        const curveLinear = 1;
        const start = 1;
        const mul = 2;
        const oracleAddress = "0x8a258ff1cb9fa8b4f7b48d2b7e72bf179e2c6210"
        const oracle = accounts[1]

        window.initiateProvider = function() {
            ZapRegistry.initiateProvider(
                publicKey,
                title,
                endpoint,
                params,
                {from: oracle, gas: gas}
            ).then(data => {
                console.log('initiateProvider==>>',data)
                let div = document.createElement('div')
                    $(div).addClass('initiateProvider')
                    .html(data + " initiateProvider")
                    .appendTo($("#app"));
            })
            .catch(err => console.log('initiateProvider err ==>>',err))
        };

        window.initiateProviderCurve = function() {
            ZapRegistry.initiateProviderCurve(
                endpoint,
                curveLinear,
                start,
                mul,
                {from: oracle, gas: gas}
            ).then(data => {
                // console.log('initiateProviderCurve', data)
                const div = document.createElement('div')
                    $(div).addClass('initiateProviderCurve')
                    .html(data + " initiateProviderCurve")
                    .appendTo($("#app"));
            })
            .catch(err => console.log())
        };
        
        window.ownerAllocate = function() {
            ZapToken.allocate(
                address,
                tokensForOwner,
                {from:address, gas: gas}
            )
                .then(data => {
                    // console.log(data)
                    let div = document.createElement('div')
                    $(div).addClass('allocate_him_self')
                        .html(data + " allocate_him_self")
                        .appendTo($("#app"));
                })
                .catch(err => console.log(err))
        }

        window.oracleAllocate = function() {
            ZapToken.allocate(
                oracle,
                tokensForProvider,
                {from:address, gas: gas}
            )
                .then(data => {
                    // console.log(data)
                    let div = document.createElement('div')
                    $(div).addClass('allocate_to_oracle')
                        .html(data + " allocate_to_oracle")
                        .appendTo($("#app"));
                })
                .catch(err => console.log(err))
        }

        window.subscriberAllocate = function() {
            ZapToken.allocate(
                accounts[2],
                tokensForProvider,
                {from:address, gas: gas}
            )
                .then(data => {
                    // console.log(data)
                    let div = document.createElement('div')
                    $(div).addClass('allocate_to_subscriber')
                    .html(data + " allocate_to_subscriber")
                    .appendTo($("#app"));
                })
                .catch(err => console.log(err))
        }

        // window.approve = function(amount, callback){
        window.approve = function(amount, callback){
            let decAmount = Eth.toBN(amount).mul(decimals);
            ZapToken.approve( 
                CONTRACTS['ZapBondage']['address'],
                decAmount,
                { from:accounts[2], gas: gas}
                // { from: address, gas: gas}
            )
                .then((txHash) =>{
                    waitForTxToBeMined(txHash, callback); 
                });
        }    

        window.bond = function(amount, callback){
            ZapBondage.bond(
                endpoint,
                amount,
                oracle,
                {from: address, gas: gas} // bond from subscriber
                // {from: address, gas: gas} // bond from subscriber
            )
                .then((txHash) =>{
                    console.log(txHash);
                    waitForTxToBeMined(txHash, callback);
                })
                .catch(err => callback(null, err));
        }

        window.getDots = function(){
            ZapBondage.getDots( endpoint, accounts[2], oracle ) // get dots from subscriber
                .then((res) =>{
                    console.log(res);
                    console.log(res.dots.toNumber());
                    let div = document.createElement('div')
                    $(div).addClass('getDots')
                        .html(res.dots.toNumber() + " getDots")
                        .appendTo($("#app")); 
                });
        }

        window.getZap = function(amount, callback){
            eth.getTransactionCount(address).then((nonce) => {
                eth.sendTransaction({
                    from: address,
                    to: CONTRACTS['ZapFaucet']['address'],
                    value:new BN(amount),
                    gas: new BN('6000000'),
                    gasPrice: new BN('21000000000'),
                    nonce: nonce,
                    data: ""
                }).then((txHash) => {
                  console.log('Transaction Hash', txHash);
                }).catch(err => console.log('Transaction err',err));
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
