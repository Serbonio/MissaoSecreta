import "dotenv/config";
import {defineConfig} from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schema/*.ts",

    out:"./drizzle",

    dialect: "mysql",
    dbCredentials:{
        host: process.env.DB_HOST!, 
        port: process.env.DB_PORT!,
        user: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!, //acredita só funciona se tiver uma palavra-passe
        database: process.env.DB_NAME!,
        // url: "mysql://root@localhost:3306/missaosecreta"
    },
    verbose:true,
    strict:true,
})