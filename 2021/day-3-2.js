document.addEventListener("DOMContentLoaded", function() {
    
    let arrayNumb = []
    function reqListener () {
        //console.log(this.responseText);
        let text    = this.responseText.split("\r\n")
        let text2    = this.responseText.split("\r\n")
        let count   = 0
        
        for (let i = 0; i!==1; i=i+0) {

            let finish1 = []
            let finish2 = []
                
            let ones    = 0
            let zeros   = 0
            text.map(num => {
                if(num[count]==1) {
                    ones++
                finish1.push(num)
            } else {
                zeros++
                finish2.push(num)
            }
            })
            
            if (ones > zeros || ones == zeros) {
                text = finish1
            } else {
                text = finish2
            }
            count++
            i=text.length
        }
        let o2gen = parseInt(text,2)
        console.log(o2gen)

        let cont   = 0
        
        for (let k = 0; k!==1; k=k+0) {

            let finish1 = []
            let finish2 = []
            
            let ones    = 0
            let zeros   = 0
            text2.map(num => {
                if(num[cont]==1) {
                    ones++
                finish1.push(num)
            } else {
                zeros++
                finish2.push(num)
            }
        })
        
        if (zeros < ones || ones == zeros) {
            text2 = finish2
        } else {
            text2 = finish1
        }
        cont++
        k=text2.length
    }
    let co2 = parseInt(text2,2)
    console.log(co2)  

    console.log("diferencia O2 y CO2 "+(o2gen*co2))

    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "day-3.txt");
    oReq.send();
});

