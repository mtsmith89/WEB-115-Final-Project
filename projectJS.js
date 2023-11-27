    document.getElementById('myForm').addEventListener('submit', function(event){
        const email = document.getElementById('emailInput').value;
        if (email === "") {
          alert('Sorry, an email address is required!');
          event.preventDefault();
        }
        else{
        // Retrieve the input field value
          let inputField = document.querySelector('#emailInput');
          let input = inputField.value;
        // Regular expression pattern for alphanumeric input 
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // Check if the input value matches the pattern
          if (regex.test(input)){   
            var breakfast = [];
            $.each($("#breakfastInput option:selected"), function(){            
                breakfast.push($(this).val());
            });

            var snack = [];
            $.each($("#snackInput option:selected"), function(){            
                snack.push($(this).val());
            });

            var lunch = [];
            $.each($("#lunchInput option:selected"), function(){            
                lunch.push($(this).val());
            });

            var dinner = [];
            $.each($("#dinnerInput option:selected"), function(){            
                dinner.push($(this).val());
            });
                  
            var monday = [], tuesday = [], wednesday = [], thursday = [], friday = [], saturday = [], sunday = [];
            monday.push(breakfast[Math.floor(Math.random()*breakfast.length)],snack[Math.floor(Math.random()*snack.length)],lunch[Math.floor(Math.random()*lunch.length)],snack[Math.floor(Math.random()*snack.length)],dinner[Math.floor(Math.random()*dinner.length)])
            tuesday.push(breakfast[Math.floor(Math.random()*breakfast.length)],snack[Math.floor(Math.random()*snack.length)],lunch[Math.floor(Math.random()*lunch.length)],snack[Math.floor(Math.random()*snack.length)],dinner[Math.floor(Math.random()*dinner.length)])
            wednesday.push(breakfast[Math.floor(Math.random()*breakfast.length)],snack[Math.floor(Math.random()*snack.length)],lunch[Math.floor(Math.random()*lunch.length)],snack[Math.floor(Math.random()*snack.length)],dinner[Math.floor(Math.random()*dinner.length)])
            thursday.push(breakfast[Math.floor(Math.random()*breakfast.length)],snack[Math.floor(Math.random()*snack.length)],lunch[Math.floor(Math.random()*lunch.length)],snack[Math.floor(Math.random()*snack.length)],dinner[Math.floor(Math.random()*dinner.length)])
            friday.push(breakfast[Math.floor(Math.random()*breakfast.length)],snack[Math.floor(Math.random()*snack.length)],lunch[Math.floor(Math.random()*lunch.length)],snack[Math.floor(Math.random()*snack.length)],dinner[Math.floor(Math.random()*dinner.length)])
            saturday.push(breakfast[Math.floor(Math.random()*breakfast.length)],snack[Math.floor(Math.random()*snack.length)],lunch[Math.floor(Math.random()*lunch.length)],snack[Math.floor(Math.random()*snack.length)],dinner[Math.floor(Math.random()*dinner.length)])
            sunday.push(breakfast[Math.floor(Math.random()*breakfast.length)],snack[Math.floor(Math.random()*snack.length)],lunch[Math.floor(Math.random()*lunch.length)],snack[Math.floor(Math.random()*snack.length)],dinner[Math.floor(Math.random()*dinner.length)])
            console.log(saturday);
            myPlan(monday,tuesday,wednesday,thursday,friday,saturday,sunday);                
          } else {
          // Invalid input: display error message
            alert('Email address entered is invalid, please enter a valid email address');
            event.preventDefault();
          }
        }
      }
        );



        function myPlan(monday,tuesday,wednesday,thursday,friday,saturday,sunday)
        {
            userName = document.getElementById("nameInput").value;
            goal = document.getElementById("goalInput").value;
            myText = ("<html>\n<head>\n<title>Meal Plan</title>\n<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>\n</head>\n<body>\n");
            myText += ("<div class='jumbotron'><div class='container'><h1 class='display-4'>Hello " + userName + ", here is your custom meal plan!</h1><p class='lead'>Your goal is: " + goal + "</p></div></div>");
            myText += ("<table class='table table-striped table-hover'><thead class='thead-dark'><tr><th scope='col'></th><th scope='col'>Monday</th><th scope='col'>Tuesday</th><th scope='col'>Wednesday</th><th scope='col'>Thursday</th><th scope='col'>Friday</th><th scope='col'>Saturday</th><th scope='col'>Sunday</th></tr></thead>")
            myText += ("<tbody><tr><th scope='row'>Breakfast</th><td>" + monday[0] + "</td><td>" + tuesday[0] + "</td><td>" + wednesday[0] + "</td><td>" + thursday[0] + "</td><td>" + friday[0] + "</td><td>" + saturday[0] + "</td><td>" + sunday[0] + "</td>")
            myText += ("<tr><th scope='row'>Snack</th><td>" + monday[1] + "</td><td>" + tuesday[1] + "</td><td>" + wednesday[1] + "</td><td>" + thursday[1] + "</td><td>" + friday[1] + "</td><td>" + saturday[1] + "</td><td>" + sunday[1] + "</td>")
            myText += ("<tr><th scope='row'>Lunch</th><td>" + monday[2] + "</td><td>" + tuesday[2] + "</td><td>" + wednesday[2] + "</td><td>" + thursday[2] + "</td><td>" + friday[2] + "</td><td>" + saturday[2] + "</td><td>" + sunday[2] + "</td>")
            myText += ("<tr><th scope='row'>Snack</th><td>" + monday[3] + "</td><td>" + tuesday[3] + "</td><td>" + wednesday[3] + "</td><td>" + thursday[3] + "</td><td>" + friday[3] + "</td><td>" + saturday[3] + "</td><td>" + sunday[3] + "</td>")
            myText += ("<tr><th scope='row'>Dinner</th><td>" + monday[4] + "</td><td>" + tuesday[4] + "</td><td>" + wednesday[4] + "</td><td>" + thursday[4] + "</td><td>" + friday[4] + "</td><td>" + saturday[4] + "</td><td>" + sunday[4] + "</td></tbody></table>")
            myText += ("<div class='container'><button type='button' class='btn btn-outline-danger btn-block' onclick='javascript:window.close()'>Start Over</button><button type='button' class='btn btn-outline-primary btn-block'>Download Planner</button><button type='button' class='btn btn-outline-info btn-block'>Print Planner</button></div>")
            myText += ("</body>\n</html>");
        
            flyWindow = window.open('about:blank','myPop','width=1400,height=700,left=200,top=200');
            flyWindow.document.write(myText);
        }