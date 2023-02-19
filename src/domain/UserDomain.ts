import {UsersQueries} from '../data/queries/UsersQueries'

export class UserDomain {

    constructor() {
    }

    async createNewUserTest(){
        let userQueries = new UsersQueries()
        return await userQueries.getAllUser()
    }

}
