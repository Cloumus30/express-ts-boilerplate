import { PrismaClient, User } from "@prisma/client";

class MainRepository{
    protected prisma:PrismaClient
    constructor(){
        this.prisma = new PrismaClient()
    }

    public async getUser() : Promise<User[]>{
        const user = await this.prisma.user.findMany()
        return user
    }
}

export default MainRepository