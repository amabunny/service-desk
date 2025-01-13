import { generateApi } from 'swagger-typescript-api';
import dotenv from 'dotenv-flow'
import path from 'path'

dotenv.config({
  node_env: process.env.NODE_ENV,
  path: path.resolve(process.cwd(), './')
})

const url = process.env['VITE_SWAGGER_SCHEMA_URL'];

void generateApi({
  name: 'service-desk-api',
  output: path.resolve(process.cwd(), './src/api/service-desk'),
  url,
  httpClientType: "axios",
  apiClassName: 'ServiceDeskApi',
  generateUnionEnums: true,
  sortTypes: true,
  templates: path.resolve(process.cwd(), './scripts/codegen/templates/base'),
  modular: true,
})
