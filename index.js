window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#excuse').innerHTML = generateExcuse();
    });
};

let generateExcuse = () => {

    let who = ["My dog", "My cat", "That bird"];
    let what = ["ate", "scratched", "hide"];
    let when = ["yesterday", "before my date", "two days ago"];

    let whoRandom = Math.floor(Math.random() * (who.length));
    console.log(whoRandom);
    let whatRandom = Math.floor(Math.random() * (what.length));
    console.log(whatRandom);
    let whenRandom = Math.floor(Math.random() * (when.length));
    console.log(whenRandom);

    return who[whoRandom] + ' ' + what[whatRandom] + ' ' + when[whenRandom];
};
