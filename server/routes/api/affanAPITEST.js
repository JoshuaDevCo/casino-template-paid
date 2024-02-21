const express = require('express');
const router = express.Router();
const api = require('../../controllers/affanAPITEST');


router.get( '/getcurrentblock', [], api.getBlockNumber );
router.get( '/getchainid', [], api.getChainId );
router.get( '/getsymbol', [], api.getTokenSymbol );
router.get( '/getname', [], api.getTokenName );
router.get( '/getbaseuri', [], api.getTokenBaseURI );
router.get( '/getBalanceOf/:address',[], api.getTokenBalanceOf);
router.get( '/getOwnerByTokenId/:id',[], api.getOwnerByTokenId);
router.get( '/getTokenURI/:id',[], api.getTokenURI);



module.exports = router;