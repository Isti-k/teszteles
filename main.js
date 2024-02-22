import { parose } from "./fuggveny.js";

console.log(parose(5))

/* tesztelési esetek */

/* 1. testeset szam = 0 */
console.log(`1. teszteset: szam=0 | várt eredmény: true`)
console.log(`1. teszteset: szam=0 | kapott eredmény: ${parose(0)}`)
console.log(`1. szam=0 | várt: true kapott: ${parose(0)} | ${true === parose(0) ? "jó" : "hibás"}`)
/* 2. testeset szam = 4 */ // azon értékek halmaza, amelyek azonos tesztesetek jelentése, ugyan úgy működhetnek.
console.log(`2. szam=4 | várt: true kapott: ${parose(4)} | ${true === parose(4) ? "jó" : "hibás"}`)
/* 3. testeset szam = 5 */
console.log(`3. szam=5 | várt: true kapott: ${parose(5)} | ${false === parose(5) ? "jó" : "hibás"}`)
/* 4. testeset szam = -4 */
console.log(`4. szam=-4 | várt: true kapott: ${parose(-4)} | ${true === parose(-4) ? "jó" : "hibás"}`)
/* 5. testeset szam = -5 */
console.log(`5. szam=-5 | várt: true kapott: ${parose(-5)} | ${false === parose(-5) ? "jó" : "hibás"}`)
/* 6. testeset szam = 2.5 // tört szám pi, 1/3 */
console.log(`6. szam=2.5 | várt: "nem egész szám" kapott: ${parose(2.5)} | ${"nem egész szám" === parose(2.5) ? "jó" : "hibás"}`)
/* 7. testeset szam = 40000000000000000000000000 */
console.log(`7. szam=40000000000000000000000000 | várt: true kapott: ${parose(40000000000000000000000000)} | ${true === parose(40000000000000000000000000) ? "jó" : "hibás"}`)
console.log(`7. szam=40000000000000000000000001 | várt: true kapott: ${parose(40000000000000000000000001)} | ${false === parose(40000000000000000000000001) ? "jó" : "hibás"}`)
/* 8. testeset szam = -4000000000000000000000000 */
console.log(`8. szam=-4000000000000000000000000 | várt: true kapott: ${parose(-4000000000000000000000000)} | ${true === parose(-4000000000000000000000000) ? "jó" : "hibás"}`)
/* 9. testeset szam = "valami" */
console.log(`9. szam="valami" | várt: true kapott: ${parose("valami")} | ${true === parose("valami") ? "jó" : "hibás"}`)
/* 10. testeset szam = "7" */
console.log(`10. szam="7" | várt: true kapott: ${parose("7")} | ${false === parose("7") ? "jó" : "hibás"}`)