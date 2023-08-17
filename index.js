const message= prompt("enter your fav froyo flavors. as many times as you like: ", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
let flavors = ["vanilla","vanilla","vanilla","strawberry","coffee","coffee"]

function getArrayCount(flavors){
    const emptyObject={};
    for(let i=0; i<flavors.length;i++){
        if(emptyObject[flavors[i]]){
            emptyObject[flavors[i]]++;
        }else{
            emptyObject[flavors[i]] = 1; // if the flavor isn't in the object, add it with a count of 1
        }
    }
    for(let flavor in emptyObject) {
        console.log(flavor + ": " + emptyObject[flavor]);
    }
}
getArrayCount(flavors);




// so I want the name of what they ordered and a number next to it 