const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');
const scarySite = document.getElementById('scary-site');
const scarySound = document.getElementById('scary-sound');
const browserDiv = document.getElementById('browser');

function glitchEffect() {
    document.body.style.animation = "glitch 0.15s infinite";
    setTimeout(() => {
        document.body.style.animation = "";
    }, 1500);
}

function loadingDots(callback) {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.textAlign = 'center';
    loader.style.fontSize = '2em';
    loader.style.color = '#ff0000';
    document.body.appendChild(loader);

    let dots = ['', '.', '..', '...', 'loading...'];
    let i = 0;
    function nextDot() {
        loader.textContent = dots[i];
        i++;
        if (i < dots.length) {
            setTimeout(nextDot, 700);
        } else {
            setTimeout(() => {
                loader.remove();
                callback();
            }, 1200);
        }
    }
    nextDot();
}

function showResults(query) {
    if (query === "10010101110") {
        browserDiv.style.display = "none";
        resultsDiv.innerHTML = "";
        glitchEffect();
        loadingDots(() => {
            const msg = document.createElement('div');
            msg.style.textAlign = 'center';
            msg.style.marginTop = '80px';
            msg.style.color = '#ff0000';
            msg.style.fontSize = '2em';
            msg.style.textShadow = '0 0 20px #ff0000';
            msg.textContent = "we suffer more in imagination than in real life";
            document.body.appendChild(msg);
            scarySound.play();
        });
    } else {
        resultsDiv.innerHTML = `
            <h2>Search results for "${query}"</h2>
            <ul>
                <li><a href="#">${query} -->0:00 Monday</a></li>
            </ul>
        `;
    }
}

searchBtn.onclick = function() {
    showResults(searchInput.value.trim());
};

searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        showResults(searchInput.value.trim());
    }
});
