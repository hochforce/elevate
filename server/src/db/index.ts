import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { env } from '../env'

export const client = postgres(
  'postgresql://onorbit_owner:2nbQjBu1VgPA@ep-super-lab-a5o7p7bo.us-east-2.aws.neon.tech/onorbit?sslmode=require'
)
export const db = drizzle(client, { schema, logger: true })
