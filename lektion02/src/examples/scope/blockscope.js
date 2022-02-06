{
    let innerLet = 1
    const innerConst = 2
    console.log(innerConst + innerLet)
}
//console.log(innerConst + innerLet)


function outer() {
    inner()
    //{
        function inner() {
            console.log("inner")
        }
    //}
}

outer()