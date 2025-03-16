const coding = ["js", "ts", "py", "java", "cpp", "csharp"];

coding.forEach(  function (jo_man_ho_boldo) {
    console.log(jo_man_ho_boldo);
})

coding.forEach( (jo_man_ho) => {
    console.log(jo_man_ho);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe); // this is also a valid way to use the function as a callback

coding.forEach( (item, index, arr) => {
    console.log( item, index, arr );
} )


//use of ctrl + d is to select all duplicates in the text of the code editor
// alt + shift + down arrow to duplicate the line of code


const myCoding = [
    {
        langName : " js ",
        name : "javascript"
    },
    {
        langName : " ts ",
        name : "typescript"
    },
    {
        langName : " py ",
        name : "python"
    }
]

myCoding.forEach((item) => {
    console.log(item.name);
});