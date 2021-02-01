import * as bodyparser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import * as http from 'http';

import cors from 'cors';
import debug from 'debug';
import * as expressWinston from 'express-winston';
import * as winston from 'winston';
import { CommonRoutesConfig } from './common/common.routes.config';
import { DashboardRoutes } from './dashboard/dashboard.routes.config';
import { EventsRoutes } from './events/events.routes.config';
import { PublicsRoutes } from './publics/publics.routes.config';

dotenv.config();

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: string | undefined = process.env.SERVER_PORT;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');
const corsOptions: cors.CorsOptions = {
  credentials: true,
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyparser.json());
app.use(cors(corsOptions));

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);

routes.push(
  new EventsRoutes(app),
  new PublicsRoutes(app),
  new DashboardRoutes(app)
);

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(`Server up and running!`);
});

server.listen(port, () => {
  debugLog(`Server running at http://localhost:${port}`);
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
});
