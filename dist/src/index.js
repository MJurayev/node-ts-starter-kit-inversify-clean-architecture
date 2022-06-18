"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
function Bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const container = new inversify_1.Container();
        const app = new inversify_express_utils_1.InversifyExpressServer(container);
        const server = app.build();
        server.listen(8080);
    });
}
exports.Bootstrap = Bootstrap;
Bootstrap().then(() => {
    console.log("App is bootstrapped");
});
//# sourceMappingURL=index.js.map