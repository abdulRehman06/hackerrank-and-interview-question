

// logMessage(great(() => great(() => 'hi'))) // solve this question .....?


function logMessage(message ){
console.log('messsage' , message)
}

// logMessage('hi')

function great(callBack){
    // console.log('great ' , callBack())
    return callBack();
    
}
logMessage(great(() => great(() => 'hi'))) // solved this question