var students = []
var displayArray = []

function submit() {
    for (var i = 1; i <= 4; i++) {
        var name = document.getElementById("name" + i).value;
        students.push(name)

    }

    var length = students.length
    for (var a = 0; a < length; a++) {
        displayArray.push("<h4>name-" + students[a] + "</h4>")
    }
    var removecomma = displayArray.join(" ")
    document.getElementById("nameswithcommas").innerHTML = displayArray
    document.getElementById("nameswithoutcommas").innerHTML = removecomma
    document.getElementById("submitbutton").style.display = "none"
    document.getElementById("sortbutton").style.display = "inline-block"
}
function sort() {
    students.sort();
    var length = students.length
    var displayArraysorted=[]
    for (var a = 0; a < length; a++) {
        displayArraysorted.push("<h4>name-" + students[a] + "</h4>")

    }
    console.log (displayArraysorted)
    var removecomma = displayArraysorted.join(" ")
    document.getElementById("nameswithcommas").innerHTML = displayArraysorted
    document.getElementById("nameswithoutcommas").innerHTML = removecomma
}
function update(){
    document.getElementById("nameswithoutcommas").innerHTML="<h1>"+students+"</h1>"
}