function processConfirm(ans) {
    let res = "";

    if (ans) {
        res = "Excellent. We'll play a nice game of chess.";
    } else {
        res = "Maybe later then.";
    }
    return res;
}
let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);