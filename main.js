let btn =document.getElementById('btn');
let output = document.getElementById('outputText');
let number = [Math.floor(Math.random() * 100)];  // byt his js will generate a random number betwn 1-100



btn.addEventListener('click',function()
{
let input =document.getElementById('userInput').value;

if(input == number)
{
    output.innerHTML='you guessed right, your number was $(number)'
}
else if(input < number)
{
    output.innerHTML= "you guessed too low!"

};


if(input > number)
{
    output.innerHTML = "You guessed too high!"
}

}
);
