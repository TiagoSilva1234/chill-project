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

////////////////////
////////////////////

app.get("/", (req: any, res: any) => {
  res.send({ message: "We did it!", claudio: "gyo" });
});




////////////////////
////////////////////


app.post("/create", async(req: any, res: any) => {
console.log(req.body.name,req.body.email,req.body.pass);

 if((await checkEmail(req.body.email)).length !== 0){
   res.send(HTTPresponse(400,"email already exists"))
   return;
 }

 if((await checkName(req.body.name)).length !== 0){
  res.send(HTTPresponse(400,"name already exists"))
  return;
}

if( typeof req.body.name === null
   || typeof req.body.email === null
    || typeof req.body.email === null){
  res.send(HTTPresponse(400,"bad format"))
  return;
}

createUser(req.body.name,req.body.email,req.body.pass)
res.send(HTTPresponse(200,"good"))
});


app.get("/all", (req: any, res: any) => {
  res.send(base_de_dados);
});



////////////////////
////////////////////

app.get("/login/:name/:pass/", (req: Request, res: Response) => {

  const users = prisma.user.findMany({
   where:{
       name: req.params.name,
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



 ////////////////////
 ////////////////////
 ////////////////////

 function checkEmail(emailU:string ){
  const users =  prisma.user.findMany({
    where:{
        email: emailU
  
   }}).then((obj)=>{
 return obj
 });
   
 return users;
}


async function checkName(name : string){
  const users = prisma.user.findMany({
    where:{
        name:name
   }
   }).then((obj)=>{     
  return obj
  });
  return users;
}

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
