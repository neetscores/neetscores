const express=require('express'),
    cors=require('cors')
// const dboperations = require('./dboperations');
const bodyParser = require("body-parser");
const config = require("./dbconfig");
const sql = require("mssql/msnodesqlv8");

const API_PORT=process.env.PORT || 5000;
const app = express();



app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.json());

app.post("/neetaspZero", async (req, res) => {
  const rollno=req.body.rollno;
  let pool = await sql.connect(config);
  try{
    let MBBSAdmissionsProject = await pool.request().query(`select * from ZeroPercentData where NeetRollno='${rollno}'`);
  console.log(MBBSAdmissionsProject.recordsets); 
  res.send(MBBSAdmissionsProject.recordsets);
  }catch(e){
    console.log(e);
  }
});

app.post("/neetaspFive", async (req, res) => {
  const rollno=req.body.rollno;
  let pool = await sql.connect(config);
  try{
    let MBBSAdmissionsProject = await pool.request().query(`select * from FivePercentData where NeetRollno='${rollno}'`);
  console.log(MBBSAdmissionsProject.recordsets); 
  res.send(MBBSAdmissionsProject.recordsets);
  }catch(e){
    console.log(e);
  }
  
});
app.post("/neetaspTen", async (req, res) => {
  const rollno=req.body.rollno;
  let pool = await sql.connect(config);
  try{
    let MBBSAdmissionsProject = await pool.request().query(`select * from TenPercentData where NeetRollno='${rollno}'`);
  console.log(MBBSAdmissionsProject.recordsets); 
  res.send(MBBSAdmissionsProject.recordsets);
  }catch(e){
    console.log(e);
  }
  
});
app.post("/neetaspFifteen", async (req, res) => {
  const rollno=req.body.rollno;
  let pool = await sql.connect(config);
  try{
    let MBBSAdmissionsProject = await pool.request().query(`select * from FifteenPercentData where NeetRollno='${rollno}'`);
  console.log(MBBSAdmissionsProject.recordsets); 
  res.send(MBBSAdmissionsProject.recordsets);
  }catch(e){
    console.log(e);
  }
  
});




app.post("/neetlt", async (req, res) => {
  const {Score,Category, Minority,LocalArea,Gender,EWS,PH } = req.body;
  let pool = await sql.connect(config);
  const Scorem=Score-10;
  const ScoreM=Number(Score)+50;
  try{
    let MBBSAdmissionsProject = await pool.request().query(`select * from ZeroPercentData where  NeetScore Between ('${Scorem}') and ('${ScoreM}') and Category='${Category}' and Minority='${Minority}' and LocalArea='${LocalArea}' and Gender='${Gender}' and EWS='${EWS}' and PH='${PH}' ORDER BY NeetScore ASC`);
    console.log(MBBSAdmissionsProject.recordsets);
  res.send(MBBSAdmissionsProject.recordsets);
  }catch(e){
    console.log(e);
  }
  console.log(req.body);
  console.log(Scorem,ScoreM,Category, req.body.Minority,LocalArea,Gender,EWS,PH );
  
});





app.listen(API_PORT, ()=>{console.log(`listning on port ${API_PORT}`);})





