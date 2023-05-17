import { NextFunction, Request, Response } from "express";
import MainRepository from "../repository/mainRepository";
import ErrorType from "../config/errorType";

const repo = new MainRepository()

export const index = async (req:Request, res:Response, next: NextFunction) =>{
    try {
        const data = await repo.getUser()
        return res.json(data)
    } catch (error:any) {
        next(error);
    }
}