import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import IToken from '../interfaces/token.interface';
import { NOT_FOUND, UNAUTHORIZED } from '../helpers/response.helper';
import Profile, { IProfileModel } from '../models/profile.model';
import assertIRequest from '../helpers/request.helper';

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<unknown> => {
    try {
        const token: string | undefined = req
            .header('Authorization')
            ?.replace('Bearer ', '');
        const secret: string = process.env.JWT_SECRET!;
        const decoded = jwt.verify(token!, secret);
        if (!decoded) throw new Error('Token Expired');
        const _id: string = (decoded as IToken)._id;
        assertIRequest(req);
        req.userId = _id;
        next();
    } catch (err) {
        console.log(err);
        return UNAUTHORIZED(res, err.message);
    }
};

export const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<unknown> => {
    try {
        assertIRequest(req);
        const profile: IProfileModel | null = await Profile.findOne({
            _id: req.userId
        });
        if (!profile) throw new Error('User not found');
        req.profile = profile;
        next();
    } catch (err) {
        return NOT_FOUND(res, err.message);
    }
};
