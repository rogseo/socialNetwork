const {Schema, model, Types}=require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            default:() => new Types.ObjectId(),
        },
        reactionBody:{
            type: String,
            required : true,
            maxlength:280,
        },
        username:{
            type:String,
            required : true,
        },
        createdAt:{
            type:Date,
            default: Date.now,
            //format getter
        }
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
)

// const Reaction=model('reaction',reactionSchema); ??? why?
// throw new TypeError('Invalid schema configuration: ' +
// ^

// TypeError: Invalid schema configuration: `model` is not a valid type within the array `reactions`.See https://bit.ly/mongoose-schematypes for a list of valid schema types.
module.exports=reactionSchema;