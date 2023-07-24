let allOption = document.querySelector("select");
let first = document.querySelector("#one");
let second = document.querySelector("#two");
let p = document.querySelector("p");
allOption.addEventListener("change",function()
{
    if(allOption.value === "+")
    {
        p.innerHTML = Number(first.value) + Number(second.value);
    }
})