import express from 'express';
import { join } from 'path';
import { apiReference } from '@scalar/express-api-reference';
import { RegisterRoutes } from './routes/routes';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());

app.get('/swagger.json', (_req, res) => {
  res.sendFile(join(process.cwd(), 'swagger.json'));
});

app.use('/docs', apiReference({ url: '/swagger.json' }));

RegisterRoutes(app);

app.listen(PORT, () => {
  console.log(`Server:  http://localhost:${PORT}`);
  console.log(`Docs:    http://localhost:${PORT}/docs`);
  console.log(`Spec:    http://localhost:${PORT}/swagger.json`);
});
