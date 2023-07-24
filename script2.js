
function foo() {
    var fselect = document.getElementById("fselect").value;
    var ele = document.querySelector(".output p");
    switch (fselect) {
        case "add":
            function add() {
                return Number(document.getElementsByName('first_number')[0].value) + Number(document.getElementsByName("second_number")[0].value)
            } ele.innerHTML = "<p>" + add() + "</p>";
            break;
        case "sub":
            function sub() {
                return Number(document.getElementsByName('first_number')[0].value) - Number(document.getElementsByName("second_number")[0].value)
            } ele.innerHTML = "<p>" + sub() + "</p>";
            break;
        case "mul":
            function mul() {
                return Number(document.getElementsByName('first_number')[0].value) * Number(document.getElementsByName("second_number")[0].value)
            } ele.innerHTML = "<p>" + mul() + "</p>";
            break;
        case "div":
            function div() {
                return Number(document.getElementsByName('first_number')[0].value) / Number(document.getElementsByName("second_number")[0].value)
            } ele.innerHTML = "<p>" + div() + "</p>";
            break;

    }
}
