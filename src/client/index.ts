import {PrismaClient}  from "@prisma/client"
import Redis from "ioredis"

export const prismaClient = new PrismaClient()



export const redisclient = new Redis(process.env.REDIS_URL as string);
