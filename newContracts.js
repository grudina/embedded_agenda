CONTRACTS={
  'ZapToken':{
    "address": "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "mintingFinished",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseApproval",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "balance",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "finishMinting",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "allocate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseApproval",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "remaining",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "MintFinished",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      }
    ]
  },
  'ZapRegistry':{
    "address": "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "provider",
            "type": "address"
          },
          {
            "name": "specifier",
            "type": "bytes32"
          }
        ],
        "name": "getProviderCurve",
        "outputs": [
          {
            "name": "curveType",
            "type": "uint8"
          },
          {
            "name": "curveStart",
            "type": "uint256"
          },
          {
            "name": "curveMultiplier",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "provider",
            "type": "address"
          }
        ],
        "name": "getProviderPublicKey",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "provider",
            "type": "address"
          }
        ],
        "name": "getProviderTitle",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "functions",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "public_key",
            "type": "uint256"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "endpoint_specifier",
            "type": "bytes32"
          },
          {
            "name": "endpoint_params",
            "type": "bytes32[]"
          }
        ],
        "name": "initiateProvider",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "curveType",
            "type": "uint8"
          },
          {
            "name": "curveStart",
            "type": "uint256"
          },
          {
            "name": "curveMultiplier",
            "type": "uint256"
          }
        ],
        "name": "initiateProviderCurve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_functions",
            "type": "address"
          }
        ],
        "name": "setFunctionsAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_admin",
            "type": "address"
          }
        ],
        "name": "changeAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "provider",
            "type": "address"
          },
          {
            "name": "specifier",
            "type": "bytes32"
          }
        ],
        "name": "getProviderRouteKeys",
        "outputs": [
          {
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getNextProvider",
        "outputs": [
          {
            "name": "nextIndex",
            "type": "uint256"
          },
          {
            "name": "oracleAddress",
            "type": "address"
          },
          {
            "name": "public_key",
            "type": "uint256"
          },
          {
            "name": "title",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "adminAddress",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "endpoint_params",
            "type": "bytes32[]"
          }
        ],
        "name": "setEndpointParams",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ]
  },
  'ZapBondage':{
    "address": "0xfb88de099e13c3ed21f80a7a1e49f8caecf10df6",
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "numDots",
            "type": "uint256"
          },
          {
            "name": "oracleAddress",
            "type": "address"
          }
        ],
        "name": "calcZapForDots",
        "outputs": [
          {
            "name": "_numZap",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_arbiterAddress",
            "type": "address"
          }
        ],
        "name": "setArbiterAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "oracleAddress",
            "type": "address"
          },
          {
            "name": "endpoint",
            "type": "bytes32"
          }
        ],
        "name": "getZapBound",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "fromProviderHolder",
            "type": "address"
          },
          {
            "name": "toOracleHolder",
            "type": "address"
          },
          {
            "name": "numDots",
            "type": "uint256"
          }
        ],
        "name": "releaseDots",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "functions",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "numZap",
            "type": "uint256"
          },
          {
            "name": "oracleAddress",
            "type": "address"
          }
        ],
        "name": "bond",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "oracleAddress",
            "type": "address"
          }
        ],
        "name": "getDotsIssued",
        "outputs": [
          {
            "name": "dots",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_functions",
            "type": "address"
          }
        ],
        "name": "setFunctionsAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_admin",
            "type": "address"
          }
        ],
        "name": "changeAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "numDots",
            "type": "uint256"
          },
          {
            "name": "oracleAddress",
            "type": "address"
          }
        ],
        "name": "unbond",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "oracleAddress",
            "type": "address"
          },
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "numZap",
            "type": "uint256"
          }
        ],
        "name": "calcZap",
        "outputs": [
          {
            "name": "_numZap",
            "type": "uint256"
          },
          {
            "name": "_numDots",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_dispatchAddress",
            "type": "address"
          }
        ],
        "name": "setDispatchAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "holderAddress",
            "type": "address"
          },
          {
            "name": "oracleAddress",
            "type": "address"
          },
          {
            "name": "numDots",
            "type": "uint256"
          }
        ],
        "name": "escrowDots",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "specifier",
            "type": "bytes32"
          },
          {
            "name": "holderAddress",
            "type": "address"
          },
          {
            "name": "oracleAddress",
            "type": "address"
          }
        ],
        "name": "getDots",
        "outputs": [
          {
            "name": "dots",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "adminAddress",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "name": "registryAddress",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ]
  },
  'ZapFaucet':{
    "address": "0xeec918d74c746167564401103096d45bbd494b74",
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "setOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "amt",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "rate",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "withdrawZap",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "withdrawEther",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_token",
            "type": "address"
          },
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "n1",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "n2",
            "type": "uint256"
          }
        ],
        "name": "Log",
        "type": "event"
      }
    ]
  },
  'ZapDispatch': {
    "address": "0x2c2b9c9a4a25e24b174f26114e8926a9f2128fe4",
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "name": "_bondageAddress",
            "type": "address"
          }
        ],
        "name": "setBondageAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "_response1",
            "type": "string"
          },
          {
            "name": "_response2",
            "type": "string"
          },
          {
            "name": "_response3",
            "type": "string"
          },
          {
            "name": "_response4",
            "type": "string"
          }
        ],
        "name": "respond4",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "_response1",
            "type": "string"
          },
          {
            "name": "_response2",
            "type": "string"
          },
          {
            "name": "_response3",
            "type": "string"
          }
        ],
        "name": "respond3",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "_response",
            "type": "string"
          }
        ],
        "name": "respond1",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "provider",
            "type": "address"
          },
          {
            "name": "subscriber",
            "type": "address"
          },
          {
            "name": "query",
            "type": "string"
          },
          {
            "name": "endpoint",
            "type": "bytes32"
          },
          {
            "name": "endpoint_params",
            "type": "bytes32[]"
          }
        ],
        "name": "query",
        "outputs": [
          {
            "name": "id",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "ZapDataProxyDispatch",
        "outputs": [],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "_response1",
            "type": "string"
          },
          {
            "name": "_response2",
            "type": "string"
          }
        ],
        "name": "respond2",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "query",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "endpoint",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "name": "endpoint_params",
            "type": "bytes32[]"
          }
        ],
        "name": "Incoming",
        "type": "event"
      }
    ],
  },
  'ZapArbiter': {
    "address": "0xf204a4ef082f5c04bb89f7d5e6568b796096735a",
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "name": "provider_address",
            "type": "address"
          },
          {
            "name": "endpoint_params",
            "type": "bytes32[]"
          },
          {
            "name": "endpoint",
            "type": "bytes32"
          },
          {
            "name": "public_key",
            "type": "uint256"
          },
          {
            "name": "blocks",
            "type": "uint256"
          }
        ],
        "name": "initiateSubscription",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "endpoint",
            "type": "bytes32"
          },
          {
            "name": "provider_address",
            "type": "address"
          },
          {
            "name": "subscriber_address",
            "type": "address"
          }
        ],
        "name": "endZapSubscription",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_bondageAddress",
            "type": "address"
          },
          {
            "name": "_registryAddress",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "provider_address",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "subscriber",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "public_key",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "endpoint_params",
            "type": "bytes32[]"
          },
          {
            "indexed": false,
            "name": "endpoint",
            "type": "bytes32"
          }
        ],
        "name": "ZapDataPurchase",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "subsriber",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "terminator",
            "type": "uint8"
          }
        ],
        "name": "ZapDataSubscriptionEnd",
        "type": "event"
      }
    ]
  }
 };
 