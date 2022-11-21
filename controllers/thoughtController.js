const { Reaction } = require('../models');
const Thought=require('../models/Thought');

module.exports={
    getThought(req,res){
        Thought.find()
        .then((thought)=>res.json(thought))
        .catch((err)=>res.status(500).json(err));
    },
    getSingleThought(req,res){
        Thought.findOne({_id:req.params.thoguthId})
        .then((thought)=>
        !thought
        ?res.status(404).json({message:'No thought with that ID'})
        :res.json(thought)
        )
        .catch((err)=>res.status(500).json(err));
    },
    createThought(req,res){
        Thought.create(req.body)
        .then((dbThoughtData)=>res.json(dbThoughtData))
        .catch((err)=>res.status(500).json(err));
    },

};