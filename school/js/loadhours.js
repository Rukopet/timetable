$(function() {

    console.log("hello loadhour");

    var groups = localStorage.getItem("groups");


    var subjects = localStorage.getItem("subjects");
     var  _subjects = JSON.parse(subjects);


    var _groups =  JSON.parse(groups);
    console.log(_groups);

    generateTable(_subjects, _groups);


    $("#loadhours_next_btn").click(function() { 
            
       
        // var json = JSON.stringify(groupsArray);    

        // localStorage.setItem("groups", json);
        
        // if (groupsArray.length === 0) {
        //     alert("Не выбрали классы");
        // } else {
        //     window.location.href = "./frame2.html";
        // }

        window.location.href = "./frame4.html";
    })
});

// example 
// [
//     {
//       "num": 1,
//       "letter": "А",
//       "discipline": [
//         {
//           "discipline": "Русский язык",
//           "load": 4
//         },
function generateJson(){
    var result = [];

    var obj = {}
    obj.num = "";
    obj.letter = "";

    $("#tableSubjects tr").each(function () {

        $('td', this).each(function () {
            var value = $(this).find(":input").val();
            
            if(value) {

                console.log($(this));

                var cellIndex = $(this)[0].cellIndex;

                // по свойствам td можно
                // определить класс и дисциплаину по шапке таблицы и по первой колонке
                console.log(cellIndex);

                result.push({
                    num: 1,
                    letter: "",
                    discipline: [
                                {
                                  "discipline": "Русский язык",
                                  "load": value
                                }]
                            });

                            console.log(value);
            }                        
         })
    
    })
}

// google - add table row foreach jquery
function generateTable(subjects, groups){

    addFirstRow(groups);
    var inputRow = getInputRow(groups);

    for (var i = 0; i < subjects.length; i++ ) {

        var subject = subjects[i];
        var tr_var ="<tr><td> " + subject + "</td>" + inputRow + "</tr>";

        $(tr_var).appendTo('#tableSubjects');
    }
}

function addFirstRow(groups) {

    var head = "";
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        head += "<td> " + group.number + group.count + "</td>"
    }

    var p = "Предметы"
    console.log(head);
    var tr_var ="<tr><td> " + p + "</td>" + head + "</tr>";

    $(tr_var).appendTo('#tableSubjects');
}

function getInputRow(groups){
    var row = "";
    for (let i = 0; i < groups.length; i++) {
        row += "<td> <input type='number'></td>"
    }
    return row;
}