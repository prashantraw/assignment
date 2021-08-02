function salesTax(x) {
    let totalTax = 0
    let tax = 0.1
    let importDuty = 0
    let noTax = ['book', 'chocolate', 'pill']
    if (x.includes("imported")) {
        importDuty = 0.05;
    }

    const n = x.split(" ");
    const isTrue = noTax.find(c => n.includes(c))
    if (isTrue) {
        tax = 0;
       }
    
    totalTax = tax + importDuty
    const price = parseFloat(n[n.length - 1])
    const finalTax = price * totalTax

    return (finalTax + price);

}
const a = salesTax('1 imported chocolate at 11.25')
console.log(a)
