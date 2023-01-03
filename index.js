const statsArr = [12021, 103, 1337];

const statsContainerEl = document.querySelectorAll('.stats-container');

for (const [index, el] of statsContainerEl.entries()) {
    increaseStats(el, statsArr[index]);
}

function increaseStats (htmlEl, number) {
    const counterEl = htmlEl.querySelector('p');
    const percentNum = Math.floor(number / 100);
    let counter = 0;
    const clearObj = setInterval(() => {
        counter += percentNum;
        counterEl.innerText = counter;
        if (counter + percentNum >= number) {
            counter += number - counter;
            counterEl.innerText = counter;
            clearInterval(clearObj);
        }
    }, 30);
}