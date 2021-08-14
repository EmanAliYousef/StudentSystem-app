
const yargs=require('yargs');
const studentImplement = require('./studentImplement');

///////////////////////////////////////////
/////////add new student//////////////////
yargs.command(
    {
        command:"add",
        describe:"adding new Student",
        builder:{
            
            studentId:{
                describe:"StudentId",
                demandOption:true,
                type:"number"
            

            }
            ,
            studentName:{
                describe:"this is the student Name",
                demandOption:true,
                type:"string"
            }
            ,
            Grade:{
                describe:"student degree",
                demandOption:true,
                type:"number"
            }
            ,
           Comment: {
               describe:"adding comments .......",
               type:"string"
           }
        }
        ,
        handler:(argv)=>{
            // console.log("this is student data")
            studentImplement.add(argv.studentId,argv.studentName,argv.Grade,argv.Comment)
        }
        ,

});
///////////////////////////////////
/////////delete student/////////////
yargs.command(
    {
        command:"delete",
        describe:"deleting Student",
        builder:{
            
            studentId:{
                describe:"StudentId",
                demandOption:true,
                type:"number"
            

            }
        }
        ,
        handler:(argv)=>{
            // console.log("this is student data")
            studentImplement.del(argv.studentId)
        }
        ,

});
///////////////////////
/////read Student////////////
yargs.command(
    {
        command:"read",
        describe:"reading Student",
        builder:{
            
            studentId:{
                describe:"StudentId",
                demandOption:true,
                type:"number"
            

            }
        }
        ,
        handler:(argv)=>{
            // console.log("this is student data")
            studentImplement.read(argv.studentId)
        }
        ,

});


////////////////////
//list Students////////////
yargs.command(
    {
        command:"list",
        describe:"list Students",
        handler:(argv)=>{
            // console.log("this is student data")
            studentImplement.list()
        }
        ,

});

console.log(yargs.argv);
// yargs.parse()

