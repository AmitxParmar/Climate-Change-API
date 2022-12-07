const PORT = 3306;
import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();

app.listen(PORT, () => console.log(`listening on ${PORT}`))
