function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
      function validateForm() {
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var errorMessage = '';
  
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          //^[^\s@]+: The ^ asserts the start of the string. [^\s@]+ means one or more characters that are not whitespace (\s) or the at symbol @.
  
  //@: Matches the at symbol.
  
  //[^\s@]+: Similar to the first part, matches one or more characters that are not whitespace (\s) or the at symbol @.
  
  //\.: Matches a literal dot (.). The backslash \ is used to escape the dot because in regex, a plain dot represents any character.
  
  //[^\s@]+$: Similar to the first part, matches one or more characters that are not whitespace (\s) or the at symbol @, until the end of the string ($ asserts the end of the string).
          if (!emailRegex.test(email)) {
              errorMessage += 'Invalid email address. ';
          }
  
          var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  //(?=.*[a-z]): At least one lowercase letter.
  //(?=.*[A-Z]): At least one uppercase letter.
  //(?=.*\d): At least one digit.
  //(?=.*[@$!%*?&]): At least one special character among @$!%*?&.
  //[A-Za-z\d@$!%*?&]{6,}: Match a combination of uppercase and lowercase letters, digits, and specified special characters with a minimum length of 6 characters.
          if (!passwordRegex.test(password)) {
              errorMessage += 'Invalid password. ';
          }
  
          if (errorMessage === '') {
              // Form is valid, you can submit it or perform further actions
              alert('Form is valid!');
          } else {
              document.getElementById('error-message').innerText = errorMessage;
          }
      }