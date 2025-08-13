import { Router } from 'express';
import { logger } from '../logger/index.js';
const router = Router();

router.get('/loggerTest', (_req, res) => {
  logger.debug('Debug log');
  logger.http('HTTP log');
  logger.info('Info log');
  logger.warning('Warning log');
  logger.error('Error log');
  logger.fatal('Fatal log');
  res.json({ ok: true });
});

export default router;
