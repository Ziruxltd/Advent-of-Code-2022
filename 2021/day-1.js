  document.addEventListener("DOMContentLoaded", function() {
    
    let arrayNumb = []
    function reqListener () {
        //console.log(this.responseText);
      let text = this.responseText.split("\r\n")
      let increased = 0
      let decreased = 0
      text.forEach(element => {
        arrayNumb.push(Number(element))
      });
      console.log(arrayNumb)

      for (let i=0; i < arrayNumb.length; i++){
        if (i===arrayNumb[0]){
          console.log(arrayNumb[i]+" (N/A - no previous measurment)")
        } else {
          let difference = arrayNumb[i] - arrayNumb[i-1]
          if (difference <0){
            console.log(arrayNumb[i]+" decreased")
            decreased++
          } else {
            console.log(arrayNumb[i]+" increased")
            increased++
          }
        }
      }
      console.log(increased)
      //segundo ejercicio
      let increasedPacked = 0
      let decreasedPacked = 0
      let noChange = 0
      for (let k=0; k<arrayNumb.length-3; k++){
        if (arrayNumb[k]==arrayNumb[0]){
          console.log(arrayNumb[k]+" (N/A - no previous measurment)")
        } else {
          let a = (arrayNumb[k-1]+arrayNumb[k]+arrayNumb[k+1])
          let b = (arrayNumb[k]+arrayNumb[k+1]+arrayNumb[k+2])
          console.log(a,b)
          let difference = b-a
          if (difference<0) {
            decreasedPacked++
          } else if (difference==0) {
            noChange++
          } else {
            increasedPacked++
          }
        }
      }
      console.log("segundo ejercicion increased: " + increasedPacked)
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "day-1.txt");
    oReq.send();
});

