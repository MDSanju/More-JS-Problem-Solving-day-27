const names = ['a', 'g', 'f', 'l', 'k', 'r', 'p', 'a', 'v', 'f', 'k'];

function duplicateOut(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const elements = names[i];
    //     console.log(elements);
    // }
    for (const elements of names) {
        if (unique.indexOf(elements) == -1) {
            unique.push(elements);
        }
    }
    return unique;
}

const uniqueNames = duplicateOut(names);
console.log(uniqueNames);