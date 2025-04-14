import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './drizzle',
  schema: '.src/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
})