//performs some task and returns back to controllers
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser } from "./interface/user.interface";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class AppService{
    constructor(@InjectModel('User') private userModel:Model<IUser>) { }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const newUser = await new this.userModel(createUserDto);
        return newUser.save();
     }

     async getAllUser(): Promise<IUser[]> {
        const userData = await this.userModel.find();
        if (!userData || userData.length == 0) {
            throw new NotFoundException('Users data not found!');
        }
        return userData;
    }
}
