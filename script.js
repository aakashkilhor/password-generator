let arr1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let arr2 = []
for(let i = 0; i < arr1.length; i++){arr2[i] = arr1[i].toLowerCase();}
arr3 = ["!","@","#","$","%","&","*"]
arr4 = [0,1,2,3,4,5,6,7,8,9]
password = [];
for (let i = 0; i <= 3; i++) {
    password[i] = arr1[Math.floor(Math.random()*26)]}
for (let i = 4; i <= 6; i++) {
    password[i] = arr2[Math.floor(Math.random()*26)]}
for (let i = 7; i <= 8; i++) {
    password[i] = arr3[Math.floor(Math.random()*7)]}
for (let i = 9; i <= 10; i++) {
    password[i] = arr4[Math.floor(Math.random()*10)]}
let shuffled = password.sort(function(){return 0.5-Math.random()})
let generated = shuffled.join('')
console.log(generated);