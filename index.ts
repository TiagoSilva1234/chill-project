const express2 = require("express"),
  app = express2();
const cors = require("cors");
import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
const prisma = new PrismaClient();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const SECRET = "claudio";
const PORT = 3001;
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(function (req: Request, res: Response, next: any) {
  res.header("Access-Control-Allow-Origin: *");
  res.header("Access-Control-Allow-Credentials: true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const base_de_dados: string[] = [];

app.listen(PORT, (req: Request, res: Response) => {
  console.log(`listening on Port${PORT}`);
});

////////////////////
////////////////////

app.get("/", (req: any, res: any, next: any) => {});

////////////////////
////////////////////

app.post("/create", async (req: any, res: any, next: any) => {
  console.log(req.body.name, req.body.email, req.body.pass);

  if ((await checkEmail(req.body.email)).length !== 0) {
    res.send(HTTPresponse(400, "email already exists"));
    return;
  }

  if ((await checkName(req.body.name)).length !== 0) {
    res.send(HTTPresponse(400, "name already exists"));
    return;
  }

  if (
    typeof req.body.name === null ||
    typeof req.body.email === null ||
    typeof req.body.email === null
  ) {
    res.send(HTTPresponse(400, "bad format"));
    return;
  }

  createUser(req.body.name, req.body.email, req.body.pass);

  res.send(HTTPresponse(200, "good"));
});


app.get("/all", (req: any, res: any) => {
  res.send(base_de_dados);
});


app.get("/verify",verifyJWT,(req:any,res:any,next: any)=>{
  console.log("bruh")
  res.status(200).send()
  
})
////////////////////
////////////////////

app.get("/login/:name/:pass/", (req: Request, res: Response) => {
  const users = prisma.user
    .findMany({
      where: {
        name: req.params.name,
        pass: req.params.pass,
      },
    })
    .then((obj) => {
      if (obj.length !== 0) {
        
        res.cookie("claudio", generateAccessToken(obj));
        res.send(HTTPresponse(200, "good"));
        return;
      }
      res.send(HTTPresponse(400, "bad"));
    });
});

////////////////////
////////////////////
////////////////////

function checkEmail(emailU: string) {
  const users = prisma.user
    .findMany({
      where: {
        email: emailU,
      },
    })
    .then((obj) => {
      return obj;
    });

  return users;
}

async function checkName(name: string) {
  const users = prisma.user
    .findMany({
      where: {
        name: name,
      },
    })
    .then((obj) => {
      return obj;
    });
  return users;
}

function HTTPresponse(status: number, result: string) {
  return {
    status: status,
    result: result,
  };
}
async function createUser(name: string, email: string, pass: string) {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      pass: pass,
    },
  });
}

function generateAccessToken(user: any) {
  return jwt.sign(JSON.stringify(user), SECRET);
}





function verifyJWT(req: Request, res: Response, next: any) {

  const token = req.cookies.claudio;

  jwt.verify(token, SECRET, async (err: any, decode: any) => {
    if (err) return res.status(401).send();

    try {
      const user: any = prisma.user
        .findMany({
          where: {
            id: decode[0].id,
            name: decode[0].name,
          },
        })
        .then((data) => {
        
          if (data.length === 0) {
         
            res.status(400).send();
            return;
          }
          next();
        });
    } catch (e) {
      console.log(e);
    }
  });
}
