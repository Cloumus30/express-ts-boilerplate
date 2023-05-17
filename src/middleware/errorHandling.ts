import { NextFunction, Request, Response } from "express";
import ErrorType from "../config/errorType";

export const errorMiddleware = (error:any, req:Request, res:Response, next:NextFunction) =>{
    console.log(error)
    if(error instanceof ErrorType){
        return res.status(error.status).json({
            error: error.message
        })
    }
    return res.status(500).json({
        error: error.message
    })
}