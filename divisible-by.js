for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('cricket');
    } else if (i % 3 == 0) {
        console.log('badminton');
    } else if (i % 5 == 0) {
        console.log('football');
    } else {
        console.log(i);
    }
}