import userModel from "../models/userModel.js";

class userServices {
    constructor() {
        this.UserModel = new userModel;
    }

    async createUser(userData) {
        console.log("Service layer: createUser called");
        const response = await this.UserModel.createUser(userData);
        return response;
    }
}

export default userServices;
