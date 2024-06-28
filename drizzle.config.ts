import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schemas/*.ts",
    out: "./drizzle",
    dialect: "sqlite",
    dbCredentials: {
        url: "libsql://cicada-ifty64bit.turso.io",
        authToken:
            "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTk2MDIyMjksImlkIjoiMTdmNDBhYmYtOWY5YS00YmMxLWJhMTEtZTI1YTAyYzkzZWJjIn0.ncK7foMUJeBsF9MNkQnGCLdWCyl4THKj83Cv08zTFCjfbAp_hvjVpH4XOCDzvokbgGBh93uE0hpkK9OGL6i_DQ",
    },
    driver: "turso",
});
