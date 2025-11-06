import { PrismaClient } from '@prisma/client';
import { getRequiredEnvVar } from './misc';

declare global {
  // eslint-disable-next-line no-var
  var __client: PrismaClient | undefined;
}

let client: PrismaClient;

if (getRequiredEnvVar('NODE_ENV') === 'production') {
  client = new PrismaClient();
} else if ((global as unknown as { __client: PrismaClient }).__client) {
  client = (global as unknown as { __client: PrismaClient }).__client;
} else {
  (global as unknown as { __client: PrismaClient }).__client = client =
    new PrismaClient();
}

export default client;
