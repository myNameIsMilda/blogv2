import mongoose, { Schema } from 'mongoose';

const tweetSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true, // This will add `createdAt` and `updatedAt` fields
    }
)

// Check if the model is already compiled
const Tweet = mongoose.models.Tweet || mongoose.model('Tweet', tweetSchema);

export default Tweet;