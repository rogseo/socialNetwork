const { truncateSync } = require('fs');
const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createAt: {
        type: Date,
        // get : v=>`${v.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric",hour:"numeric"})}`,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],

},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });
thoughtSchema
    .path('createAt')
    .get(function(v){
    return `${v.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric",hour:"numeric"})}`;
});
// thoughtSchema
//   .virtual('createdAt')
//   // Getter
//   .get(function () {
//     return this.createAt.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric",hour:"numeric"});
//   });

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
