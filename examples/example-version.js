import * as gptscript from "../dist/gptscript.js";

(async () => {
    try {
        const client = new gptscript.Client(process.env.GPTSCRIPT_URL)
        const response = await client.version();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
})();