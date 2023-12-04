document.getElementById('myForm').addEventListener('submit', function (event) {
  const email = document.getElementById('emailInput').value;
  if (email === "") {
    alert('Sorry, an email address is required!');
    event.preventDefault();
  }
  else {
    let inputField = document.querySelector('#emailInput');
    let input = inputField.value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(input)) {
      var breakfast = [];
      $.each($("#breakfastInput option:selected"), function () {
        breakfast.push($(this).val());
      });

      var snack = [];
      $.each($("#snackInput option:selected"), function () {
        snack.push($(this).val());
      });

      var lunch = [];
      $.each($("#lunchInput option:selected"), function () {
        lunch.push($(this).val());
      });

      var dinner = [];
      $.each($("#dinnerInput option:selected"), function () {
        dinner.push($(this).val());
      });

      var monday = [], tuesday = [], wednesday = [], thursday = [], friday = [], saturday = [], sunday = [];
      monday.push(breakfast[Math.floor(Math.random() * breakfast.length)], snack[Math.floor(Math.random() * snack.length)], lunch[Math.floor(Math.random() * lunch.length)], snack[Math.floor(Math.random() * snack.length)], dinner[Math.floor(Math.random() * dinner.length)])
      tuesday.push(breakfast[Math.floor(Math.random() * breakfast.length)], snack[Math.floor(Math.random() * snack.length)], lunch[Math.floor(Math.random() * lunch.length)], snack[Math.floor(Math.random() * snack.length)], dinner[Math.floor(Math.random() * dinner.length)])
      wednesday.push(breakfast[Math.floor(Math.random() * breakfast.length)], snack[Math.floor(Math.random() * snack.length)], lunch[Math.floor(Math.random() * lunch.length)], snack[Math.floor(Math.random() * snack.length)], dinner[Math.floor(Math.random() * dinner.length)])
      thursday.push(breakfast[Math.floor(Math.random() * breakfast.length)], snack[Math.floor(Math.random() * snack.length)], lunch[Math.floor(Math.random() * lunch.length)], snack[Math.floor(Math.random() * snack.length)], dinner[Math.floor(Math.random() * dinner.length)])
      friday.push(breakfast[Math.floor(Math.random() * breakfast.length)], snack[Math.floor(Math.random() * snack.length)], lunch[Math.floor(Math.random() * lunch.length)], snack[Math.floor(Math.random() * snack.length)], dinner[Math.floor(Math.random() * dinner.length)])
      saturday.push(breakfast[Math.floor(Math.random() * breakfast.length)], snack[Math.floor(Math.random() * snack.length)], lunch[Math.floor(Math.random() * lunch.length)], snack[Math.floor(Math.random() * snack.length)], dinner[Math.floor(Math.random() * dinner.length)])
      sunday.push(breakfast[Math.floor(Math.random() * breakfast.length)], snack[Math.floor(Math.random() * snack.length)], lunch[Math.floor(Math.random() * lunch.length)], snack[Math.floor(Math.random() * snack.length)], dinner[Math.floor(Math.random() * dinner.length)])
      console.log(saturday);
      myPlan(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    } else {
      alert('Email address entered is invalid, please enter a valid email address');
      event.preventDefault();
    }
  }
}
);

function clearTable() {
  var table = document.querySelector('table');
  var tds = table.querySelectorAll('td');
  for (var i = 0; i < tds.length; i++) {
    tds[i].innerHTML = '';
  }
};

function csv() {
  var csv_data = [];
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    var cols = rows[i].querySelectorAll('td,th');
    var csvrow = [];
    for (var j = 0; j < cols.length; j++) {
      csvrow.push(cols[j].innerHTML);
    }
    csv_data.push(csvrow.join(','));
  }
  csv_data = csv_data.join('\n');
  downloadCSVFile(csv_data);
}

function downloadCSVFile(csv_data) {
  CSVFile = new Blob([csv_data], { type: 'text/csv' });
  var temp_link = document.createElement('a');
  temp_link.download = 'meal_plan.csv';
  var url = window.URL.createObjectURL(CSVFile);
  temp_link.href = url;
  temp_link.style.display = 'none';
  document.body.appendChild(temp_link);
  temp_link.click();
  document.body.removeChild(temp_link);
}

function myPlan(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  userName = document.getElementById("nameInput").value;
  goal = document.getElementById("goalInput").value;
  myText = ("<html>\n<head>\n<title>Meal Plan</title>\n<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>\n</head>\n<body>\n");
  myText += ("<div class='jumbotron'><div class='container'><h1 class='display-4'>Hello " + userName + ", here is your custom meal plan!</h1><p class='lead'>Your goal is: " + goal + "</p></div></div>");
  myText += ("<table id='userTable' class='table table-striped table-hover'><thead class='thead-dark'><tr><th scope='col'></th><th scope='col'>Monday</th><th scope='col'>Tuesday</th><th scope='col'>Wednesday</th><th scope='col'>Thursday</th><th scope='col'>Friday</th><th scope='col'>Saturday</th><th scope='col'>Sunday</th></tr></thead>")
  myText += ("<tbody><tr><th scope='row'>Breakfast</th><td>" + monday[0] + "</td><td>" + tuesday[0] + "</td><td>" + wednesday[0] + "</td><td>" + thursday[0] + "</td><td>" + friday[0] + "</td><td>" + saturday[0] + "</td><td>" + sunday[0] + "</td>")
  myText += ("<tr><th scope='row'>Snack</th><td>" + monday[1] + "</td><td>" + tuesday[1] + "</td><td>" + wednesday[1] + "</td><td>" + thursday[1] + "</td><td>" + friday[1] + "</td><td>" + saturday[1] + "</td><td>" + sunday[1] + "</td>")
  myText += ("<tr><th scope='row'>Lunch</th><td>" + monday[2] + "</td><td>" + tuesday[2] + "</td><td>" + wednesday[2] + "</td><td>" + thursday[2] + "</td><td>" + friday[2] + "</td><td>" + saturday[2] + "</td><td>" + sunday[2] + "</td>")
  myText += ("<tr><th scope='row'>Snack</th><td>" + monday[3] + "</td><td>" + tuesday[3] + "</td><td>" + wednesday[3] + "</td><td>" + thursday[3] + "</td><td>" + friday[3] + "</td><td>" + saturday[3] + "</td><td>" + sunday[3] + "</td>")
  myText += ("<tr><th scope='row'>Dinner</th><td>" + monday[4] + "</td><td>" + tuesday[4] + "</td><td>" + wednesday[4] + "</td><td>" + thursday[4] + "</td><td>" + friday[4] + "</td><td>" + saturday[4] + "</td><td>" + sunday[4] + "</td></tbody></table>")
  myText += ("<div class='container'><button type='button' class='btn btn-outline-danger btn-block' onclick = 'clearTable()'>Clear Table</button><button type='button' class='btn btn-outline-primary btn-block' onclick='csv()'>Download Planner</button><button type='button' class='btn btn-outline-info btn-block' onclick='window.print()'>Print Planner</button></div>")
  myText += ("<script src='projectJS.js'></script>\n</body>\n</html>");

  flyWindow = window.open('about:blank', 'mealPlan', 'width=1010,height=710,left=100,top=100');
  flyWindow.document.write(myText);
}


$('#table tr:not(:first)').remove();