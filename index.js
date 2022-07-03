const PORT = process.env.PORT || 8080;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const  app = new Application()

app.use(jsonParser);
app.use(parseUrl('http://localhost8080'));

app.addRoute(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))

