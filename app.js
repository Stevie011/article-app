

const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//load the config file here
dotenv.config({path: './config/config.env'})

//don't forget to run the function
connectDB()

const app = express()

//logging done here
if (process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}



//handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}))


app.set('view engine', '.hbs')

//Static Folder
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use('/', require('./routes/index'))

console.log(process.env.NODE_ENV)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))