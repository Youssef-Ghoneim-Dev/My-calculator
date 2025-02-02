let screen_text = document.querySelector(".screen .text");
let screen_result = document.querySelector(".screen .result")
let button = document.querySelectorAll(".div-button button")
let lock = document.querySelector(".lockp")
let Ans1 = 0;

for (const element of button) {
    if (element.value != "Del" && element.value != "AC" && element.value != "="&& element.value != "Ans") {
        element.addEventListener("click", function() {
            screen_text.innerHTML += this.value;
        });
    }
    else if (element.value == "Del"){
        element.addEventListener("click", function() {
            let text = screen_text.textContent
            if (!text.includes("Ans")) {
                screen_text.innerHTML = screen_text.innerHTML.slice(0, -1);
                screen_result.innerHTML = "";
            }
            else{
                if (text.endsWith("Ans")) {
                    let text2 = screen_text.textContent
                    let i = "Ans"
                    text2 = text2.replace(i,"")
                    screen_text.innerHTML = "";
                    screen_result.innerHTML = "";
                    screen_text.innerHTML = text2;
                }
                else{
                    screen_text.innerHTML = screen_text.innerHTML.slice(0, -1);
                    screen_result.innerHTML = "";
                }
            }
        });
    }
    else if (element.value == "AC"){
        element.addEventListener("click", function() {
            screen_text.innerHTML = "";
            screen_result.innerHTML = "";
        });
    }
    else if (element.value == "="){
        element.addEventListener("click", function() {
            let text = screen_text.textContent;
            if (text.includes("×") || text.includes("÷") || text.includes("Ans")) {
                text = text.replace(/×/g, "*");
                text = text.replace(/÷/g, "/");
                let s = screen_text.innerHTML.slice(0, -3);
                if (s.endsWith("×" || "÷" || "+" || "-" )) {
                    text = text.replace("Ans", Ans1);
                }else{
                    text = text.replace("Ans", "*" + Ans1);
                }
            }
            try {
                screen_result.innerHTML = eval(text);
                Ans1 = screen_result.textContent;
                let result = parseFloat(screen_result.textContent);
                if (isNaN(result) || result === Infinity || result === -Infinity) {
                    screen_result.innerHTML = "Math Error";
                }
            }
            catch (error) {
                screen_result.innerHTML = "Math Error";
            }
        });
    }
    else if (element.value == "Ans"){
        element.addEventListener("click", function() {
            screen_text.innerHTML += "Ans";
        })
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        screen_text.innerHTML += "1";
    }
    else if (event.key === '2') {
        screen_text.innerHTML += "2";
    }
    else if (event.key === '3') {
        screen_text.innerHTML += "3";
    }
    else if (event.key === '4') {
        screen_text.innerHTML += "4";
    }
    else if (event.key === '5') {
        screen_text.innerHTML += "5";
    }
    else if (event.key === '6') {
        screen_text.innerHTML += "6";
    }
    else if (event.key === '7') {
        screen_text.innerHTML += "7";
    }
    else if (event.key === '8') {
        screen_text.innerHTML += "8";
    }
    else if (event.key === '9') {
        screen_text.innerHTML += "9";
    }
    else if (event.key === '0') {
        screen_text.innerHTML += "0";
    }
    else if (event.key === '+') {
        screen_text.innerHTML += "+";
    }
    else if (event.key === '-') {
        screen_text.innerHTML += "-";
    }
    else if (event.key === '*') {
        screen_text.innerHTML += "×";
    }
    else if (event.key === '/') {
        screen_text.innerHTML += "÷";
    }
    else if (event.key === '=') {
            let text = screen_text.textContent;
            if (text.includes("×") || text.includes("÷") || text.includes("Ans")) {
                text = text.replace(/×/g, "*");
                text = text.replace(/÷/g, "/");
                let s = screen_text.innerHTML.slice(0, -3);
                if (s.endsWith("×" || "÷" || "+" || "-" )) {
                    text = text.replace("Ans", Ans1);
                }else{
                    text = text.replace("Ans", "*" + Ans1);
                }
            }
            try {
                screen_result.innerHTML = eval(text);
                Ans1 = screen_result.textContent;
                let result = parseFloat(screen_result.textContent);
                if (isNaN(result) || result === Infinity || result === -Infinity) {
                    screen_result.innerHTML = "Math Error";
                }
            }
            catch (error) {
                screen_result.innerHTML = "Math Error";
            }
    }
    else if (event.key === 'Backspace') {
        let text = screen_text.textContent
        if (!text.includes("Ans")) {
            screen_text.innerHTML = screen_text.innerHTML.slice(0, -1);
            screen_result.innerHTML = "";
        }
        else{
            if (text.endsWith("Ans")) {
                let text2 = screen_text.textContent
                let i = "Ans"
                text2 = text2.replace(i,"")
                screen_text.innerHTML = "";
                screen_result.innerHTML = "";
                screen_text.innerHTML = text2;
            }
            else{
                screen_text.innerHTML = screen_text.innerHTML.slice(0, -1);
                screen_result.innerHTML = "";
            }
        }
    }
    else if (event.key === 'Enter') {
        screen_text.innerHTML = "";
        screen_result.innerHTML = "";
    }
    else if (event.key === ' ') {
        screen_text.innerHTML = "";
        screen_result.innerHTML = "";
    }
    else if (event.key === 'Alt') {
        screen_text.innerHTML += "Ans";
    }
    else {
        let set = setInterval(() => {
            lock.style.display = "flex"
            lock.innerHTML = `
            <div class="lock">Please enter numbers only</div>`
        }, 10);
        setTimeout(() => {
            clearInterval(set);
            lock.style.display = "none";
            lock.innerHTML = "";
        }, 2000);
    }
});