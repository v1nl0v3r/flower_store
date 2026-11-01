import { config } from '#src/config/env.ts';
import { appendFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import  { type CustomTransportFn, JetLogger } from 'jet-logger';

const filepath = config.logger.logPath;

if (filepath) {
  await mkdir(dirname(filepath), { recursive: true });
}

const customTransport: CustomTransportFn = async ({
  time,
  level,
  msg
}) => {
  const line = `[${time}] ${level ?? ""}: ${msg}\n`;

  process.stdout.write(line);

  if (filepath) {
    await appendFile(filepath, line);
  }
};

const logger = JetLogger({
  mode: JetLogger.Modes.CUSTOM,
  customTransport
});
export default logger;