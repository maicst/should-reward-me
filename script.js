function handleRoute() {
    const route = window.location.hash;
    const contentDiv = document.getElementById('content');

    let seed = Math.floor(Math.random()*1000)
    let questionHtml = `
    <h1 id="question">should you reward yourself?</h1>
    <a id="find-out-btn" href="#/result?s=${seed}">find out</a>
    `
    let rationaleHtml = `
    <h1>random intermittent reinforcement</h1>
    <p>intermittent reinforcement is the delivery of a reward at irregular intervals, a method that has been determined to yield the greatest effort from the subject. the subject does not receive a reward each time they perform a desired behavior or according to any regular schedule but at seemingly random intervals.
    </p>
    <p class="secondary-p">check this on <a id="youtube-link" target="_blank" href="https://youtube.com/shorts/XSnSWdRR5nM?si=CS6pwsN5BgkTEC24">youtube</a>.</p>
    `

    switch (true) {
        case route === '#/':
            contentDiv.innerHTML = questionHtml;
            break;
        case route.startsWith('#/result'):
            params = {}
            paramStr = route.substring(route.indexOf('?') + 1)
            paramList = paramStr.split('&')
            paramList.forEach(element => {
                kv = element.split('=')
                params[kv[0]] = kv[1]
            });
            const seed = params["s"];
            Math.seedrandom(seed)
            rndm = Math.random()
            if(rndm < 0.5) {
                let resHtml = `
                <h1>yes</h1>
                <p>go for it! you deserve that.</p>
                `
                contentDiv.innerHTML = resHtml;
            } else {
                let resHtml = `
                <h1>nope</h1>
                <p>not this time...</p>
                `
                contentDiv.innerHTML = resHtml;
            }
            break;
        case route === '#/rationale':
            contentDiv.innerHTML = rationaleHtml;
            break
        default:
            contentDiv.innerHTML = questionHtml;
            break;
    }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
