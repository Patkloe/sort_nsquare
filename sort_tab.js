// version 1
function tri(tab){
  for(var i = 0; i < tab.length; i++){
    for(var j = i+1; j < tab.length; j++){
       if(tab[i] > tab[j]){
          let temp = tab[i];
              tab[i] = tab[j];
              tab[j] = temp;
        }
    }
  }
 return tab;
}
var tab = [1,3,5,8,4,9,7,6,2];
tri(tab);
