import express from "express";
const app = express();
import cors from "cors";
import {Users} from "./users.js"

app.use(cors());

app.get("/", (req, res) => {
    const q = req.query.q

    // use function from the client side with keys
    const keys = ["first_name", "last_name", "email",]

    const search = (data) => {
        
        return data.filter(item=>
            keys.some(key=>item[key].toLowerCase().includes(q))
        );
    };
    res.json(search(Users).splice(0,10))
});

app.listen(5000, () => console.log("API is working"))