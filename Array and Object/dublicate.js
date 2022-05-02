function getUnique(arr){
   
    let dupArr = [];
    
    
    for(let i of arr) {
        if(dupArr.indexOf(i) === -1) {
          
            dupArr.push(i);
        }
    }
 
    console.log(dupArr);
}

const array = [1,2,3,1,2];

getUnique(array);
