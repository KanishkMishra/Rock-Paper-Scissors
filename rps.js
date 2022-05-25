function computerPlay() {
    let result = Math.floor(Math.random()*3)+1;
    switch (result) {
        case 1:
            result = "Rock";
            break;
        case 2:
            result = "Paper";
            break;
        case 3:
            result = "Scissors";
            break;
        default:
            result = "Rock";
            break;
    }
    return result;
}
