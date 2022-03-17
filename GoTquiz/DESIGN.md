DESIGN DOCUMENTATION
--------------------------------------------------------------------------------------------
indexNew.html
-------------
In this file I created the main page of the website. To help with the layout of the page
I linked my css stylesheet to the page. To create a dynamic website, I used the <div> tag
to enclose a portion of the website that will be the place the questions and answers will
populate. I also am referencing jquery to help out with the change of the documents content.
I also chose to do this to make the site more dynamic.
-------------
At first I had multiple static pages. So when you began the test or clicked the next button
it would redirect you to the next page. This created a mess in the directory since there were
so many static pages. To address this problem I used the jquery library to manipulate the html
file.
-------------
I then created a single html file that will update within the <div> tags that my javaScript
code will help update.
--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------
main.js
-------------
My next task was to create a javaScript file that would handle the display of questions and
answers on the html page. I first needed a way to store the questions and the answers. To do
so I created two arrays. One holds the questions and the other holds the answers. Since there
are no right or wrong answers, I did not assign them values. Instead, when I populate the page
with answers the answers are really just radio buttons. I assigned values to each radio button.
The values were 10, 5 and 0 depending on the answer.
To take care of some of the details I created global variables that will be used in the functions.
I also created global variables that store the path of the images of each character.

After initializing the global variables, I then created the functions that would run the site.

In the functions, I took advantage of the jQuery library to populate the "mainArea" of the html
page. My first function contains a button that when clicked will display the first question. At
the end of most of these functions, I'm calling on another function called createHTML which displays
each question and corresponding answers in the HTML page. It will only display the first question
if the questionNumber, which is the indexed element in the array, is 0. If the element is not the 0th
indexed question, it will display the next question in the array when the next button is clicked.
Every time the button is clicked the function will increment the index in the array, prompting the
next line of questioning. When the 8th indexed question (9th question) is reached, it will run another
fucntion that is responsible for generating a page with another button that generates the result.
When the See Result button is pressed it will run a function called displayResult. displayResult is
responsible for checking the aggregated score of the user and checks it with number values that
correspond to different characters.

The displayResult function calls on the showImage function during the if...else check statements.
showImage is responsible for displaying the image of the character along with the text of who
that character is. These are passed in at the if...else statements after each condition is checked.

---------------------------------------------------------------------------------------------
Scoring System
-------------
To determine which Game of Thrones character you are, I created a point system that weighs
different values for each answer. The answers carry a weight of 0, 5 or 10 points. But first
I had to determine the weight of each characters traits. I came up with the following table:

Character || Intelligence || Leadership || Bravery || Loyalty || Honesty || Power || Honor || Tradition || Seriousness || Total
-------------------------------------------------------------------------------------------------------------------------------
Daenerys  ||     10       ||     10     ||  10     ||   10    ||   10    ||  10   ||  10   ||    00     ||    10       ||  80
Jon Snow  ||     10       ||     10     ||  10     ||   10    ||   10    ||  00   ||  10   ||    05     ||    10       ||  75
Sansa     ||     10       ||     05     ||  05     ||   10    ||   10    ||  00   ||  10   ||    10     ||    10       ||  70
Cersei    ||     10       ||     05     ||  10     ||   10    ||   05    ||  10   ||  00   ||    05     ||    10       ||  65
Arya      ||     10       ||     05     ||  10     ||   10    ||   05    ||  00   ||  10   ||    05     ||    05       ||  60
Sam Tarly ||     10       ||     00     ||  05     ||   10    ||   10    ||  00   ||  05   ||    05     ||    05       ||  50
Tyrion    ||     10       ||     05     ||  05     ||   10    ||   05    ||  00   ||  05   ||    05     ||    00       ||  45
Joffrey   ||     05       ||     00     ||  00     ||   00    ||   00    ||  10   ||  00   ||    00     ||    05       ||  20



At first, my idea was to compare each individual value to the corresponding value of the answer the user selected. This turned
out to be a difficult implementation because there were so many edge cases that didn't align with the users answer. And I wasn't
able to figure out a way to match the users answer to the character value that is closest to that selected answer. Instead, I
noticed the aggregated score for each character was different. I proceeded to total each characters points and created an if else
statement that compared the total points of the users score to each characters total score. If it found a match it would then display
a message indicating which character you are and show an image of that character.