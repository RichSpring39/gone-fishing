// const prompt = require('prompt-sync')({sigint: true});

// console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fishfor six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

// let caughtFish = [];
// let fish1 = generateFish();
// let fish2 = generateFish();

// caughtFish.push(fish1,fish2);
// console.log(caughtFish);


// for(let i = 6; i < 12; i++ ){
//     console.log(`===================================/n`);

//     console.log(`The time is ${i} :00am. So far You've caught: `);
//     console.log(`${caughtFish.length} fish, ${getTotalWeight()} 1bs, $${getTotalValue()}`);

//     let fish = generateFish();

//     console.log(`You caught a ${fish.name} weighing ${fish.weight} 1bs and valued at $${fish.value}`);
    
//     let currentTolalWeight = getTotalWeight();

//     if(currentTolalWeight + fish.weight > 10){
//         console.log("/n This fish would put you over 10 1bs, so you can release it./n");

//         prompt(`Press any key to continue: `);

//         // continue;
//     }

//     console.log("/nYour action: [c]atch or [r]elease?");
//     let action = prompt(`: `);

//     while(action !== `c` && action !== `r`){
//         console.log(`invalid answer`);
//         action = prompt(`: `);
//     }

//     if(action === `c`){
//         caughtFish.push(fish);
//         console.log(`/n You choose to keep the ${fish.name}!/n`);

//     }else if(action === `r`){
//         console.log(`/n You choose to keep the ${fish.name}!/n`);

//     }

// }



// function getTotalWeight(){
//     let totalWeight = 0;

//     for(let i = 0; i < caughtFish.length; i++){
//         totalWeight += caughtFish[i].weight;
//         let currentFish = caughtFish[i];
//         totalWeight += currentFish.weight;
//     }
//     return Number(totalWeight.toPrecision(3));
// }


// function getTotalValue(){
//     let totalValue = 0;

//     for(let fish of caughtFish){
//         totalValue = totalValue + fish.value;
//     }
//     return Number(totalValue.toPrecision(3));
// }


// //weight of the fish
// function generateWeight(){
//     let weight = Number(Math.random() * 5).toPrecision(3);

//     while(weight < 1){
//         weight = Number(Math.random() * 5).toPrecision(3);
//     }

//     return weight;
// }

// // Fish value
// function generateValue(){
//     let value = Number(Math.random() * 5).toPrecision(3);

//     while(value < .1){
//         value = Number(Math.random() * 5).toPrecision(3);
//     }

//     while(value < 1){
//         value = Number(value.toPrecision(2));
//     }

//     return value;
// }

// // Fish Name
// function generateName(){
//     let adjectives = ['Shiny', 'Red', 'Dull', 'Blue', 'Slimy', 'Green', 'Dry', 'Yellow', 'Vibrant', 'Purple', 'Floppy', 'Orange', 'Silly', 'Silver']

//     let types = ['Salmon', 'Bass', 'Trout', 'Flounder', 'Perch', 'Snapper', 'Cod', 'Catfish', 'Grouper', 'Tuna', 'Blobfish', 'Blowfish']

//     let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
//     let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];

//     while(adj1 === adj2){
//         adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
//     }

//     let type = types[Math.floor(Math.random() * types.length)];

//     return adj1 + " " + adj2 + " " + type;
// }

// // functions added together
// function generateFish(){
//     let fish = {};

//     fish.name = generateName();
//     fish.weight = generateWeight();
//     fish.value = generateValue();

//     return fish;
// }




const prompt = require('prompt-sync')({sigint: true})

let caughtFish = []
let fish1 = generateFish()
let fish2 = generateFish()

console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fishfor six hours (till 12:00pm) and can catch at most 10 lbs of fish ")



for(let i = 6; i < 13; i++){
    console.log('===========================\n')
    console.log("The time is " + i +":00am. so far you've caught: ")
    console.log(`${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}`)

    let fish = generateFish()

    console.log('you caught a ' + fish.name + 'weghing ' + fish.weight + 'lbs and valued at $' + fish.value)

    let currentTotalWeight = getTotalWeight()

    if(currentTotalWeight + fish.weight > 10){
        console.log('\n This fish would put you over 10 lbs, so you can release it. \n')
        prompt('press any key too continue')
        
    }

    let action = prompt("\n Your actionss: [C]atch or [R]elease?")

    while(action !== 'c' && action !== 'r'){
        console.log('Please enter [C] or [R]')
        action = prompt('> ')
    }



    if(action === 'c'){
        caughtFish.push(fish)
        console.log('\n You chose to keep the ' + fish.name +'\n')
    }else if(action === 'r'){
        console.log('\n You chose to release the ' + fish.name +'\n')
    }
}

console.log('The time is now 12:00. ')

console.log('You caught ' + caughtFish.length + ' Fish: ')

for(let i = 0; caughtFish.length > i; i++){
    console.log(caughtFish[i].name +' '+ caughtFish[i].weight +' lbs ' + caughtFish[i].value)
}
 console.log('\n Total weight: ' + getTotalWeight() + ' lbs')
 console.log('\n Total value: ' +'$'+ getTotalValue() )



function generateRandomWeight(){
   let weight = Number((Math.random() * 5).toPrecision(3))
    while(weight < 1){
        weight = Number((Math.random() * 5).toPrecision(3))
    }
   return weight
}




function generateRandomValue(){

    let value = Number((Math.random()*5).toPrecision(3))


    while(value < 1){
        value = Number((Math.random()*5).toPrecision(3))
    }

    if(value < 1){
        value = value.toPrecision(2)
    }
    return value
}

//functions
function generateRandomName(){

    let adjectives = [
        'Shiny', 'Red','Dull',
        'Blue', 'Slimy', 'Green',
        'Dry', 'Yellow', 'Vibrant',
        'Purple', 'Floppy', 'Orange',
        'Silly', 'Silver']



    let types =[
        'Salmon', 'Bass', 'Trout', 
        'Flounder', 'Perch', 'Snapper',
        'Cod', 'Catfish', 'Grouper',
        'Tuna', 'Blobfish', 'Blowfish']

    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)]
    
    let adj2 = adjectives[Math.floor(Math.random() *adjectives.length)]
    
    while(adj1 === adj2 ){
        adj2 = adjectives[Math.floor(Math.random() *adjectives.length)]
    }
    
    let type = types[Math.floor(Math.random() *types.length)]

        return adj1 + " " + adj2 + " " + type
}



function generateFish(){
    let fish = {}
    fish.name = generateRandomName()
    fish.weight = generateRandomWeight()
    fish.value = generateRandomValue()
    return fish
}

function getTotalWeight(){

let totalWeight = 0
for(let i = 0; i < caughtFish.length; i++){
    let currentFish = caughtFish[i]
    totalWeight += currentFish.weight
}
return Number(totalWeight.toPrecision(3))
}

function getTotalValue(){
    let totalValue = 0

   
    for(let fish of caughtFish){
        totalValue = totalValue + fish.value
    }
    

 return Number(totalValue)
}





