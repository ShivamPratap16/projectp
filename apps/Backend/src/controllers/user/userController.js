import userServices from "../../services/userServices.js";
import apiResponse from "../../utils/apiResponse.js";
import apiError from "../../utils/apiError.js";
import userModel from "../../models/userModel.js";
export default class userController {
    constructor() {
        this.UserService = new userServices(userModel);
    }
    async createUser(req, res) {
        console.log("Hi");
        const { email, password, superadmin, user_role, pcc, avatar, admin } = req.body;
        try {
            console.log("hi1");
            const response = await this.UserService.createUser({
                email, password, superadmin, user_role, pcc, avatar, admin
            });
            console.log(response);
            console.log("hi2");
            if (!response) {
                return res.status(500).json(new apiError(500, "User not created"));
            }
            return res.status(200).json(new apiResponse(200, "User created Succesfully", response));
        } catch (error) {
            return res.status(500).json(new apiError(500, error))
        }
    }
}