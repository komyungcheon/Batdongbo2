function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown(i) {
    while (i >= 0) {
        document.getElementById('result').innerHTML = i.toFixed(2);
        i-=0.01;
        await sleep(10);
    }
    return "End";
}
let click = false;
function clickBtn() {
    if(!click){
        click = true;
        let value = +document.getElementById("inputsogiay").value
        countDown(value).then((msg) => {
            document.getElementById('result').innerHTML = msg
            click = false;
        });
    }

}
