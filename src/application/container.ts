import { Container } from "inversify";
import UserService from "../modules/user/UserService";
import UserController from "../modules/user/UserController";
import UserRepository from "../modules/user/UserRepository";

const container = new Container();


container.bind(UserController).toSelf();
container.bind(UserService).toSelf();
container.bind(UserRepository).toSelf()

export default container