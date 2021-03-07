window.onload = function() {
    setMeta();
    setHeader();
    setFooter();
}


function setMeta() {
    let metaCharset = document.createElement("meta");
    metaCharset.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(metaCharset);
    
    let metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    document.getElementsByTagName("head")[0].appendChild(metaViewport);
}


function setHeader() {
    fetch ("header.html")
        .then(response => response.text())
        .then(header => {
            document.getElementsByTagName("header")[0].innerHTML = header;
        });
}


function setFooter() {
    fetch ("footer.html")
        .then(response => response.text())
        .then(footer => {
            document.getElementsByTagName("footer")[0].innerHTML = footer;
        });
}

