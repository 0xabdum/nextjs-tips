import { OpenAPIHono } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';

const app = new OpenAPIHono();

const routes = app.route('/');

export type AppType = typeof routes;

export { app };
