document.addEventListener("DOMContentLoaded", function() {
    
    let arrayNumb = []
    function reqListener () {
        //console.log(this.responseText);
        let text    = this.responseText;
        splitedByLine = text.split(/\r?\n/);
        bingoNumbers = splitedByLine[0].split(",");

        
        
        rawBingoBoards = []
        for (let i=2; i<splitedByLine.length; i++) {
            rawBingoBoards.push(splitedByLine[i]);
        }
        console.log(rawBingoBoards);
        boardsLines = []

        for (line of rawBingoBoards) {
            if (line !== "") {
                boardsLines.push(line)
            }
        }
        console.log(boardsLines)

        






    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "day-4.txt");
    oReq.send();
});

