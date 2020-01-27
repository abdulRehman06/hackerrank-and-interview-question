
 

Object.prototype.deepClone = function (){

    // let newObj = {};
    let newObj =  (this instanceof Array ) ? [] : {};
    for (const i in this) {
        if( i == 'deepClone' ) continue ;
        if (   this[i] &&  typeof this[i] === "object") {
        //    console.log('i' , i )  
        newObj[i] =  this[i].deepClone()
        }
        else {
            newObj[i] = this[i]
        }
    }

    return  newObj 

}
// second approch 
 let deepCopy  = function (abc) {
    let newObj = (abc instanceof Array ) ? [] : {};
    for (let i in abc) {
        if (i == 'deepCopy') continue;
        if (abc[i] && typeof abc[i] === "object") {
            newObj[i] = deepCopy(abc[i])
        }
        else {
            newObj[i] = abc[i]
        }

    }
    return newObj;
}



const a = {
    "margherita":
    {
        "toppings": ["tomato sauce", "mozzarella cheese", "abdul"],
        "prices": []
    },
    "prosciutto": {
        "toppings": ["tomato sauce", "mozzarella cheese", "ham"],
        "prices":
        {
            "small": "6.50",
            "medium": "7.50",
            "large": "8.50"
        }
    }
}

console.log('hello-1' , JSON.stringify(a.deepClone()));

console.log('hello-3' , JSON.stringify(a));

