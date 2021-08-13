// Sayılar seçiliyor
const minuteText = document.querySelector(".minute");
const secondText = document.querySelector(".second");
// Butonlar seçiliyor
const start = document.querySelector(".start-btn");
const reset = document.querySelector(".reset-btn");

// element seçiliyor
const parentMessages = document.querySelector(".info-messages");
//Integer'a dönüştürülüyor
let minute = parseInt(minuteText.textContent);
let second = parseInt(secondText.textContent);

start.addEventListener("click", startCounter); // counter başlatır
reset.addEventListener("click", resetCounter); // reset başlatır

function startCounter() {
    console.log("Counter working...");
    addMessageToUI("message-info", "Sayaç başlatıldı! Yumurtaları tencereye koyun."); // Web sitesine uyarı mesajı yazdırır
    second = 60;

    let timer = setInterval(() => {
        --second;
        secondText.innerHTML = second;

        if (minute == 0 && second == 0) { // sayacı durdurmak için koşul
            console.log("Counter stopped!");
            addMessageToUI("message-alert", "Sayaç bitti! Yumurtaları tencereden çıkarın.");
            clearInterval(timer);
        }
        if (second == 0) { // saniye her sıfır olduğunda bir dk azalır ve 60 saniye eklenir
            second = 60;
            minuteText.innerHTML = minute;
            --minute;
            console.log(minute);
        }
    }, 1000);
}

function resetCounter() {
    location.reload();
}

// Bilgi mesajları eklemek için
function addMessageToUI(type, message) { // Web sitesine uyarı mesajları yazdırır
    // Web sitesine yazdırılan örnek html kodu
    /* <div class="message-alert">
    <i class="fas fa-info-circle"></i>  
    Sayaç başlatıldı
</div> */
    let htmlMessage = `<div class="${type}">
    <i class="fas fa-info-circle"></i>
    ${message}
    </div>`;
    parentMessages.innerHTML = htmlMessage;

    let setTime = setInterval(() => {
        parentMessages.removeChild(parentMessages.firstChild);
        clearInterval(setTime);
    }, 5000);
}