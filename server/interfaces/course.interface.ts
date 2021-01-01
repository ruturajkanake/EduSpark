import { Document, Types } from 'mongoose';

export default interface ICourse extends Document {
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    avgRatings: number;
    createdAt: Date;
    updatedAt: Date;
}
