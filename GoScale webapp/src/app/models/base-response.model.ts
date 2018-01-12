import { User } from "app/models/user.model";

export class BaseResponse {
    statusCode:string;
    message:string;
}

export class UserResponse {
    baseResponse:BaseResponse;
    user:User;
}
