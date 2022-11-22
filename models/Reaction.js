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
            // get: function(){
            //     this.createdAt.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
            // },
            // set:function(v){
            //     v.createdAt.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
            // },
        },
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
)

reactionSchema
  .virtual('createAt')
  // Getter
  .get(function () {
    return this.createdAt.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric",hour:"numeric"});
  });


module.exports=reactionSchema;