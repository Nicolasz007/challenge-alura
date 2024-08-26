function encrypt() {
    let text = document.getElementById("input-text").value;
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    displayResult(encryptedText);
}

function decrypt() {
    let text = document.getElementById("input-text").value;
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    displayResult(decryptedText);
}

function displayResult(text) {
    document.getElementById("imagem").style.display = "none";
    document.getElementById("no-message-title").style.display = "none";
    document.getElementById("no-message-text").style.display = "none";
    document.getElementById("result-text").style.display = "block";
    document.getElementById("result-text").textContent = text;
    document.getElementById("copy-button").style.display = "inline-block";
    document.getElementById("clear-button").style.display = "inline-block";
}

function clearText() {
    document.getElementById("input-text").value = "";
    document.getElementById("imagem").style.display = "block";
    document.getElementById("no-message-title").style.display = "block";
    document.getElementById("no-message-text").style.display = "block";
    document.getElementById("result-text").style.display = "none";
    document.getElementById("copy-button").style.display = "none";
    document.getElementById("clear-button").style.display = "none";
}

function copyText() {
    let text = document.getElementById("result-text").textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}
