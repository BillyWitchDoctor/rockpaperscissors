# rockpaperscissors
My "Rock Paper Scissors" Assignment from TOP

Assignment Goal: create a "Rock Paper Scissors" game using javascript, intended to run solely in the browser's console (no GUI just yet - that will come in later excercise and will update or create new repository for that excercise when necessary)

Since I forget things very easily, I'm going to try to keep track of my process for this exercise here and do my best to maintain a log of all my git commits and code updates as I go. Wish me luck!

9/10/22 - Created new repository on GitHub for rockpaperscissors; 

copied the SSH code from GitHub and used 'git clone' command in linux terminal to create a local clone of the repository (note - I originally created a new directory called 'rockpaperscissors' on my local machine, which caused an error when trying to clone the GitHub repository with an identical name into the same location - realized the issue and deleted the locally-created directory, and was then able to successfully git clone the GitHub repository using the SSH code)

created index.html and javascript.js files inside the rockpaperscissors directory

setup the index.html skeleton, and in accordance with TOP instructions, included <script src="javascript.js"> </script> in the html body so that I can get used to the practice of linking an external javascript file to the html document, instead of writing all the javascript code in the html body script section

wrote a short console.log() script in the javascript.js file and then used firefox index.html command in terminal to open the html document to verify that the javascript code was properly linked into my html document (it was!)

used git add, git commit, and git push commands to add the html, js, and README files to the GitHub repository; confirmed that all were properly updated on GitHub to the main branch of this repository

wrote most of the javascript code for the project - finished the playRound function and confirmed that the code returns the correct string indicating loss, win, or tie depending on the playerSelection and computerSelection variables that were defined/obtained in the code;

10/4/22 - finally opened up TOP again to finish this exercise; created the game(x); function that allows for x number of rounds to be played between the user and the computer; game() keeps track of the score and returns a statement notifying the user of the final score and whether or not they beat the computer, lost to the computer, or tied the computer. everything worked well when I tested it!