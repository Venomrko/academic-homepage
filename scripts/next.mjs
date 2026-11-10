import { createRequire } from 'node:module';

// Avoid telemetry configuration writes on Windows with redirected user folders.
process.env.NEXT_TELEMETRY_DISABLED ??= '1';
createRequire(import.meta.url)('next/dist/bin/next');
