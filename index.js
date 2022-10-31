// Write your solution in this file!
const employee = {
     name: "Shahla",
     streetAddress:"Erbil"
}

updateEmployeeWithKeyAndValue = (object, key, value) =>{
  return {...object, [key]:value
  }
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key]=value;
    return object;
}

function deleteFromEmployeeByKey(object, key){
 const newArray = {...object};
 delete newArray[key];
 return newArray;
}

function destructivelyDeleteFromEmployeeByKey (object, key){
  delete object[key];
  return object;
}

