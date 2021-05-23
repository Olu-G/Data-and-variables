let date = 'Monday2019-03-18'
let time = '10:05:34 AM' 
let astronautCount = 7
let astronautStatus = 'ready'
let averageAstronautCountKg = 80.7
let crewMassKg = astronautCount*averageAstronautCountKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let fuelTempCelcius = -225
let fuelLevel = 100
let weatherStatus = 'clear'
const dash = '------------------------------'

console.log(dash)
console.log("> LC04 - LAUNCH CHECKLIST")
console.log(dash)
console.log('Date:',date)
console.log('Time:',time)

console.log(dash)
console.log(">ASTRONAUT INFO")
console.log(dash)
console.log("* count:",astronautCount)
console.log("*status:",weatherStatus)


console.log(dash)
console.log("> FUEL DATA")
console.log(dash)
console.log('*Fuel temp Celcius:',fuelTempCelcius + 'C')
console.log('*Fuel level:',fuelLevel + 00 + '%')
console.log(dash)
console.log('> MASS DATA')
console.log(dash)
console.log('*Crew mass:',crewMassKg,'kg')
console.log('*Fuel mass:',fuelMassKg,'kg')
console.log('*Shuttle mass:',shuttleMassKg,'kg')
console.log('*Total mass:',totalMassKg,'kg')

console.log(dash)
console.log('> FLIGHT PLAN')
console.log(dash)
console.log('*weather:',weatherStatus)
console.log(dash)
console.log('>OVERALL STATUS')
console.log('*Clear for takeoff: YES')