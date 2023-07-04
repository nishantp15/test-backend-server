const express = require('express');
const cors = require('cors');
const {connectTODB} = require('./Database/db')
const app = express();

const {productRouter} = require('./Routes/productRoutes')
const {userRouter} = require('./Routes/userRoutes')
const {orderHistoryRouter} = require('./Routes/orderHistoryRoutes')


app.use(cors());
app.use(express.json());
app.use(logrequest);

app.use('/products',productRouter);
app.use('/user',userRouter);
app.use('/orderhistory',orderHistoryRouter);


function logrequest(req, res, next){
    next();
}

const port = 3002;

connectTODB().then(()=>[
    app.listen(port,()=>[
        console.log("listening to",port)
    ])
])