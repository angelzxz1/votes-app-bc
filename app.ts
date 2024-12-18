import express from "express"; //, { RequestHandler }
import Users from "./routes/users";
import Votes from "./routes/votes";
import helmet from "helmet";
import { helmetConfig } from "./helmetConfig";

const app = express();
const port = 3000;
app.use(helmet(helmetConfig));
app.use(express.json());

app.use("/users", Users);
app.use("/votes", Votes);
app.use((_req, res, next) => {
    res.setHeader("Expect-CT", "enforce, max-age=30");
    next();
});
app.listen(port, () => {
    console.log("Running!");
});

/*

 y sequelize

 */
