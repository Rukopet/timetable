$(function() {

    console.log("hello loadhour");

    var groups = localStorage.getItem("groups");


    var subjects = localStorage.getItem("subjects");
     var  _subjects = JSON.parse(subjects);


    var _groups =  JSON.parse(groups);
    console.log(_groups);

    for (let i = 0; i < 200; i++) {
        addRow(i, _groups, _subjects);    
    }

});


function addRow(id, groups, subjects){

    let inputTd = "<td><input type='text' name='aud" + id + "' " + "id='aud" + id + "' " + "></td>";

    let selectGroupsTd = addSelectGroupsTd(id, groups);

    let selectSubjectsTd = addSelectSubjects(id, subjects);

    let row = "<tr>"+ inputTd  + selectSubjectsTd + selectGroupsTd + "</tr>";

    $('#aud-discipline tr:last').after(row);
}

function addSelectGroupsTd(id, groups) {
    
    let optionsSelect  = "<option>-</option>";

    for (var i = 0; i < groups.length; i++ ) {
        var group = groups[i].number + groups[i].count;        
        optionsSelect += "<option>" + group + "</option>";        
    }

    var select = "<select class='group-aud" + id + "' " + " id='group-aud'" + id + "' " + " name='group-aud" + id + "' " + ">"

    var endSelect = " </select>";

    var result = "<td>"+ select + optionsSelect + endSelect +"</td>";

    return result;
}

function addSelectSubjects(id, subjects){
    
    let optionsSelect  = "<option>-</option>";

    for (var i = 0; i < subjects.length; i++ ) {

        var subject = subjects[i];
        optionsSelect += "<option>" + subject + "</option>";     
    }

    var select = "<select class='discipline-aud" + id + "' " + " id='discipline-aud'" + id + "' " + " name='discipline-aud" + id + "' " + ">"

    var endSelect = " </select>";

    var result = "<td>"+ select + optionsSelect + endSelect +"</td>";

    return result;
}