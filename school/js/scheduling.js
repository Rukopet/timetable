$(function() {

    console.log("hello loadhour");

    var groups = localStorage.getItem("groups");


    var subjects = localStorage.getItem("subjects");
     var  _subjects = JSON.parse(subjects);


    var _groups =  JSON.parse(groups);
    console.log(_groups);

    for (let i = 0; i < 10; i++) {
        addRow(i, _groups, _subjects);    
    }

});


function addRow(id, groups, subjects){

    let inputTd = "<td><input type='text' name='teacher'" + id + "' " + "id='teacher'" + id + "' " + "></td>";

    let selectGroupsTd = addSelectGroups(id, groups);

    let selectSubjectsTd = addSelectSubjects(id, subjects);

    let row = "<tr>"+ inputTd + selectGroupsTd + selectSubjectsTd + "</tr>";

    $('#teacher-discipline tr:last').after(row);
}

function addSelectGroups(id, groups) {
    let options = "";

    for (var i = 0; i < groups.length; i++ ) {

        var group = groups[i];
        var tr_var ="<tr><td> " + subject + "</td>" + inputRow + "</tr>";

        //$(tr_var).appendTo('#tableSubjects');
    }
}

function addSelectSubjects(id, subjects){
    
    let options = "";

    for (var i = 0; i < subjects.length; i++ ) {

        var subject = subjects[i];
        var tr_var ="<tr><td> " + subject + "</td>" + inputRow + "</tr>";

        //$(tr_var).appendTo('#tableSubjects');
    }
}