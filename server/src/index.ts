import {config} from 'dotenv'
config();

import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import Deck from "./models/Deck"


const PORT  = 5000
const app = express();
app.use(express.json())


app.post('/decks', async(req: Request, res: Response)=>{
    // res.send('hello user');
    console.log(req.body)
    const newDeck = new Deck({
        title: req.body.title,
    })
    const CreatedDeck = await newDeck.save();
    res.json(CreatedDeck);
})


mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL!).then(() => {
console.log(`listening on port ${PORT}`)
 app.listen(PORT)
})

// password Wku9JgWJ70RBoXg8