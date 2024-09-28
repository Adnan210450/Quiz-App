
function handleLogin() {


  let loginEmail = document.getElementById("email").value;
  let loginPassword = document.getElementById("password").value;

  let signupEmail = document.getElementById("email").value;
  let signupPassword = document.getElementById("password").value;

  let userName = document.getElementById("username");

  let users = JSON.parse(localStorage.getItem('user'));

  if (loginEmail == "" || loginPassword == "") {
    alert("all field is requid!");
    return;
  }

  let adminEmail="admin@gmail.com"
  let adminPassword="admin123"

  if(loginEmail==adminEmail && loginPassword==adminPassword)
  {
    window.location.href="adminUsers.html"
  }
  let isValid = false;
  let currentUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == signupEmail && users[i].password == signupPassword) {
      isValid = true;
      currentUser = users[i];
      break;
    }

  }

  if (isValid) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));//why not store current user in local storage
    window.location.href = "quizstart.html";

  }
  else {
    alert("invalid data!");
    return;
  }
}

window.onload = function () {

  let userName = document.getElementById("username");
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    userName.innerText = currentUser.name;

  }
  else {
    console.log("No current user found in localStorage.");
  }
}


//    --LOGIN END--

//    --SIGN-UP START--
function handleSignup() {

  let signupName = document.getElementById("name").value;
  let signupEmail = document.getElementById("email").value;
  let signupPassword = document.getElementById("password").value;
  if (signupEmail == "" || signupPassword == "") {
    alert("all field is requid!");
    return;
  }

  let isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isEmail.test(signupEmail)) {
    alert("invalid Email!")
    return false;
  }

  if (signupPassword.length < 6) {
    alert("password length should be 6 character!");
    return;
  }



  let users = JSON.parse(localStorage.getItem('user')) || [];
  if (isUserExits(users, signupEmail)) {
    alert("user already exits!");
    return;
  }
  let count = 0

  let userCredential = {
    name: signupName,
    email: signupEmail,
    password: signupPassword,
    numberOfTest: count,
    latestMarks: marks

  }

  users.push(userCredential);
  localStorage.setItem("user", JSON.stringify(users));

  window.location.href = "login.html";
}

// --SIGN-UP END


function isUserExits(users, email) {

let userExist = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      userExist = true;
      break;
    }
  }

  return userExist;
}

//  --PASSWORD SHOW START--
function passwordToggle() {

  var password = document.getElementById("password");
  let passwordshow = document.getElementById("passwordshowSign");
  if (password.type === "password") {
    password.type = "text";
    passwordshow.src = "./assets/img/password.png"

  }
  else {
    password.type = "password";
    passwordshow.src = "./assets/img/passwordhide.png"
  }


}

function passwordToggleLogin() {

  var password = document.getElementById("password");
  let passwordshow = document.getElementById("passwordShow");
  if (password.type === "password") {
    password.type = "text";
    passwordshow.src = "./assets/img/password.png"

  }
  else {
    password.type = "password";
    passwordshow.src = "./assets/img/passwordhide.png"
  }


}

// PASSWORD TOGGLE(SHOW) END

function startQuiz() {
  alert("Do you want to start quiz??")
  window.location = "question.html";
  console.log("Do you want to start quiz??");
}

let currentQuestionIndex = 0;

let questionArray = [
  {
    question: " WHAT IS THE FULL-FORM OF DOM?",
    options: ["DOCUMENT OBJECT MODULE", "DOCUMENT OBJECT METHOD", "DOCUMENT OBSERVE MODULE  ", "DOCUMENT OBSERVE METHOD"],
    correctAnswer: "DOCUMENT OBJECT MODULE",
    choosedAnswer: ""


  },
  {
    question: " SYMBOLE OF ARRAY?",
    options: ["{[]}", "{}", "[]", "()"],
    correctAnswer: "[]",
    choosedAnswer: ""


  },
  {
    question: " WHAT IS  ARRAY IN JAVASCRIPT??",
    options: ["ARRAY IS A STORE SIMILLER DATA IN SEQUENCE", "ARRAY IS STORE DATA IN KEY VALUE PAIRS", "ARRAY IS A STORE NOT SIMILLER DATA IN SEQUENCE", "ARRAY IS A STORE DATA ONLY STRING"],
    correctAnswer: "ARRAY IS A STORE SIMILLER DATA IN SEQUENCE",
    choosedAnswer: ""


  },
  {
    question: " WHY USE PUSH METHOD IN ARRAY??",
    options: ["FOR REMOVE DATA", "FOR UPDATE DATA ", "FOR INSERT DATA ", "FOR DELETE DATA"],
    correctAnswer: "FOR INSERT DATA",
    choosedAnswer: ""


  },
  {
    question: " WHY USE JAVA-SCRIPT IN WEB DEVELOPMENT?",
    options: ["BEAUTIFY-WEBSITE", "CRATING STRUCTURE OF WEBSITE", "PERFORM FUNCTIONALITY IN WEBSITE", "REDUCTION CSS CODE"],
    correctAnswer: "PERFORM FUNCTIONALITY IN WEBSITE",
    choosedAnswer: ""


  },
  {
    question: " WHY USE MEDIA-QUERY IN WEB DEVELOPMENT",
    options: ["FOR RESPONSIVE ", "FOR FUNCTIONALITY", "FOR BEAUTIFY", "FOR REDUCTION CODE"],
    correctAnswer: "FOR RESPONSIVE",
    choosedAnswer: ""


  },
  {
    question: " WHY USE POP METOHD IN ARRAY?",
    options: ["FOR REMOVE DATA IN ARRAY ", "FOR UPDATE DATA IN ARRAY  ", "FOR INSERT DATA ", "FOR DELETE DATA IN ARRAY LAST INDEX"],
    correctAnswer: "FOR DELETE DATA IN ARRAY LAST INDEX",
    choosedAnswer: ""


  },
  {
    question: " CSS FULL FORM IN WEB DEVELOPMENT?",
    options: ["CASCADING-STYLE-SHEETS", "CENTRAL SUPERIOR SERVICE EXAM", "CENTRAL SUPERVISOR SERVICE", "CENTRAL SUPERIOR SERVICE "],
    correctAnswer: "CASCADING-STYLE-SHEETS",
    choosedAnswer: ""


  },
  {
    question: "   WHICH  TYPE DOES NOT SUPPORT IN <INPUT> ELEMENT?",
    options: ["CHECKBOX", "TEXT", "MULTITEXT", "EMAIL"],
    correctAnswer: "MULTITEXT",
    choosedAnswer: ""
  },

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language",
    choosedAnswer: ""
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: [
      "<title>",
      "<head>",
      "<meta>",
      "<body>"
    ],
    correctAnswer: "<title>",
    choosedAnswer: ""
  },
  {
    question: "What is the largest heading tag in HTML?",
    options: [
      "<h1>",
      "<h2>",
      "<h3>",
      "<h4>"
    ],
    correctAnswer: "<h1>",
    choosedAnswer: ""
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<a>",
      "<link>",
      "<href>",
      "<hyperlink>"
    ],
    correctAnswer: "<a>",
    choosedAnswer: ""
  },
  {
    question: "Which HTML attribute is used to provide a unique identifier for an element?",
    options: [
      "id",
      "class",
      "name",
      "key"
    ],
    correctAnswer: "id",
    choosedAnswer: ""
  },
  {
    question: "Which CSS property is used to change the background color of an element?",
    options: [
      "color",
      "background-color",
      "bgcolor",
      "background"
    ],
    correctAnswer: "background-color",
    choosedAnswer: ""
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "text-size",
      "font-size",
      "size",
      "font-style"
    ],
    correctAnswer: "font-size",
    choosedAnswer: ""
  },
  {
    question: "How do you create a comment in HTML?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "' This is a comment"
    ],
    correctAnswer: "<!-- This is a comment -->",
    choosedAnswer: ""
  },
  {
    question: "Which CSS property is used to add space between the content and the border of an element?",
    options: [
      "margin",
      "padding",
      "border-spacing",
      "spacing"
    ],
    correctAnswer: "padding",
    choosedAnswer: ""
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      "<br>",
      "<break>",
      "<lb>",
      "<newline>"
    ],
    correctAnswer: "<br>",
    choosedAnswer: ""
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<list>"
    ],
    correctAnswer: "<ul>",
    choosedAnswer: ""
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: [
      "alt",
      "src",
      "title",
      "longdesc"
    ],
    correctAnswer: "alt",
    choosedAnswer: ""
  },
  {
    question: "Which CSS property is used to make the text bold?",
    options: [
      "font-weight",
      "font-style",
      "text-weight",
      "text-bold"
    ],
    correctAnswer: "font-weight",
    choosedAnswer: ""
  },
  {
    question: "Which of the following is the correct way to link an external JavaScript file?",
    options: [
      "<script src='script.js'></script>",
      "<link src='script.js'>",
      "<js src='script.js'>",
      "<script href='script.js'></script>"
    ],
    correctAnswer: "<script src='script.js'></script>",
    choosedAnswer: ""
  },
  {
    question: "Which HTML tag is used to display a table?",
    options: [
      "<table>",
      "<tbl>",
      "<tr>",
      "<td>"
    ],
    correctAnswer: "<table>",
    choosedAnswer: ""
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: [
      "<footer>",
      "<foot>",
      "<section>",
      "<bottom>"
    ],
    correctAnswer: "<footer>",
    choosedAnswer: ""
  },
  {
    question: "Which CSS property is used to align text to the center?",
    options: [
      "text-align: center",
      "align: center",
      "text-align: middle",
      "align: middle"
    ],
    correctAnswer: "text-align: center",
    choosedAnswer: ""
  },
  {
    question: "What is the correct syntax for creating an array in JavaScript?",
    options: [
      "let arr = [1, 2, 3];",
      "let arr = {1, 2, 3};",
      "let arr = (1, 2, 3);",
      "let arr = 1, 2, 3;"
    ],
    correctAnswer: "let arr = [1, 2, 3];",
    choosedAnswer: ""
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: [
      "style",
      "class",
      "font",
      "styles"
    ],
    correctAnswer: "style",
    choosedAnswer: ""
  },
  {
    question: "How do you add a comment in a CSS file?",
    options: [
      "/* this is a comment */",
      "// this is a comment",
      "' this is a comment",
      "-- this is a comment"
    ],
    correctAnswer: "/* this is a comment */",
    choosedAnswer: ""
  },
  {
    question: "Which HTML element is used to define important text?",
    options: [
      "<strong>",
      "<important>",
      "<b>",
      "<em>"
    ],
    correctAnswer: "<strong>",
    choosedAnswer: ""
  },
  {
    question: "Which of the following is a block-level element in HTML?",
    options: [
      "<div>",
      "<span>",
      "<img>",
      "<a>"
    ],
    correctAnswer: "<div>",
    choosedAnswer: ""
  },
  {
    question: "Which CSS property is used to change the font of an element?",
    options: [
      "font-family",
      "font-style",
      "font-size",
      "font-weight"
    ],
    correctAnswer: "font-family",
    choosedAnswer: ""
  },
  {
    question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
    options: [
      "Math.round(7.25)",
      "Math.rnd(7.25)",
      "round(7.25)",
      "rnd(7.25)"
    ],
    correctAnswer: "Math.round(7.25)",
    choosedAnswer: ""
  },
  {
    question: "Which of the following is the correct way to add a background image in CSS?",
    options: [
      "background-image: url('image.jpg');",
      "background: image('image.jpg');",
      "image: background('image.jpg');",
      "image-background: url('image.jpg');"
    ],
    correctAnswer: "background-image: url('image.jpg');",
    choosedAnswer: ""
  },
  {
    question: "Which of the following is correct about JavaScript?",
    options: [
      "JavaScript is an interpreted language.",
      "JavaScript is compiled into bytecode.",
      "JavaScript can only be used for web development.",
      "JavaScript is the same as Java."
    ],
    correctAnswer: "JavaScript is an interpreted language.",
    choosedAnswer: ""
  },
  {
    question: "Which HTML tag is used to define a list item?",
    options: [
      "<li>",
      "<ul>",
      "<ol>",
      "<item>"
    ],
    correctAnswer: "<li>",
    choosedAnswer: ""
  },
  {
    question: "What is the correct way to include a CSS file in HTML?",
    options: [
      "<link rel='stylesheet' type='text/css' href='style.css'>",
      "<link rel='style' href='style.css'>",
      "<stylesheet>style.css</stylesheet>",
      "<style src='style.css'></style>"
    ],
    correctAnswer: "<link rel='stylesheet' type='text/css' href='style.css'>",
    choosedAnswer: ""
  },
  {
    question: "Which JavaScript method is used to access an HTML element by its ID?",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "document.getElementByTag()",
      "document.getElementByClass()"
    ],
    correctAnswer: "document.getElementById()",
    choosedAnswer: ""
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "createFunction myFunction()"
    ],
    correctAnswer: "function myFunction()",
    choosedAnswer: ""
  },
  {
    question: "Which HTML element is used to define emphasized text?",
    options: [
      "<em>",
      "<i>",
      "<strong>",
      "<b>"
    ],
    correctAnswer: "<em>",
    choosedAnswer: ""
  },
  {
    question: "What is the correct syntax to change the content of an HTML element in JavaScript?",
    options: [
      "document.getElementById('id').innerHTML = 'New Content';",
      "document.getElementByName('id').innerHTML = 'New Content';",
      "document.getElement('id').innerHTML = 'New Content';",
      "document.innerHTML = 'New Content';"
    ],
    correctAnswer: "document.getElementById('id').innerHTML = 'New Content';",
    choosedAnswer: ""
  },


]

let localStorageQuestions = [];
let arr = JSON.parse(localStorage.getItem("questionArray"));
if (arr === null) {
  arr = questionArray;
  localStorageQuestions.push(questionArray);
  // localStorage.setItem("questionsArray", JSON.stringify(localStorageQuestions));
}

let localStorageQuestionsget = arr;

function getRandomQuestion(array, numQuestion) {

  let shuffled = array.sort(() => 0.5 - Math.random());//why use 0.5?? 
  return shuffled.slice(0, numQuestion);//we remove this line so what happended?


}
let selectedQuestion = getRandomQuestion(questionArray, 10);




// QUESTIONS DISPLAY 
function questionDisplay() {


  let questions = document.getElementById("question");
  let questionNumber = document.getElementById("question-number");
  let previousQuestion = document.getElementById("previous");
  let headrNumber = document.getElementById("headernumber");

  let option1 = document.getElementById("option1").checked = false;
  let option2 = document.getElementById("option2").checked = false;
  let option3 = document.getElementById("option3").checked = false;
  let option4 = document.getElementById("option4").checked = false;


  let currentQuestion = selectedQuestion[currentQuestionIndex];
  questions.innerText = currentQuestion.question;

  lable1.innerText = currentQuestion.options[0];
  lable2.innerText = currentQuestion.options[1];
  lable3.innerText = currentQuestion.options[2];
  lable4.innerText = currentQuestion.options[3];
  questionNumber.innerText = currentQuestionIndex + 1;
  headrNumber.innerText = `${currentQuestionIndex + 1}`;


  if (currentQuestion.choosedAnswer) {
    let index = currentQuestion.options.indexOf(currentQuestion.choosedAnswer)
    if (index !== -1) {
      document.getElementById(`option${index + 1}`).checked = true;
    }
  }
  if (currentQuestionIndex == 0) {
    document.getElementById("continue").innerText = "Continue";
    return;
  }



}
//QUESTION DISPLAY END




// --PROGRESS BAR AND CONTINUE START--

let progressBar = document.getElementById("question-design");
let fullWidth = 1300;
let totalQuestion = selectedQuestion.length;
let increamentWidth = fullWidth / totalQuestion;

function next() {
  if (currentQuestionIndex < questionArray.length - 1) {
    currentQuestionIndex++;
    progressBar.style.width = `${(currentQuestionIndex + 1) * increamentWidth}px`
    questionDisplay();
  }

  if (currentQuestionIndex != 0) {
    document.getElementById("previous").innerText = "Previous";
  }

  if (currentQuestionIndex == 9) {
    document.getElementById("sumbit").innerText = "Submit..";
    document.getElementById("sumbit").style.display = "inline";
    document.getElementById("continue").style.display = "none";

  }
  else {
    document.getElementById("continue").innerText = "Continue..";
    document.getElementById("continue").style.display = "inline";
    document.getElementById("sumbit").style.display = "none";

  }

}

// --PROGRESS BAR AND CONTINUE END--



// --PREVIOUS START--
function previous() {

  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    progressBar.style.width = `${(currentQuestionIndex + 1) * (increamentWidth)}px`
    questionDisplay();
  }
  if (currentQuestionIndex == 0) {
    document.getElementById("previous").innerText = "";
    return;
  }

}

//  --PREVIOUS END--


function selectedOption(optionIndex) {

  let currentQuestion = selectedQuestion[currentQuestionIndex];
  currentQuestion.choosedAnswer = currentQuestion.options[optionIndex];
}


//  --SCORE COUNT FUNCTION START--

let marks = 0;
function score() {
  let score = document.getElementById("score");
  for (let i = 0; i < selectedQuestion.length; i++) {
    if (selectedQuestion[i].correctAnswer == selectedQuestion[i].choosedAnswer) {
      marks += 10;

    }
  }
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let testUser = JSON.parse(localStorage.getItem("testUser")) || [];


  let leaderBoard = {
    questions: selectedQuestion,
    Name: currentUser.name,
    Email: currentUser.email,
    marks: marks,
  }

  testUser.push(leaderBoard);
  localStorage.setItem("testUser", JSON.stringify(testUser));

}

// //  --SCORE COUNT FUNCTION END--

// --LEADERBOARD DATA DISPLAY--

function submit() {


  let testUser = JSON.parse(localStorage.getItem("testUser"));
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!testUser) {
    console.log("no test data found in localstorage")
    return;
  }
  testUser.sort((a, b) => b.marks - a.marks);

  let rank1 = document.getElementById("position1");
  let rank2 = document.getElementById("position2");
  let rank3 = document.getElementById("position3");
  let rank4 = document.getElementById("position4");
  let rank5 = document.getElementById("position5");
  let rank6 = document.getElementById("position6");


  if (testUser[0]) {
    rank1.innerText = testUser[0].marks;

  }
  if (testUser[1]) {
    rank2.innerText = testUser[1].marks;
  }

  if (testUser[2]) {
    rank3.innerText = testUser[2].marks;

  }
  if (testUser[3]) {
    rank4.innerText = testUser[3].marks;
    document.getElementById("rankname4").innerText = testUser[3].Name
  }
  if (testUser[4]) {
    rank5.innerText = testUser[4].marks;
    document.getElementById("rankname5").innerText = testUser[4].Name
  }
  if (testUser[5]) {
    rank6.innerText = testUser[5].marks;
    document.getElementById("rankname6").innerText = testUser[5].Name
  }


  let positionHeader = document.getElementById("positionheader");
  for (let i = 0; i < testUser.length; i++) {
    switch (i + 1) {
      case 1:
        if (currentUser.name === testUser[i].Name)
          positionHeader.innerText = "1st";
        break;
      case 2:
        if (currentUser.name === testUser[i].Name)
          positionHeader.innerText = "2nd";
        break;
      case 3:
        if (currentUser.name === testUser[i].Name)
          positionHeader.innerText = "3rd";
        break;
      default:
        if (currentUser.name === testUser[i].Name)
          positionHeader.innerText = (i + 1) + "th";
        break;
    }
  }

  let rankNumber = document.getElementById("rankNumber");

  for (let i = 0; i < testUser.length; i++) {
    if (i > 4 && currentUser.email == testUser[i].Email) {
      rank6.innerText = testUser[i].marks;
      document.getElementById("rankname6").innerText = testUser[i].Name
      rankNumber.innerText = `#6${i + 1}`;
    }
  }

}
//  --LEADER-BOARD END


//  --LOGOUT FUNCTION START--
function toggleLoggOut() {
  let signOut = document.getElementsByClassName("logout")[0];

  if (signOut.classList.contains('hidden')) {
    signOut.classList.remove('hidden');
  }
  else {
    signOut.classList.add('hidden');

  }

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  document.getElementById("logoutname").innerText = currentUser.name;
  document.getElementById("logoutemail").innerText = currentUser.email;


}
function logout() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  localStorage.removeItem("currentUser")
  window.location.href = "login.html"
}


//  --ADMIN LOGOUT START(ADMIN DASHBOARD)--
let adminDashboard = document.querySelector(".adminpage");
function adminToggle() {

  if (adminDashboard.style.display == "none") {
    adminDashboard.style.display = "block"
  }
  else {
    adminDashboard.style.display = "none"
  }
}


//  --ADMIN LOGOUT END (ADMIN DASHBOARD)--


//  --NUMBER OF TEST COUNT USER AND LATEST SCORE --
function testCount() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let testUser = JSON.parse(localStorage.getItem("testUser")) || [];
  let users = JSON.parse(localStorage.getItem('user'));
  let count = 0
  for (let i = 0; i < testUser.length; i++) {
    if (currentUser.name === testUser[i].Name) {
      // console.log("Number of count before", count);
      count++;

    }
  }



  for (let i = 0; i < users.length; i++) {
    if (users[i].name === currentUser.name) {
      users[i].numberOfTest = count;
      // console.log("update number of test count", count)

      break;
    }
  }

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < testUser.length; j++) {
      if (currentUser.name == users[i].name) {
        users[i].latestMarks = testUser[j].marks;
        // console.log("latest Marks", marks)
      }
    }
  }
  localStorage.setItem("user", JSON.stringify(users));

}
testCount()

//  --TEST COUNT END--

//  --ALL USERS DISPLAI IN ADMIN

let userInfo = document.getElementById("admintable");
function adminInfo() {

  let users = JSON.parse(localStorage.getItem('user'));
  let testUser = JSON.parse(localStorage.getItem("testUser"));

  for (let i = 0; i < users.length; i++) {
    let tableRow = document.createElement("tr")
    userInfo.append(tableRow)
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    tableRow.append(td1, td2, td3, td4, td5, td6);

    
      td1.innerText = `${i + 1}`;
      td2.innerText = users[i].name;
      td3.innerText = users[i].email;
      td4.innerText = users[i].numberOfTest;
      td5.innerText = users[i].latestMarks
      let anchoreTag = document.createElement(`a`);
      anchoreTag.innerText = "viewmore";
      anchoreTag.href = "#";
      td6.append(anchoreTag);

    
  }
}


function deleteQuestion(index)
{
  
 
    questionArray.splice(index,1)
    console.log("delete")
  
  
}

function edit(index)
{
  let editQuestion=document.getElementsByClassName("editquestion")[0];
  let editOptionA=document.getElementsByClassName("editoptiona")[0];
  let editOptionB=document.getElementsByClassName("editoptionb")[0];
  let editOptionC=document.getElementsByClassName("editoptionc")[0];
  let editOptionD=document.getElementsByClassName("editoptiond")[0];
  console.log("Edit")
  console.log(editQuestion,editOptionA,editOptionB,editOptionC,editOptionD)
  editQuestion.value=questionArray[index].question
  editOptionA.value=questionArray[index].options[0]
  editOptionB.value=questionArray[index].options[1]
  editOptionC.value=questionArray[index].options[2]
  editOptionD.value=questionArray[index].options[3]

  let confirmButton = document.getElementById("confirmbutton");
  confirmButton.onclick = function() {
    console.log("edit question specific",index)
    addQuestions(index);  // Pass the current index to the function
  };
  
}
//--ALL QUESTIONS DISPLAY IN ADMIN SIDE--


let admintablequestions = document.getElementById("admintablequestions")

function adminQuestions() {

  let localStorageQuestionsget = JSON.parse(localStorage.getItem("questionsArray"));
  // console.log("Quiz", localStorageQuestionsget);


  for (let i = 0; i < questionArray.length; i++) {
    let tableRow = document.createElement("tr")
    admintablequestions.append(tableRow)
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")

    tableRow.append(td1, td2, td3, td4, td5, td6, td7, td8);

    let deleteButton = document.createElement(`button`);
    let editButton = document.createElement(`button`);
    if (questionArray) {

      td1.innerText = `${i + 1}`
      td2.innerText = questionArray[i].question
      td3.innerText = questionArray[i].options[0]
      td4.innerText = questionArray[i].options[1]
      td5.innerText = questionArray[i].options[2]
      td6.innerText = questionArray[i].options[3]
      td7.innerText = questionArray[i].correctAnswer;
     
      
      deleteButton.innerText = "Delete"
      editButton.innerText = "Edit"
      td8.append(deleteButton, editButton);
      deleteButton.classList.add("deletbutton");
      editButton.classList.add("editbutton")
    }

    deleteButton.addEventListener("click",function()
  {
    deleteQuestion(i)
    console.log("delete question succesfull!")
    console.log(questionArray)
    localStorage.setItem("questionsArray", JSON.stringify(questionArray));
    let storedQuestion = JSON.parse(localStorage.getItem("questionsArray"))
    console.log("localstorage questions",storedQuestion)

  })

  editButton.addEventListener("click",function()
{
  
  edit(i);
  
})

  }
 
 
  
}




//--ADD QUESTION DYNAMICALLY
function addQuestionsToggle() {
  let questionsadd = document.getElementsByClassName("questionsadd")[0];
  if (questionsadd.style.display == "none") {
    questionsadd.style.display = "block"
  }
  else{
    questionsadd.style.display = "none"
  }
}

function closeToggle() {
  let questionsadd = document.getElementsByClassName("questionsadd")[0];
  if (questionsadd.style.display == "block") {
    questionsadd.style.display = "none"
  }
}
// let questionArray = [];

// window.onload=function(){
//   let storedQuestion = JSON.parse(localStorage.getItem("questionsArray"));
//   if(storedQuestion)
//   {
//     questionArray=storedQuestion;
//     console.log("Store Question Newly",questionArray)
//   }
//   else{
//     console.log("not added")
//   }
// }

function addQuestions(index) {

  
  let dynamicQuestion = document.getElementById("addquestion").value;
  let dynamicOptionA = document.getElementById("optiona").value;
  let dynamicOptionB = document.getElementById("optionb").value;
  let dynamicOptionC = document.getElementById("optionc").value;
  let dynamicOptionD = document.getElementById("optiond").value;
  let dynamicAnswer = document.getElementById("CorrectAnswer").value
  let arr = JSON.parse(localStorage.getItem("questionsArray"));

  // if(index!==undefined){
  //   questionArray[index].question=editQuestion.value
  //   questionArray[index].options[0]=editOptionA.value
  //   questionArray[index].options[1]=editOptionB.value
  //   questionArray[index].options[2]=editOptionC.value
  //   questionArray[index].options[3]=editOptionD.value

  //   console.log("edit question specific",index)
  // }
  // else{
  let newQuestions = {
    question: dynamicQuestion,
    options: [dynamicOptionA, dynamicOptionB, dynamicOptionC, dynamicOptionD],
    correctAnswer: dynamicAnswer,
    choosedAnswer: ""

  };
  questionArray.push(newQuestions);
//}
  console.log("new question", newQuestions)
  console.log("updated question", questionArray)
  localStorage.setItem("questionsArray", JSON.stringify(questionArray));
 
}


//  --ADD QUESTION DYNAMICALLY END--

//  --EDIT QUESTION START--
