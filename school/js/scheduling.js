$(function () {

    console.log("hello loadhour");

    var groups = localStorage.getItem("groups");


    var subjects = localStorage.getItem("subjects");
    var _subjects = JSON.parse(subjects);


    var _groups = JSON.parse(groups);
    console.log(_groups);

    for (let i = 0; i < 200; i++) {
        addRow(i, _groups, _subjects);
    }

    $("#pedagogs_next_btn").click(function () {

        var result = getJson();

        if (result.length > 0) {

            var json = JSON.stringify(result);

            localStorage.setItem("pedagogs", json);

            window.location.href = "./frame5.html";
        } else {
            alert("не заполнили распределние между педагогами")
        }
    })

});

function getPedagogName(row) {
    var c = $("#teacher-discipline").find('tr:eq(' + (row) + ')').find('td:eq(' + 0 + ')');
    var value = c.find(":input").val();
    return value;
}

function getSubject(row) {
    var c = $("#teacher-discipline").find('tr:eq(' + (row) + ')').find('td:eq(' + 1 + ')');
    var value = c.find(":input").val();
    return value;
}

function getGroup(row) {
    var c = $("#teacher-discipline").find('tr:eq(' + (row) + ')').find('td:eq(' + 2 + ')');
    var value = c.find(":input").val();
    return value;
}

function getJson() {
    var result = [];
    var rowCount = $('#teacher-discipline tr').length;

    for (let i = 0; i < rowCount; i++) {
        var pedagogName = getPedagogName(i);

        if (pedagogName) {
            console.log(pedagogName);

            var subject = getSubject(i);
            var group = getGroup(i).trim();

            if (!subject || !group) {
                continue;
            }

            result.push({
                ped_name: pedagogName,
                disciplines: [
                    {
                        "discipline": subject,
                        "groups": [
                            {
                                num: group.toString().charAt(0),
                                letter: group.toString().charAt(1),
                            }

                        ]
                    }]
            });
        }
    }

    // "disciplines": [
    //     {
    //       "discipline": "Русский язык",
    //       "groups": [
    //         {
    //           "num": 1,
    //           "letter": "А"
    //         }
    //       ]
    //     },

    console.log(result);
    return result;
}


function addRow(id, groups, subjects) {

    let inputTd = "<td><input type='text' name='teacher" + id + "' " + "id='teacher" + id + "' " + "></td>";

    let selectGroupsTd = addSelectGroupsTd(id, groups);

    let selectSubjectsTd = addSelectSubjects(id, subjects);

    let row = "<tr>" + inputTd + selectSubjectsTd + selectGroupsTd + "</tr>";

    $('#teacher-discipline tr:last').after(row);
}

function addSelectGroupsTd(id, groups) {

    let optionsSelect = "<option>-</option>";

    for (var i = 0; i < groups.length; i++) {
        var group = groups[i].number + groups[i].count;
        optionsSelect += "<option>" + group + "</option>";
    }

    var select = "<select class='group-teach" + id + "' " + " id='group-teach'" + id + "' " + " name='group-teach" + id + "' " + ">"

    var endSelect = " </select>";

    var result = "<td>" + select + optionsSelect + endSelect + "</td>";

    return result;
}

function addSelectSubjects(id, subjects) {

    let optionsSelect = "<option>-</option>";

    for (var i = 0; i < subjects.length; i++) {

        var subject = subjects[i];
        optionsSelect += "<option>" + subject + "</option>";
    }

    var select = "<select class='discipline-teach" + id + "' " + " id='discipline-teach'" + id + "' " + " name='discipline-teach" + id + "' " + ">"

    var endSelect = " </select>";

    var result = "<td>" + select + optionsSelect + endSelect + "</td>";

    return result;
}