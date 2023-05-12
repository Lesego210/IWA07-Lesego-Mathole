const nickname= "Timmy";
const firstname = "Timothy";
const user = nickname || firstname

if (nickname) {
    console.log('Goodmorning ${nickname}')
} else {
    console.log('Goodmorning ${firstname}')
}
 