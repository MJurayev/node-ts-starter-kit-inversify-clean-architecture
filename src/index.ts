import "reflect-metadata";
import "dotenv/config"
import App from "./presentation/App";
export async function bootstrap(): Promise<void> {
    new App({
        defaultScope: "Singleton"
    });
}

console.clear()
bootstrap().then(() => {
    console.log("Application bootstrapped")
})