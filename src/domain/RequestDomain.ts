import {RequestQueries} from '../data/queries/RequestQueries'

export class RequestDomain {

    constructor() {
    }

    async registerNewRequest(data: any) {
        try {
            let requestQueries = new RequestQueries()
            return await requestQueries.registerNewRequest(data)
        } catch (error) {
            return "ERROR"
        }
    }

    async getAllRequest() {
        try {
            let requestQueries = new RequestQueries()
            return await requestQueries.getAllRequest()
        } catch (error) {
            return "ERROR"
        }
    }


    async attendAnyRequest(data: any) {
        try {
            let requestQueries = new RequestQueries()
            return await requestQueries.attendAnyRequest(data)
        } catch (error) {
            return "ERROR"
        }
    }


    async getAllServices() {
        try {
            let requestQueries = new RequestQueries()
            return await requestQueries.getAllServices()
        } catch (error) {
            return "ERROR"
        }
    }

    async getAllServicesByCi(data: any) {
        try {
            let requestQueries = new RequestQueries()
            return await requestQueries.getAllServicesByCi(data)
        } catch (error) {
            return "ERROR"
        }
    }


}
