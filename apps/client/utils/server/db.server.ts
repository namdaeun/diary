/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client';
import { getRequiredEnvVar } from './misc';

declare global {
  var __client: PrismaClient | undefined;
}

let client: PrismaClient;

if (getRequiredEnvVar('NODE_ENV') === 'production') {
  client = new PrismaClient();
} else if (global.__client) {
  client = global.__client;
} else {
  global.__client = client = new PrismaClient();
}

export default client;
