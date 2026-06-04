const yargs = require("yargs/yargs");
const  helpers  = require("yargs/helpers");
const chalk = require("chalk");


const argv = yargs(helpers.hideBin(process.argv))
  .option("city", {
    alias: "c",
    type: "string",
    demandOption: true,
    describe: "City name to fetch weather for"
  })
  .help()
  .parse();


  let data = [
  { "city": "NY" ,"temp": "20c" },
  {  "city": "TX" ,"temp": "30c"  }
];


const getWeather = (cityName) =>   data.filter(city =>  city.city===cityName.toUpperCase()  );
 
console.log("City:", argv.city);

const weather = getWeather(argv.city);

console.log(chalk.green(weather[0].temp));
