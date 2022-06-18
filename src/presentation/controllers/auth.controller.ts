import { BaseHttpController, controller, httpPost, requestBody } from "inversify-express-utils";
import { RegisterDto } from "../../use-case/dtos/AuthDto";
import AuthService from "../../use-case/auth.service";

@controller("/api/auth")
class AuthController extends BaseHttpController {

    constructor(private readonly _authService: AuthService) {
        super()
    }

    @httpPost("/login")
    async login() {

    }

    @httpPost("/register")
    async register(@requestBody() body: RegisterDto) {
        const result = await this._authService.register(body)
        return this.json(result)
    }
}

export default AuthController