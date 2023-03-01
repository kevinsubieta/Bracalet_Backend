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

    async getAllUser() {
      //  await this.createNewUserTest()
        return 'OK'
    }


    async loginByUserAndPass(data: any) {
        let responseFromDB = await prisma.police.findFirst({
            where: {
                userName: data.userName,
                password: data.password
            }
        })
        return responseFromDB
    }


}
