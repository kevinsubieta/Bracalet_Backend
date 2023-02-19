const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

export class UsersQueries {

    constructor() {
    }

    async createNewUserTest() {
        await prisma.Users.create({
            data: {
                ci: 3,
                name: 'Nuevo',
                lastname: 'Test',
            },
        })
    }

    async getAllUser(){
        await this.createNewUserTest()
        return await prisma.Users.findMany()
    }

}
