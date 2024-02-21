const { Web3 } = require('web3');
const abi = require("../config/casinonftABI.json");

const web3 = new Web3("wss://ethereum-goerli.publicnode.com");
const contractAddress = "0x54d738defaA0152D83508ac4346880F180F8cF2B";
const casinoTokenContract = new web3.eth.Contract(abi, contractAddress);


exports.getBlockNumber = async(req,res) => {
    try{
        const blockNumber = (await web3.eth.getBlockNumber()).toString();
        return res.status(200).json({
            status:"success",
            block:blockNumber
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}

exports.getChainId = async(req,res) => {
    try{
        const chainID = (await web3.eth.getChainId()).toString();
        return res.status(200).json({
            status:"success",
            chainid:chainID
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}

exports.getTokenSymbol = async(req,res) => {
    try{
        const symb = await casinoTokenContract.methods.symbol().call();
        return res.status(200).json({
            status: "success",
            symbol: symb
        })
    } catch(err){
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}

exports.getTokenName = async(req,res) => {
    try{
        const nam = await casinoTokenContract.methods.name().call();
        return res.status(200).json({
            status: "success",
            name: nam
        })
    } catch(err){
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}

exports.getTokenBaseURI = async(req,res) => {
    try{
        const base = await casinoTokenContract.methods.baseURI().call();
        return res.status(200).json({
            status: "success",
            baseuri: base
        })
    } catch(err){
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}

exports.getTokenBalanceOf = async(req,res) => {
    try{
        console.log(req.params);
        const bal = await casinoTokenContract.methods.balanceOf(req.params.address).call();
        return res.status(200).json({
            status: "success",
            balance: bal.toString()
        })
    } catch(err){
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}

exports.getOwnerByTokenId = async(req,res) => {
    try{
        const ownerAddress = await casinoTokenContract.methods.ownerOf(req.params.id).call();
        return res.status(200).json({
            status: "success",
            tokenId:req.params.id,
            owner: ownerAddress
        })
    } catch(err){
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}

exports.getTokenURI = async(req,res) => {
    try{
        const link = await casinoTokenContract.methods.tokenURI(req.params.id).call();
        return res.status(200).json({
            status: "success",
            tokenId:req.params.id,
            url: link
        })
    } catch(err){
        console.error(err.message);
        return res.status(500).send('Internal server error');
    }
}