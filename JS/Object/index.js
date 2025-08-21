const employee={
    ename:"Rahul Kumar",
    eage:"30",
    eaddress:"Ghaziabad",
    planguage:[
        
        {
        lang1:"java",
        lang2:"python"
        },
        {
        database1:"Oracle",
        database2:"SQL"
        },
        {
        framework1:"java",
        framework2:"python"
        }
    ]
}
employee.company="Infosys";
console.log(employee.planguage[0].lang2);
console.log("employee");

