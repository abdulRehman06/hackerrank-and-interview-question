
function bracketMatching(inStr) {
    // let str = "[[}]]a";
    if (Object.prototype.toString.call(str) !== "[object String]" || inStr.length == 0) {
        return `can not validate  <<${str}>>  value `
    }
    let oStack = new Array;
    for (let index = 0; index < inStr.length; index++) {
        if ("[({".includes(inStr[index])) {
            oStack.push(inStr[index])
        }
        else if (
            ('[' == oStack[oStack.length - 1] && inStr[index] == ']') ||
            ('{' == oStack[oStack.length - 1] && inStr[index] == '}') ||
            ('(' == oStack[oStack.length - 1] && inStr[index] == ')')
        ) {
            oStack.pop()
        }
        else if ("]})".includes(inStr[index])) {
            break;
        }
    }

    console.log('oStack :', oStack.length ? "Mismatch" : "Match")
    console.log('oStack :', oStack)

}
bracketMatching("[[}]]a")