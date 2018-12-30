var btn = document.getElementById("btn");
var div1 = document.getElementById("d1");
var pagecount = 1;

btn.addEventListener("click",function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pagecount +'.json');
  ourRequest.onload = function(){
    var OurData = JSON.parse(ourRequest.responseText);
    renderHTML(OurData);
  }
  ourRequest.send();
  pagecount++;
  if(pagecount>3){
    btn.classList.add("hide-me")
  }
});

function renderHTML(data){
  var str = "";
  for (i = 0; i < data.length; i++){
      str += "<p>" + data[i].name + "is as " + data[i].species + "</p>";
  }
  div1.insertAdjacentHTML('beforeend', str);
}
