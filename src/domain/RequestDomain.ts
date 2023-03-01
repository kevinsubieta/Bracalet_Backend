import {RequestQueries} from '../data/queries/RequestQueries'

export class RequestDomain {

    constructor() {
    }

    async registerNewRequest(data: any){
        let requestQueries = new RequestQueries()
        return await requestQueries.registerNewRequest(data)
    }

    async getAllRequest(){
        let requestQueries = new RequestQueries()
        return await requestQueries.getAllRequest()
    }


    async attendAnyRequest(data: any){
        let requestQueries = new RequestQueries()
        return await requestQueries.attendAnyRequest(data)
    }



}
