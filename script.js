
function copyIP() {
    const ip = "asterra.20tps.ru";
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(ip).then(() => {
            alert("IP сервера скопирован: " + ip);
        }).catch(() => {
            fallbackCopy(ip);
        });
    } else {
        fallbackCopy(ip);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert("IP сервера скопирован: " + text);
    } catch (err) {
        alert("Не удалось скопировать IP. Скопируйте вручную: " + text);
    }
    document.body.removeChild(textArea);
}