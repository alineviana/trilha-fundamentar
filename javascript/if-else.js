// If ... else

// Example 01
let temperature = 36.5;

if(temperature >= 37) {
    console.log('Você está com febre!')
} else {
    console.log("Você não está com febre!")
};


// Example 02
let temperature = 36.5

if(temperature >= 37.5) {
    console.log('Febre alta!')
} else if (temperature < 37.5 && temperature > 37) {
    console.log('Você está com febre')
} else {
    console.log('Você está saudável!')
}