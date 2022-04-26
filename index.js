import express ,{json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routes/users-routes.js';
import authRouter from './routes/auth-routes.js';
import getUsers from './routes/user-get.js'
import getCoursename from './routes/coursename-get.js';
import getCourseoutcome from './routes/courseoutcome-get.js';
import getbldetails from './routes/bldetails-get.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {credentials:true, origin: process.env.URL || '*'};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use('/', express.static(join(__dirname,'public')));
app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);
app.use('/api/', getUsers);
app.use('/api/', getCoursename);
app.use('/api/', getCourseoutcome);
app.use('/api/', getbldetails);


app.listen(PORT, ()=>{
    console.log(`Server is Listening on port:${PORT}`);
})