let result = 0;
let days = Number(prompt("Enter No of Days"));
if(!(days===String )){
  switch (days % 7) {
    case 0:
      result = "Saturday";
      break;

    case 1:
      result = "Sunday";
      break;

    case 2:
      result = "Monday";
      break;
    
    case 3:
      result = "Tuesday";
      break;

    case 4:
      result = "Wednesday";
      break;

    case 5:
      result = "Thursday";
      break;

    case 6:
      result = "Friday";
      break;
  }

  document.getElementById("show").innerHTML = 
  `
  <h1>On ${days} Day It is ${result} </h1>
  <h4> Note : - This Code automatically 
  Generate from Calender of June 2025</h4>
  <p>On the basis of above code you can Find
  what day will be on nth day </p>
  `;

} else {

    document.getElementById("show").innerHTML = 
    `<h2> only Number Input is Accepted</h2>`;
};
