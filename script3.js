let allList = document.querySelector("select");
let  first = document.querySelector("input:first-of-type");
let second = document.querySelector("input:last-of-type");

allList.addEventListener("change",function()
{

    if(allList.value === "+")
    {
        // console.log(Number(first.value) + Number(second.value));
        document.querySelector("p").innerHTML = (Number(first.value) + Number(second.value));

    }
    if(allList.value === "-")
    {
        // console.log(Number(first.value) + Number(second.value));
        document.querySelector("p").innerHTML = (Number(first.value) - Number(second.value));

    }
    if(allList.value === "*")
    {
        // console.log(Number(first.value) + Number(second.value));
        document.querySelector("p").innerHTML = (Number(first.value) *  Number(second.value));

    }
    if(allList.value === "/")
    {
        // console.log(Number(first.value) + Number(second.value));
        document.querySelector("p").innerHTML = (Number(first.value) / Number(second.value));

    }
    if(allList.value === "%")
    {
        // console.log(Number(first.value) + Number(second.value));
        document.querySelector("p").innerHTML = (Number(first.value) % Number(second.value));

    }
})


