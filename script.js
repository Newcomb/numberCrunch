var list = [11,4,41,50,7,19,8,18,2,6,43,20,43,2,23,31,29];
var len = list.length;
var getSum = function(total, num){
  return total + num;
}
var getReduced = function(item)
{
  document.getElementById("reduce").innerHTML = list.reduce(getSum);
}
getReduced
