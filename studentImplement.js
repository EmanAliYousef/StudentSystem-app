const fs=require('fs')

////////////////////////////////////////////////
//add new student///////////////////////////////
const addStudent=(id,name,grade,comment)=>{
const data= loadStudentData();
const testDuplicatedId=data.filter((element)=>{
    return element.id===id
});
if(testDuplicatedId.length===0){
    data.push({
        id,
        name,
        grade,
        comment
       
    })
    
    
     saveStudent(data)
}
else{
    console.log('id is duplicated')
}
}
////////////////////////////////////////////////
///load student data from json file if exist////
const loadStudentData=()=>{
  try{

 const data= fs.readFileSync('students.json').toString();
  return JSON.parse(data)

  } 
  catch(e){
      return []

  }
}
////////////////////////////////////
///save data for student (write in json file )////////////////
const saveStudent=(students)=>{
  const savedata=JSON.stringify(students)
  fs.writeFileSync("students.json", savedata);
}
////////////////////////////////////////////
//delete////////////////////////////////////
const deleteStudent=(id)=>{
    const data= loadStudentData();
    const testDeleting=data.filter((element)=>{
     return element.id!==id
    })
    saveStudent(testDeleting)

}


////////////////////////////////
///read//////////////////////
const readStudent =(id)=>{
    const data= loadStudentData();
    const testReading =data.find((element)=>{
     return element.id === id

    })
    console.log(testReading)
   if(testReading){
        console.log(testReading)
        console.log(testReading.id)
        console.log(testReading.name)
        console.log(testReading.grade)
        console.log(testReading.comment)
        if(testReading.comment==undefined){
            console.log("there is no comments for this student")
        }
    }
    else{
        console.log("this student is not defined")
    }

}
////////////////////////////////////
//list/////////////////////////////
const listStudents=()=>{
    const data= loadStudentData();
    data.forEach(element => {
        console.log('Student Id :' +' '+ element.id)
        console.log('Student Name :' +' '+ element.name)
    })
   

}
module.exports={
    add:addStudent,
    del:deleteStudent,
    read:readStudent,
    list:listStudents
}