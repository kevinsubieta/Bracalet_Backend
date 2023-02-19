const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

export class UsersQueries {

    constructor() {
    }

    async createNewUserTest() {
        await prisma.Police.create({
            data: {
                ci: 3,
                name: 'Kevin',
                lastname: 'Test',
                username: 'KevinTest',
                password: '123'
            },
        })
    }

    async getAllUser(){
        await this.createNewUserTest()
        return await prisma.Police.findMany()
    }

}
