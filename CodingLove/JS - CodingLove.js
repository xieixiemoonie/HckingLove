(function () {
    const bars = document.getElementsByClassName("matrix-bar");
    const ints = '   ♥  Coolest  '
    const alphabet1 = "-You deserve the best!-"
    const alphabet2 = '-HAPPY BIRTHDAY-'
    const alphabet3 = ' Sweetest  ♥   '
    const alphabet4 = '    Hottie pal  ♥        '
    const stringsArray = [ints, alphabet1, alphabet2, alphabet3, alphabet4]
    const stringsAsString = stringsArray.join('')

    const randomized = () => Math.floor(Math.random() * stringsAsString.length);

    const shuffleStrings = () => stringsArray.sort(() => randomized() - 3).join('');

    const sliced = () => {
        let random1 = randomized();
        const prevRandom1 = random1
        let random2 = randomized();
        if (random2 < random1) {
            random1 = random2;
            random2 = prevRandom1;
        }
        return shuffleStrings().slice(random1, random2)
    }

    const app = document.querySelector("#app");
    const matrixBar = `<div class=matrix-bar></div>`;


    for (let i = 0; i < stringsAsString.length; i++) {
        app.innerHTML += matrixBar;
        bars[i].style.opacity = (Math.random() + 0.6) * 1;
        bars[i].style.transitionDelay = Math.random() * (bars.length / 1.5) + "s";
        bars[i].style.transform = `translateZ(${Math.floor(Math.random() * window.innerWidth) + "px"})`;
        bars[i].innerHTML = shuffleStrings();
    }

    function init() {
        app.className = "is-loaded";
    }

    setTimeout(init, 10);

    setInterval(function () {
        for (let i = 0; i < stringsAsString.length; i++) {
            bars[randomized()].innerHTML = sliced() + shuffleStrings();
        }
    }, 200);
})();
