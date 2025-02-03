import express, {json, urlencoded} from 'express';
import productsRoutes from './routes/products/index'

const app = express();
const port = 3000;
app.use(urlencoded({ extended: false }));
app.use(json()); //it is always above the routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use('/products', productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});