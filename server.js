const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const cors= require('cors');
const morgan= require('morgan');
const teamRoutes= require('./routes/team');
const loginRoutes= require('./routes/login');
const signupRoutes= require('./routes/signup');
const leagueRoutes= require('./routes/league');

dotenv.config();

const app= express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/api/teams',teamRoutes);

app.use('/api/leagues',leagueRoutes);

app.use('/api/login',loginRoutes);

app.use('/api/signup',signupRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to DRIBBLR API⚽️');
});

mongoose.connect(process.env.MONGO_URI,{
}).then(()=>console.log("MongoDB connected✅"))
.catch((err)=>console.error("MongoDB connection error:❗️",err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




