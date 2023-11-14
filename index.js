// fill in javascript code here
let myform=document.querySelector("form")
let name=document.getElementById("name");
let docId=document.getElementById("docID");
let department=document.getElementById("dept");
let experience=document.getElementById("exp");
let email=document.getElementById("email");
let mobile=document.getElementById("mbl");
let tbody=document.querySelector("tbody");

let Alldata=[]
myform.addEventListener("submit",function(e){
  e.preventDefault();
  let data={};

  data.name=name.value;
  data.docId=docId.value;
  data.department=department.value;
  data.experience=experience.value;
  data.email=email.value;
  data.mobile=mobile.value;
  data.role=determinerole(experience.value)
 Alldata.push(data);
//  console.log(Alldata)

function determinerole(experience){
if(experience>5){
    return "Senior"
}
if(experience>=2&&experience<=5){
return "Junior"
}
if(experience>=1){
    return "Trainee"
}
}


tbody.innerHTML=null
Alldata.map((ele)=>{
    let row=document.createElement("tr")
let td1=document.createElement("td")
let td2=document.createElement("td")
let td3=document.createElement("td")
let td4=document.createElement("td")
let td5=document.createElement("td")
let td6=document.createElement("td")
let td7=document.createElement("td")
let td8=document.createElement("td")
let button =document.createElement("button");

td1.innerText=ele.name;
td2.innerText=ele.docId;
td3.innerText=ele.department;
td4.innerText=ele.experience;
td5.innerText=ele.email;
td6.innerText=ele.mobile;
td7.innerText=ele.role;
button.innerText="Delete"
button.addEventListener("click",function(){
  row.innerHTML=null  
})
td8.innerText;



td8.append(button)
row.append(td1,td2,td3,td4,td5,td6,td7,td8)
tbody.append(row)

const allRows = document.querySelectorAll('tbody tr');
allRows.forEach((row, index) => {
  if (index % 2 !== 0) {
    row.style.backgroundColor = "rgb(40, 128, 204)"; // Change the color as needed
  }
});

})

})

