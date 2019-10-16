import { app } from './src/app';
import { mongoConnect } from './src/database/mongo';
const port = process.env.PORT || 8080;
mongoConnect(() => {
  app.listen(port);
});
