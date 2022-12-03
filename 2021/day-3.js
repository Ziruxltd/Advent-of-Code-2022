document.addEventListener("DOMContentLoaded", function() {
    
    let arrayNumb = []
    function reqListener () {
        //console.log(this.responseText);
        let text    = this.responseText.split("\r\n")
        let gamma   = []
        let epsilon = []
        for (let k=0; k<text[0].length; k++){
            let ones    = 0
            let zeros   = 0
            for (let i=0; i<text.length; i++){
                if(text[i][k]==1){
                    ones++
                } else {
                    zeros++
                }  
            }
            if (ones>zeros){
                gamma.push(1)
                epsilon.push(0)
            } else {
                gamma.push(0)
                epsilon.push(1)
            }
            //console.log(ones,zeros)
        }                 
        console.log(gamma,epsilon)
        let gammaResult   = parseInt(gamma.join(""),2)
        let epsilonResult = parseInt(epsilon.join(""),2)
        console.log("Consumption: "+(gammaResult*epsilonResult))  
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "day-3.txt");
    oReq.send();
});

