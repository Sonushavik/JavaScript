 let teas= ["green tea", "black tea ","chai", "oolong", "tea"];

 let selectedTea =[];

 for(let i=0; i<teas.lenght(); i++ ){
     if(teas[i]=="chai"){
        break;
    }
     selectedTea.push(teas[i])
 }

 console.log(selectedTea);