window.onload = function() {
    fetch ("footer.html")
        .then(response => response.text())
        .then(footer => {
            document.getElementsByTagName("footer")[0].innerHTML = footer
        });
}
