const {PrismaClient} = require('@prisma/client')
//import set from 'date-fns/set'

const prisma = new PrismaClient()

export class RequestQueries {

    constructor() {
    }

    async registerNewRequest(dataToSave: any) {
        const response = await prisma.service.create({
            data: {
                lat: parseFloat(dataToSave.lat),
                long: parseFloat(dataToSave.long),
                ci: parseFloat(dataToSave.ci)
            }
        })
        return response;
    }


    async getAllRequest() {
        let responseFromDB = await prisma.request.findMany()
        return responseFromDB
    }


    async attendAnyRequest(data: any) {
        let responseFromDB = prisma.request.create({
            data: {
                ci: data.ci,
                id_a: data.id_a,
                id_p: data.id_p
            }
        })
        return responseFromDB
    }

}
