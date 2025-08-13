import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function mountSwagger(app){
  const doc = YAML.load(path.join(__dirname, 'openapi.yaml'));
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(doc));
}
