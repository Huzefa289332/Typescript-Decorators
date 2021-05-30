import express from 'express';
import { urlencoded } from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/rootController';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['huzefa'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listen on port 3000');
});
