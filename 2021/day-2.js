document.addEventListener("DOMContentLoaded", function() {
    
    let arrayNumb = []
    function reqListener () {
        //console.log(this.responseText);
        let text = this.responseText.split("\r\n")
        console.log(text)
        let rumbo = []
        text.forEach(element => {
        rumbo.push(element)
        });
        console.log(arrayNumb)

        let x = 0
        let y = 0
        let aim = 0
        rumbo.map(e => {
            instruction = e.split(" ")
            dir = instruction[0]
            num = Number(instruction[1])
            if (dir == "forward") {
                x += num
                if (aim >= 0){
                    y += aim*num
                } else {
                    if (y - (aim*num) < 0) {
                        y = 0
                    } else {
                        y -= aim*num
                    }
                }
            } else if (dir == "up") {
                aim -= num
            } else if (dir == "down") {
                aim += num
            }
        })
        console.log(x,y, x*y)

    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "day-2.txt");
    oReq.send();
});

