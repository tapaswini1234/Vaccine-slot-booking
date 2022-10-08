function Submit(){
var dataEntered=retData();
var readData=setData(dataEntered)
 insert(readData);
}
    function retData(){
     var nm=document.getElementById("name1").value;
     var ml=document.getElementById("Email1").value;
     var ag=document.getElementById("age1").value;
     var phn=document.getElementById("phone1").value;
     var adhr=document.getElementById("adhar1").value;
     var adrs=document.getElementById("adress1").value;
     var dt=document.getElementById("date1").value;

     var arr=[nm,ml,ag,phn,adhr,adrs,dt];
 return arr;
 }
 function setData(dataEntered){
    var a=localStorage.setItem("Name",dataEntered[0]);
    var b=localStorage.setItem("Email",dataEntered[1]);
   var c=localStorage.setItem("Age",dataEntered[2]);
   var d=localStorage.setItem("Phone",dataEntered[3]);
   var e=localStorage.setItem("Adhaar",dataEntered[4]);
    var f=localStorage.setItem("Address",dataEntered[5]);
    var g=localStorage.setItem("Date",dataEntered[6]);
  
  //var arr=[a,b,c,d,e,f,g];
 // return arr;

 var a1=localStorage.getItem("Name",a);
  var b1=localStorage.getItem("Email",b);
 var c1=localStorage.getItem("Age",c);
 var d1=localStorage.getItem("Phone",d);
 var e1=localStorage.getItem("Adhaar",e);
  var f1=localStorage.getItem("Address",f);
  var g1=localStorage.getItem("Date",g);

  var arr=[a1,b1,c1,d1,e1,f1,g1];
  return arr;

 }
 function insert(readData){
    var a=document.getElementById("myTable");
    var row=a.insertRow();
    row.insertCell(0).innerHTML=readData[0];
    row.insertCell(1).innerHTML=readData[1];
    row.insertCell(2).innerHTML=readData[2];;
    row.insertCell(3).innerHTML=readData[3];
    row.insertCell(4).innerHTML=readData[4];
    row.insertCell(5).innerHTML=readData[5];
    row.insertCell(6).innerHTML=readData[6];
    row.insertCell(7).innerHTML=`<button class="edit" onCLICK=edit(this)>Edit</button>
                                 <button  class="dlt" onCLICK=remove(this)>Delete</button>`;

      

 }
 function edit(td){
    var row=td.parentElement.parentElement;
    document.getElementById("name1").value=row.cells[0].innerHTML;
    document.getElementById("Email1e").value=row.cells[1].innerHTML;
    document.getElementById("age1").value=row.cells[2].innerHTML;
    document.getElementById("phone1").value=row.cells[3].innerHTML;
    document.getElementById("adhar1").value=row.cells[4].innerHTML;
    document.getElementById("adress1").value=row.cells[5].innerHTML;
    document.getElementById("date1").value=row.cells[6].innerHTML;

 }
function remove(td){
    var b=confirm("Are you sure you want to delete this record?");
    if( b==true){
        row=td.parentElement.parentElement;
        document.getElementById("myTable").deleteRow(row.rowIndex);
    }

}