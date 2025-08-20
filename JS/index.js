// var a=12;
// console.log("hii="+a);
// var a=30;
// var a=12;
// console.log("a="+a);
// const a=5;

// a=30;
// console.log("a="+a)
// 
// function sum(a,b)
// {
// return a+b;
// }
// let val=sum(12,20);
// console.log("the sum is"+val);
// let a=5;
// let b="5";
// if(a==b)
// {
//     console.log("hi");

// }
// else
// {
//     console.log("hello");
// }
// 
// 
function selectLanguage(lang)
{
    let data;
    if(lang=="java")
    {
        function javaCompiler()
        {
        console.log("java compiler selected and code is being executed");
        }
        data=javaCompiler();
    }
    else if(lang=="c")
    {
        function cCompiler()
        {
            console.log("c compiler is bening executed");
        }
        data=cCompiler();
    }
    else{
        console.log("selected language is not found");
    }
}
selectLanguage("java");
