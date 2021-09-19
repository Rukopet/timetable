$(function () {

    console.log("hello loadhour");
    var groups = localStorage.getItem("groups");

    var subjects = localStorage.getItem("subjects");
    var _subjects = JSON.parse(subjects);
    
    var _groups = JSON.parse(groups);
    console.log(_groups);

    generateTable(_subjects, _groups);

    $("#loadhours_next_btn").click(function () {

        var result = getJson();

        if(result.length > 0) {

            var json = JSON.stringify(result);    

            localStorage.setItem("loadhours", json);

            window.location.href = "./frame4.html";
        } else {
            alert("не заполнили нагрузку")
        }                
    })
});

function getSubjectByCell(row) {
    var c = $("#tableSubjects").find('tr:eq(' + (row - 1) + ')').find('td:eq(' + 0 + ')');
    return c.text().trim();
}

function getGroupByCell(column) {
    var c = $("#tableSubjects").find('tr:eq(' + 0 + ')').find('td:eq(' + column + ')');
    return c.text().trim();
}

// example https://github.com/Rukopet/timetable/blob/utils/timetable_genetic_algorithm/data_for_test/load_plan.json
function getJson() {
    var result = [];

    var obj = {}
    obj.num = "";
    obj.letter = "";

    $("#tableSubjects tr").each(function () {

        $('td', this).each(function () {
            var value = $(this).find(":input").val();

            if (value) {
            
                var col = $(this).parent().children().index($(this));
                var row = $(this).parent().parent().children().index($(this).parent());            

                var subject = getSubjectByCell(row);                
                var group = getGroupByCell(col).trim();                
                
                result.push({
                    num: group.toString().charAt(0),
                    letter: group.toString().charAt(1),
                    discipline: [
                        {
                            "discipline": subject,
                            "load": value
                        }]
                });                
            }
        })

    })

    console.log(result);
    return result;
}

// google - add table row foreach jquery
function generateTable(subjects, groups) {

    addFirstRow(groups);
    var inputRow = getInputRow(groups);

    for (var i = 0; i < subjects.length; i++) {

        var subject = subjects[i];
        var tr_var = "<tr><td> " + subject + "</td>" + inputRow + "</tr>";

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
    var tr_var = "<tr><td> " + p + "</td>" + head + "</tr>";

    $(tr_var).appendTo('#tableSubjects');
}

function getInputRow(groups) {
    var row = "";
    for (let i = 0; i < groups.length; i++) {
        row += "<td> <input type='number' min=0></td>"
    }
    return row;
}