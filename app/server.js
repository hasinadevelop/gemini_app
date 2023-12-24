let dotenv = require('dotenv')
dotenv.config()
dotenv.config({ path: `.env.local`, override: true })

let runConversation = require('./api').runConversation
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let http = require('http')
const server = http.createServer(app);

let markdownit = require('markdown-it')

const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
})

app.set('view engine', "ejs")

//Middlewares
app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.get('/', (req, res) => {
	res.render('index')
})

app.post('/api', async (req, res) => {
    let prompt = req.body.prompt
    let history = req.body.history
    await runConversation(prompt, history).then((text) => {
        res.send(md.render(text))
    })
})

server.listen(80)