const phones = [
    { Name: 'iPhone', price: 226000, camera: 16, storage: 512 },
    { Name: '1Plus', price: 122000, camera: 108, storage: 128 },
    { Name: 'samsung', price: 45000, camera: 108, storage: 128 },
    { Name: 'oppo', price: 55000, camera: 96, storage: 64 },
    { Name: 'realme', price: 16000, camera: 36, storage: 16 },
    { Name: 'xperia', price: 90000, camera: 48, storage: 256 }
];

// cheapest phone pick out
let cheapestPhone = phones[0];
for (const phone of phones) {
    if (phone.price < cheapestPhone.price) {
        cheapestPhone = phone;
    }
}
console.log(cheapestPhone);


// pick out expensive phone
function expensivePhone(phones) {
    let expensive = phones[0];
    for (const phone of phones) {
        if (phone.price > expensive.price) {
            expensive = phone;
        }
    }
    return expensive;
}

const getExpensivePhone = expensivePhone(phones);
console.log(getExpensivePhone);