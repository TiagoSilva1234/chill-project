const express2 = require("express"),
  app = express2();
const cors = require("cors");
import { PrismaClient } from "@prisma/client";
import express,{Request,Response} from "express";
const prisma = new PrismaClient();




const PORT = 3001;
app.use(cors());
app.use(express.json());

const base_de_dados: string[] = [];

app.listen(PORT, () => {
  console.log(`listening on Port${PORT}`);
});

app.get("/", (req: any, res: any) => {
  res.send({ message: "We did it!", claudio: "gyo" });
});

app.post("/create", (req: any, res: any) => {
  console.log(req.body);
  if (req.body !== undefined) {
    createUser(req.body.name, req.body.email, req.body.pass);
    res.send(HTTPresponse(200, "good"));
    return;
  }
  res.send(HTTPresponse(400, "bad"));
});


app.get("/all", (req: any, res: any) => {
  res.send(base_de_dados);
});

app.get("/login/:name/:pass/", (req: Request, res: Response) => {

  console.log(req.params.name + req.params.pass);
  const users = prisma.user.findMany({
   where:{
       email: req.params.email,
       pass : req.params.pass
  }
  }).then((obj)=>{
    if(obj.length !== 0){
      res.send(HTTPresponse(200, "good"))
     
      return;
    }
    res.send(HTTPresponse(400, "bad"))
  });


});







function HTTPresponse(status: number, result: string) {
  return {
    status: status,
    result: result,
  };
}
async function createUser(name :string , email: string, pass:string){
 await prisma.user.create({
    data: {
        name: name,
         email: email,
         pass: pass
        },
  });
  
}
