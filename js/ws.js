ws = new WebSocket("wss://play.levshx.com/ws")

ws.onopen = function () {
    alert("Соединение установлено.");
    ws.send("Петушара")
};

ws.onclose = function (event) {
    if (event.wasClean) {
        alert('Соединение закрыто чисто');
    } else {
        alert('Обрыв соединения'); // например, "убит" процесс сервера
    }
    alert('Код: ' + event.code + ' причина: ' + event.reason);
};

ws.onmessage = function (event) {
    alert("Получены данные " + event.data);
};

ws.onerror = function (error) {
    alert("Ошибка " + error.message);
};      
