window.onload = function() {
    fetch ("footer.html")
        .then(response => response.text())
        .then(footer => {
            document.getElementByTagName("footer")[0].innerHTML = footer
        });
}
