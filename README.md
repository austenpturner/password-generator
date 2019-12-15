# Random Password Generator

## The Assignment
For the third UW bootcamp homework assignment we were instructed to make a password generator using HTML, CSS and JavaScript that would generate a random password based on user preferences. The user options were to be password length and whether or not to include numbers, uppercase letter, lowercase letters and special characters. The program should print the password to the  browser when the user clicks a button and then allow the user to copy the password to their clipboard. 

## The Process
This assignment was challenging! I needed to be a lot of pseudo-coding before I began writing my actual JavaScript code. First I targeted my HTML elements and stored them in constants that I could use later. Next, I wrote functions that would generate:
1. a random number from 0 to 1
2. a random upper case letter from A to Z
3. a random lower case letter (a to z)
4. a random special character (from a defined string of characters)

I saw a pattern and noticed all four of these functions were using the same methods of Math.floor and Math.random to get a position in a string based on the string's length and return the character at that position. I removed the strings from the functions to use as global constants and wrote one function that could take in each of the strings as a parameter instead. 

Next I made a function that would check for user input. The function needed to test if the user option checkboxes evaluated as true (checked) or false (not checked). Then if the checkbox evaluated as true it would add that character option to the password. I used an empty array and added to the array each option's random character output from the first function if that option was checked. Last the function got a random index from the options array, and returned the random character at that index. 

After I could generate a random character from user-selected character options, I needed to use the user-selected length input to determine how many characters to add to the password. Then print the password to the page. I made a password generator function that started by setting the result to an empty string. Next, I added a loop that would add a random character to a password variable until it reached the final length value. Then the password was added to the result value and this value was printed to the result input box in the browser. 

I added an event listener to the "generate password" button, so a password would be generated and a result printed to the screen when the user clicked the button. Last, I added a button that would copy the password to the user's clipboard. 


