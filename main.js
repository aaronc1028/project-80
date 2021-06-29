var students = []
var displayArray = []

var Name_of_the_Guest_Array=[];
function Submit(){
    var Guest_Name= document.getElementById("Enter_Name").value;
    Name_of_the_Guest_Array.push(Guest_Name);
    document.getElementById("Display_names").innerHTML=Name_of_the_Guest_Array;
    console.log(Name_of_the_Guest_Array);
    var length_of_the_array=Name_of_the_Guest_Array.length;
    console.log(length_of_the_array);
}
function ShowList(){
    var i=Name_of_the_Guest_Array.join ("<br>");
    console.log(Name_of_the_Guest_Array);
    document.getElementById("showNames").innerHTML=i.toString;
}
function sortButton(){
    Name_of_the_Guest_Array.sort();
var i=Name_of_the_Guest_Array.join("<br>")
console.log (Name_of_the_Guest_Array);
document.getElementById("Sorted_names").innerHTML]=i.toString;
}
function.Search(){
    var s = document.getElementById("Search_Name").value;
    var found=0;
    var j;
    for (j=0; j<Name_of_the_Guest_Array.length; j++){
        if(s==Name_of_the_Guest_Array[j]){
            found=found+1;
        }
    }
    document.getElementById("Search_Names").innerHTML="Name Found"+found+"Time/s"
    console.log("Found Name"+found+"Time/s")
}
