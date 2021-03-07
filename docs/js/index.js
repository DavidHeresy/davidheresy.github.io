window.onload = function() {
    setHead();
    setTitle();
    setHeader();
    setFooter();
}


function setHead() {
    fetch ("https://davidheresy.de/html/head.html")
        .then(response => response.text())
        .then(head => {
            document.getElementsByTagName("head")[0].innerHTML += head;
        });
}


function setTitle() {
    let h1 = document.getElementsByTagName("h1")[0];
    document.title = h1.innerHTML + " • davidheresy.de";
}


function setHeader() {
    fetch ("https://davidheresy.de/html/header.html")
        .then(response => response.text())
        .then(header => {
            let body = document.getElementsByTagName("body")[0];
            body.innerHTML = header + body.innerHTML;
        });
}


function setFooter() {
    fetch ("https://davidheresy.de/html/footer.html")
        .then(response => response.text())
        .then(footer => {
            let body = document.getElementsByTagName("body")[0];
            body.innerHTML = body.innerHTML + footer;
        });
}

