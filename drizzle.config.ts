import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default defineConfig({
    schema: "./src/db/schemas/*.ts",
    out: "./drizzle",
    dialect: "sqlite",
    dbCredentials: {
        url: process.env.TURSO_URL as string,
        authToken: process.env.TURSO_AUTH_TOKEN as string,
    },
    driver: "turso",
});
