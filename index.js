const PORT = 3306;
import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
const app = express();

app.get("/news", (req, res) => {
res.json("WElcome to climate change api")
}

app.listen(PORT, () => console.log(`listening on ${PORT}`))
