import "reflect-metadata";

import App from "./presentation/api/App";
export async function Bootstrap(): Promise<void> {
    new App({
        defaultScope: "Singleton"
    });
}


Bootstrap().then(() => {
    console.log("Application bootstrapped")
})