import express from 'express';

export let server: express.Application;

function initServer(appName: string, port: any): void {
    console.info(`Starting ${appName} on ${port}`);

    server = express();

    const bindTitle = typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${port}`;
    server.listen(port);
    server.on('listening', createOnServerListening(appName, bindTitle));
  }

function createOnServerListening(appName: string, bindTitle: string): () => void {
    return () => {
      console.info(`${appName} - Listening on ${bindTitle}`);
    };
}

export async function start(port: number): Promise<void> {
    try {
      initServer('Mars', port);
      initAppRoutes();
    } catch (error) {
      console.error('An error occurs while init app:', error);
      process.exit(1);
    }
}

async function initAppRoutes(): Promise<void> {
  const routes = await import('./routes');
  server.use('/', routes.router);
}
