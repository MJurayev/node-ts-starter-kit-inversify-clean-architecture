import { Container } from "inversify";
import UserController from "../modules/user/UserController";

const container = new Container();
container.bind(UserController).toSelf();


export default container