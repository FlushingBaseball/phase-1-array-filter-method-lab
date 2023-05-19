// Code your solution here



// return driverNameArray.filter(string)



function findMatching(driverNameArray, string){
   let matches = driverNameArray.filter(driver => driver.toLowerCase() ===string.toLowerCase())
   return matches
}

function fuzzyMatch(driverNameArray, string){
    let fuzzys = driverNameArray.filter(driver => driver.startsWith(string));
    return fuzzys
}

function matchName(arrayOfDriverObj, string){
   let matchesObj = arrayOfDriverObj.filter(driver => driver.name === string)
   return matchesObj
}