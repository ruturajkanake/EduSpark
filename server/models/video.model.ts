import { Schema, model, Model } from 'mongoose';
import IVideo from '../interfaces/video.interface';

const videoSchema = new Schema(
    {
        courseId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Course'
        },
        topic: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        videoURL: {
            type: String,
            trim: true,
            required: true
        },
        videoNumber: {
            type: Number,
            required: true
        },
        quizNext: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const Video: Model<IVideo> = model<IVideo>('Video', videoSchema);
export default Video;