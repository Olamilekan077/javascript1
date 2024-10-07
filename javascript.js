// 1. Email Validation: 
// Check if a user input string is a valid email format (eg: example@mail.com). 
// Output "email is valid" if valid or "invalid email" otherwise. 
 
// 1
let email = prompt ("pls, insert your email")
let verifyemail = email.endsWith("@gmail.com")

if(verifyemail){
    console.log( "email is valid")
    }else{
      console.log("invalid email") 
    }





//  2. Password Strength Checker: 
// Write a password checker program that ensure a password contains at least one uppercase letter as the last letter,
// one lowercase letter as the first letter, and one number 0 anywhere. Output "strong password" if yes and "weak password", otherwise. 

// 2.sol


let password = prompt("please input your password").trim()
let upperCase = password.charAt(password.length - 1).toUpperCase()  === password.charAt(password.length - 1)
let lowerCase = password.charAt(0).toLowerCase() === password.charAt(0)
let result = lowerCase && upperCase && password.includes(0)

if(result){
    console.log("Strong password")
}else{
    console.log("Weak password")
}
   


//  3. URL Protocol Detection: 
// Check if a URL starts with "http://" or "https://".


// 3.sol

let url = prompt ("please enter your url")
let verifyurl = url.startsWith("http://") || url.startsWith("https://")

if(verifyurl){
    console.log("thanks for joining us")
}else{
    console.log("Invalid url")
}




//  4. Palindrome detector: 
// Verify if a given string is a palindrome (ie: it reads the same forward and backward eg, "mum",  "level"). 

// 4.sol





//  5. Username Length Validation: 
// Write a program that ensures a username is between 5 and 15 characters. 

//  5.sol
 
let  Username = prompt("please insert your username")

if(5 <= Username.length && 15 >= Username.length){
    console.log("pls, input your date of birth")
}else{
    console.log("invalid username")
}



//  6. Case Conversion in Messages: 
// Write a program that automatically capitalizes the first letter of a user's name input. 

//6.sol

let firstName = prompt ("please input your firstname").trim().toLowerCase()
let customerName = firstName.charAt(0).toUpperCase().concat(firstName.slice(1))

console.log(customerName)




//  7. Detect File Type from Extension: 
// Write a program that identifies if a file is a specific type (e.g., ".jpg", ".png") based on its extension, 
// and then outputs the type of file eg: "it is a JPG file" or "it is an MP3 file".


//  7.sol

let fileType = prompt("please input your file").trim()

if(fileType.endsWith(".jpg")){
    console.log("It is a JPG file")
}else if(fileType.endsWith(".e.g")){
    console.log("It is a E.G file")
}else if(fileType.endsWith(".mp3")){
    console.log("It is a MP4 file")
}else if(fileType.endsWith(".png")){
    console.log("It is a PNG file")
}else{
    console.log("Unsupported file type")
}




//  8. Sanitize User phone Input: 
// Write a program that accepts phone number and country of origin from users.
// Phone number input must be 11 digits long and start with 0.
// Remove any leading or trailing spaces from a user input string, add the country code +234 if the user is a Nigerian,
// +233 if use is Ghanaian or +44 if user is British. Output a string that reads, "As you're Nigerian, your  full phone number is +234 809123457", etc.


// 8

let phoneNumber = prompt ("pls, enter your number").trim()
let country = prompt ("pls, enter your country ").trim()
let phoneNum =  phoneNumber.length === 11 && phoneNumber.charAt(0) === 0 &&  phoneNumber.startsWith("0")


if(phoneNum){
    console.log("proceed")
}else{
    console.log("Invalid phone number")
}




//  9. Forbidden Words Bot: 
// Write a bot that checks if a user message contains any forbidden word like “bad” or “spam.” 
// and substitute them with nicer synonyms or with "" that is the same length as the bad word.

// 9.sol

let message = prompt ("please insert your word")
let replaceMessage = message.replaceAll("bad", "gud").replaceAll("spam", "nice")

console.log(replaceMessage)



//  10. Scores Grader: 
// Write a program that determines the grade of students in a test. 
// Grade A is for score between 75 and 100, B is for score between 60 and 70, C if for scores between 50 and 60.
// Scores below 50 are advised to retake exam.


//10.sol

let score = prompt ("input your scores")

 if(75 <= score && score <= 100) {
    console.log("Grade A")
  }else if(60 <= score && score < 75) {
    console.log("Grade B")
  }else if(50 <= score && score < 60) {
    console.log("Grade C")
  }else if(score < 50) {
    console.log("Retake exam")
  }else{
    console.log("Invalid score")
}

