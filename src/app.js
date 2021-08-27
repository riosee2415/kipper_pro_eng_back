import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "../graphql/schema";
import bodyParser from "body-parser";

const app = express();

app.set(`port`, process.env.PORT);
app.use(morgan(`dev`));
connect();

if (process.env.NODE_ENV === `production`) {
  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    graphqlHTTP({
      schema,
      graphiql: false,
    })
  );
} else {
  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
}

// IF THIS PROJECT USED BROWSWER ROUTER - ROUTING [SSR]
/*
app.get("/*", (req, res) => {
  res.sendFile(__dirname),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    };
});
*/
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "path/to/your/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// Must add this code in nginx server conf file -> LOTATE => location/ { **  ... root /home/...;  index.html index.htm; ... /} [CSR]
/*

if (!-e $request_filename){
  rewrite ^(.*)$ /index.html break;
}


*/

app.listen(app.get(`port`), () => {
  console.log(
    ` - 🍀 [KEEPER-PRO-ENG] GRAPHQL BACKEND SERVER START WITH MONGODB  PORT : ${process.env.PORT} 🍀 `
  );
});
