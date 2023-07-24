
function abs() {
    let first = document.querySelector("#one").value;
    let second = document.querySelector("#two").value;

    let calculter = document.querySelector("#cum").value;
    if (calculter == "+") {
      let calculate_value = Number(first) + Number(second);
      document.querySelector("p").innerHTML = calculate_value;
    }
    if (calculter == "-") {
      let calculate_value = Number(first) - Number(second);
      document.querySelector("#para").innerHTML = calculate_value;
    }
    if (calculter == "*") {
      let calculate_value = Number(first) * Number(second);
      document.querySelector("p").innerHTML = calculate_value;
    }
    if (calculter == "%") {
      let calculate_value = Number(first) % Number(second);
      document.querySelector("p").innerHTML = calculate_value;
    }
  }

  // first.addEventListener('click',myfun)
  //   let event = document.querySelectorAll("select");
  //   event.addEventListner("click",myfun);

  //   function myfun() {
  //     let event = document.querySelectorAll("select");
  //   event.addEventListner("click",myfun).  =value