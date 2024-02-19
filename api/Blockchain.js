const hashFun = require('crypto-js/sha256');


    class List_vote
    {

        constructor(from,to)
        {

            this.from = from
            this.to = to
            
        }

    }
class Block {
     

    constructor(Vote_dt,prehash)
    {
        this.time = Date.now()
        this.data = Vote_dt;
        this.prehash = prehash;
        this.Blockhash =this.hashCal();
        this.nonce = 0;
    }
    hashCal(){
        return hashFun(this.nonce +  this.time + JSON.stringify(this.data) + this.prehash  ).toString();
    }
    mineBlock(diff)
    {
        while(this.Blockhash.substring(0,diff) !== Array(diff+1).join("0"))
        {
            this.nonce++
            this.Blockhash = this.hashCal()
        }
    }
}
class Blockchain{

    constructor()
    {
        this.chain = [this.perBlock()]
        this.diff =4;
        this.listVote =[]
    }
    perBlock(){
        return new Block('0000','perblock','000000000000000000000000000000000000000').mineBlock(this.diff)
    }
    addBlock(public_k_Reward)
    {
        // Block.prehash = this.lastBlock().Blockhash
        // 
        //
        let block = new Block(this.List_vote)
        block.mineBlock(this.diff)
        this.chain.push(Block)
    }
    lastBlock()
    {
        return this.chain[this.chain.length-1]
    }
    createTransforVote(Vote)
    {
        this.listVote.push(Vote)
    }
}

        let Chain = new Blockchain()
            Chain.addBlock(new Block('000',{Vote :1}))
            Chain.addBlock(new Block('000',{Vote :1}))
            console.log(JSON.stringify(Chain,null,4))