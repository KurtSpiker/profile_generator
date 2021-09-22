const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name (or nickname)? ', (name) => {
  rl.question('What\'s an activity you like doing? ', (doing) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (superPower) => {
              console.log(`Hi my name is ${name}. I really enjoy ${doing}, and like to listen to ${music} while I do that.`)
              console.log(`My favorite meal of the day would have to be ${meal}. And in a perfect world I would have ${food} for ${meal} everyday!`)
              console.log(`${sport} is probably my favorite sport. And a secret superpower of mine is ${superPower}.`)
              rl.close();
            })
          })
        })
      })
    })
  }) 
});
