import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://onorbit_owner:2nbQjBu1VgPA@ep-super-lab-a5o7p7bo.us-east-2.aws.neon.tech/onorbit?sslmode=require',
  },
})
