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

      ZapToken.balanceOf(address)
        .then(({ balance }) => {
          if(+balance.toString()) {
            $('#bond_form').show();
          }
        })
      
      endpoint = Eth.fromUtf8("smart_contract");
      
      //10^18 as BigNumber
      decimals = Eth.toBN(10).pow(Eth.toBN(18)); 
      const gWei = Eth.toBN(10).pow(Eth.toBN(9));
      const input = $('#eth_input');
      const bondInput = $('#bond_input');
      // const oracleAddress = "0x8a258ff1cb9fa8b4f7b48d2b7e72bf179e2c6210";
      const oracleAddress = "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef"; // accounts[2] added for test
      const gas = new BN('6000000');
      
      window.getBalanceZAP = async function(address){
        try{
          const obj = await ZapToken.balanceOf(address)
          console.log('balance ZAP: ' + obj.balance, typeof obj.balance, +obj.balance.toString() );
          $('#zapBalance').html(obj.balance + " ZAP");
        }catch(err) {
          console.log(err);
        } 
      };

      window.getBalanceETH = async function(address){
        try {
          const balance = await eth.getBalance(address)
          console.log('balance ETH: ' + balance);
        } catch(err) {
          console.log(err)
        }
      };

      window.getDots = async function(){
        try {
          const res = await ZapBondage.getDots( endpoint, address, oracleAddress )
          console.log(res, res.dots.toString())
        } catch(err) {
          console.log(err)
        }
      }

      window.bond = async function(amount){
        try {
          // amount = amount * Math.pow(10, 9);
          const decAmount = Eth.toBN(amount);
          const txHash = await ZapBondage.bond( endpoint, decAmount, oracleAddress, { from: address, gas: gas} )
          console.log(txHash)
          await waitForTxToBeMined(txHash)
        } catch(err) {
          console.log(err)
        }
      }

      window.unbound = async function(amount) {
        try {
          amount = Eth.toBN(amount)
          const txHash = await ZapBondage.unbond(
            endpoint,
            amount,
            oracleAddress,
            {from: address, gas: gas}
          )
          console.log(txHash)
          await waitForTxToBeMined(txHash)
        } catch(err) {
          console.log(err)
        }
      }

      window.approve = async function(amount){
        try {
          amount = amount * Math.pow(10, 18)
          const decAmount = Eth.toBN(amount);
          const txToMy = await ZapToken.approve( address, decAmount, {from:address, gas: gas})
          await waitForTxToBeMined(txToMy);
          const txHash = await ZapToken.approve( CONTRACTS['ZapBondage']['address'] , decAmount, {from:address, gas: gas})
          const res = await waitForTxToBeMined(txHash);
          console.log(res);
          return Promise.resolve(res);
        }catch(err) {
          console.log(err)
        };
      }      

      window.getZap = async function(amount){
        try {
          amount = amount * Math.pow(10, 18)
          const decAmount = Eth.toBN(amount);
          const nonce = await eth.getTransactionCount(address)
          const txHashSend = await eth.sendTransaction({
            from: address,
            to: CONTRACTS['ZapFaucet']['address'],
            value: decAmount,
            gas: gas,
            gasPrice: new BN('21000000000'),
            nonce: nonce,
            data: "",
          })
          await waitForTxToBeMined(txHashSend);

          const { balance } = await ZapToken.balanceOf(address)
          console.log(balance.toString())
          if (+balance.toString()) {
            input.val('');
            $('#bond_form').show();
          } else {
            throw new Error('balance tokens owner is 0')
          }
        } catch(err) {
          console.log('Transaction Hash error', err)
        }
      }

      //wait for tx to be mined. keep checking    
      function waitForTxToBeMined(txHash) {
        return new Promise((resolve, reject) => {
          eth.getTransactionReceipt(txHash, (err, res) => 
            {
              if (err) return reject(err)
              if (res) return resolve(txHash);
            }
          )
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
        e.preventDefault();
        e.stopPropagation();
        const amount = input.val();
        getZap(amount)
      })

      $('#bond_submit').click(async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const amount = bondInput.val();
        const txHash = await approve(amount)
        bond(amount); 
      })

      function callBackWrapper(err, res) {
        console.log('callBackWrapper',err, res)
        if(res) return Promise.resolve(res)
        if(err) return Promise.reject(err)
      }
      
      window.reload = function() {
        localStorage.clear()
        location.reload()
      }
  });
});
