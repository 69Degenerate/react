// read()
function read() {
  fetch('https://moviespaceproj.herokuapp.com/apiread',{mode:'no-cors'})
    .then((response) => response.json())
    .then(function(data){
      console.log(data)})
}
function readone(no) {
    fetch('https://moviespaceproj.herokuapp.com/apireadone/'+no)
      .then((response) => response.json())
      .then((data) => console.log(data));
}
function searchread(char) {
    fetch('https://moviespaceproj.herokuapp.com/apisearch/'+char)
      .then((response) => response.json())
      .then((data) => console.log(data));
}
async function sdata(char){
  var f=await fetch('http://127.0.0.1:8000/apisearch/'+char);
  var data=await f.json();
  for (let index = 0; index < data.length; index++) {
    const element = data[index].name;
    const img=data[index].image;
    document.getElementById('name').innerHTML=element;
    document.getElementById("myImg").src =img
    console.log(element);
    console.log(img);
  }
  return data;
}

async function name() {
  var api= await (await fetch("http://127.0.0.1:8000/con")).json();
  var filtered = api.filter(a => a.name == "Ave");
  console.log(filtered);
}
name();