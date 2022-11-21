const {Schema, model}=require('mongoose');

const userSchema = new Schema(
    {
        thoughts : [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought',
            },
          ],
        friends : [
            {
                type : Schema.Types.ObjectId,
                ref : 'User',
            }
        ],
        username:{
            type : String,
            required : true,
            unique : true,
            trim : true,
        },
        email : {
            type : String,
            required : true,
            unique : true,
            // validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },      

    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
)

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
