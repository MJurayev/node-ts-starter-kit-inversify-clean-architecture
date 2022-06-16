import "reflect-metadata";

import container from "./application/container";
import App from "./application/Application";

export async function Bootstrap(): Promise<void> {
    const app = new App(container);
    app.start(3030, () => {
        console.log(`Server started in ${3030}`)
    })
}


Bootstrap().then(() => {
    console.log("Application bootstrapped")
})