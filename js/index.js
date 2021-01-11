// Iteration 1: Names and Input

console.log("I'm ready!");

var hacker1= 'miguel';
var hacker2= 'jon'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hacker1Spaced='';
for(let i=0; i<hacker1.length; i++){
  hacker1Spaced += hacker1[i]+' ';
 }
 let hacker1SpaceCaps= hacker1Spaced.toUpperCase()
console.log(hacker1SpaceCaps)


let hacker2Reversed='';
for(let i=hacker2.length-1; i>=0; i--){
 
 hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed)


for(let i=0; i<hacker1.length; i++){
  
    if(hacker1[i]> hacker2[i]){
      console.log(`The driver's name goes first.`)
      break;
      }else if(hacker2[i]> hacker1[i]){
       console.log("Yo, the navigator goes first definitely.") 
       break;
    }else if(hacker2[i]===hacker1[i]){console.log(`What?! You both have the same name?`)
    break;}
   }

var loremIpsum=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est enim, porttitor sit amet arcu nec, dictum posuere risus. Mauris pharetra dignissim quam non pharetra. Vivamus tempor condimentum enim, vitae tempus orci porta ac. Nullam cursus mattis scelerisque. Morbi vestibulum, quam eu malesuada faucibus, sem nisl ullamcorper mauris, et posuere ante dui et magna. Curabitur non commodo augue, non laoreet lectus. Curabitur efficitur lectus at orci sodales, sit amet consectetur dui dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque gravida rutrum dapibus.

Donec pellentesque consectetur est quis vestibulum. Integer dapibus lectus risus, eu lacinia neque maximus vel. Sed vitae congue ex. Curabitur ut hendrerit nisl, quis malesuada arcu. Aliquam porta gravida ligula at lobortis. Cras mauris ligula, efficitur condimentum condimentum id, auctor sed nunc. Integer a turpis ut est dictum auctor vitae at quam. Sed feugiat est sed risus mattis vestibulum. Pellentesque magna est, maximus rhoncus rhoncus non, condimentum sit amet mauris. In hac habitasse platea dictumst. Nunc mattis aliquam lorem. Ut tincidunt diam eu enim lobortis mattis.

Integer mollis ante vitae felis lacinia, cursus rutrum ante tristique. Praesent interdum purus sed mollis congue. Mauris finibus porttitor arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque cursus justo magna, ac semper justo tristique non. Curabitur interdum lectus sed dolor interdum volutpat. In accumsan interdum justo. Nunc egestas eget massa a elementum. Etiam at commodo est. Aenean vel massa nibh. Duis placerat ut libero sit amet posuere. Curabitur et lacus tempor, molestie libero eu, congue ligula. Praesent felis risus, pulvinar a neque non, aliquet efficitur augue. Suspendisse ut ultricies sapien, ac facilisis eros.`

let totalWords=3; //each paragraph has 1 more word than spaces
for(let i=0; i<loremIpsum.length; i++){
  if(loremIpsum[i]===' ')
  {totalWords += 1;
}
}
  console.log(totalWords)

 
let phraseToCheck=`step on no pets`;


 let phraseReversed='';
for(let i=phraseToCheck.length-1; i>=0; i--){
 
 phraseReversed += phraseToCheck[i];
}
if(phraseToCheck === phraseReversed){
    console.log(`It is a palindrome! YESSSSSSS!!!`)} else{
        console.log(`It is not a palindrome`);
    }
