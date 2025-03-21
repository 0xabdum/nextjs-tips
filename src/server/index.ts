import { OpenAPIHono } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';

const app = new OpenAPIHono();

app.doc31('/api/swagger.json', {
  openapi: '3.1.0',
  info: { title: 'Hono x Nextjs', version: '0.1.0' },
});

app.get(
  '/api/scalar',
  apiReference({
    url: '/api/swagger.json',
  })
);

const routes = app.route('/');

export type AppType = typeof routes;

export { app };
