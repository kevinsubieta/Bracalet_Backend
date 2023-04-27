import {UsersQueries} from '../data/queries/UsersQueries'

export class UserDomain {

    constructor() {
    }

    async createNewUserTest() {
        try {
            let userQueries = new UsersQueries()
            return await userQueries.getAllUser()
        } catch (error) {
            return "ERROR"
        }
    }

    async tryLoginUser(data: any) {
        try {
            let userQueries = new UsersQueries()
            return await userQueries.loginByUserAndPass(data)
        } catch (error) {
            return "ERROR"
        }
    }


}
