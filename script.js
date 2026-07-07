function checkPassword(){

let password=document.getElementById("password").value;

let score=0;
let charset = 0;

if(password.length>=8){

document.getElementById("length").innerHTML="✅ Minimum 8 Characters";

score++;

}

else{

document.getElementById("length").innerHTML="❌ Minimum 8 Characters";

}

if(/[A-Z]/.test(password)){

document.getElementById("upper").innerHTML="✅ Uppercase Letter";

score++;
charset += 26;

}


else{

document.getElementById("upper").innerHTML="❌ Uppercase Letter";

}

if(/[a-z]/.test(password)){

document.getElementById("lower").innerHTML="✅ Lowercase Letter";

score++;
charset += 26;

}


else{

document.getElementById("lower").innerHTML="❌ Lowercase Letter";

}

if(/[0-9]/.test(password)){

document.getElementById("number").innerHTML="✅ Number";

score++;
charset += 10;

}


else{

document.getElementById("number").innerHTML="❌ Number";

}

if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){

document.getElementById("special").innerHTML="✅ Special Character";

score++;
charset += 32;

}


else{

document.getElementById("special").innerHTML="❌ Special Character";

}

// Calculate Entropy
let entropy = 0;

if(password.length > 0 && charset > 0){

    entropy = password.length * Math.log2(charset);

}

document.getElementById("entropy").innerHTML =
"Entropy : " + entropy.toFixed(2) + " bits";



let bar=document.getElementById("bar");

let strength=document.getElementById("strength");

if(password.length === 0){

    bar.style.width = "0%";
    bar.style.background = "#30363d";

    strength.innerHTML = "Enter a password to begin analysis.";

    document.getElementById("entropy").innerHTML = "Entropy: 0.00 bits";

    return;

}

if(score<=2){

bar.style.width="33%";

bar.style.background="red";

// strength.innerHTML="Strength : Weak";
strength.innerHTML="🔴 Weak";
strength.style.color = "#ff4d4d";

}

else if(score<=4){

bar.style.width="66%";

bar.style.background="orange";

// strength.innerHTML="Strength : Medium";
strength.innerHTML="🟠 Medium";
strength.style.color = "#ffa500";

}

else{

bar.style.width="100%";

bar.style.background="limegreen";

// strength.innerHTML="Strength : Strong";
strength.innerHTML="🟢 strong";
strength.style.color = "#32cd32";

}

}

function togglePassword(){

let password=document.getElementById("password");

if(password.type==="password"){

password.type="text";

}

else{

password.type="password";

}

}

function generatePassword(){

    const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let password = "";

    for(let i=0;i<12;i++){

        let randomIndex=Math.floor(Math.random()*characters.length);

        password += characters[randomIndex];

    }

    document.getElementById("password").value=password;

    checkPassword();

}

function copyPassword(){

let password=document.getElementById("password");

// if(password.value===""){

// alert("Generate or enter a password first!");

// return;

// }

// if(password === ""){
//     strength.innerHTML = "Enter a password to begin analysis.";
//     bar.style.width = "0%";
//     return;
// }

if(password.value === ""){

    alert("Please enter or generate a password first!");

    return;

}

navigator.clipboard.writeText(password.value);

alert("✅ Password Copied!");

}