let countRow = 0;

$(function () {

    $('#calculate_btn').click(function () {


        var email = $("#email").val();
        if (email) {
            $.ajax
                ({
                    url: '/generate/generate_timetable',
                    data: getDataForGenerate(email),
                    type: 'post',
                    success: function (result) {
                        alert("Данные успешно отправлены");
                        $.magnificPopup.close();
                    }
                });
        } else {
            alert("введите почту")
        }
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('#add_row_btn').click(function () {
        addRow();
    });

    for (let i = 0; i < 5; i++) {
        addRow();
    }

});


function getGroup(row) {
    var c = $("#aud-discipline").find('tr:eq(' + (row) + ')').find('td:eq(' + 2 + ')');
    var value = c.find(":input").val();
    return value;
}


function getSubject(row) {
    var c = $("#aud-discipline").find('tr:eq(' + (row) + ')').find('td:eq(' + 1 + ')');
    var value = c.find(":input").val();
    return value;
}

function getAudNumber(row) {
    var c = $("#aud-discipline").find('tr:eq(' + (row) + ')').find('td:eq(' + 0 + ')');
    var value = c.find(":input").val();
    return value;
}


// {
//     "number_audience": 101,
//     "link_flags": 0,
//     "params": [
//         {
//             "discipline": "Обществознание"
//         },
//         {
//             "discipline": "История"
//         }
// {
//     "num": 5,
//     "letter": "А"
// },
//     ]
// },

// todo по аналогии как с 4 страниццей  
function getAudiens() {
    var result = [];

    var rowCount = $('#aud-discipline tr').length;

    for (let i = 0; i < rowCount; i++) {
        var audNumber = getAudNumber(i);

        var subject = getSubject(i);
        // console.log(subject);

        // console.log(audNumber);

        var group = getGroup(i);

        console.log(group);

        if (audNumber) {
            var findObjWithAud = result.find(a => a.number_audience == audNumber);
            if (findObjWithAud) {

                addItem(findObjWithAud, subject, group);
            } else {
                var obj = {
                    number_audience: audNumber,
                    link_flags: 0,
                    params: []
                }
                addItem(obj, subject, group);

                result.push(obj)
            }
        }
        console.log(result);
    }

    return result;
}

function addItem(obj, subject, group) {
    if (subject) {
        obj.params.push({ discipline: subject });
    }
    if (group) {
        obj.params.push({ num: group.toString().charAt(0), letter: group.toString().charAt(1) });
    }
}

function addRow() {

    countRow = countRow + 1;
    id = countRow;

    let inputAudTd = "<td><input type='number' name='aud" + id + "' " + "id='aud" + id + "' " + "></td>";

    let selectGroupsTd = addSelectGroupsTd(id);

    let selectSubjectsTd = addSelectSubjects(id);

    let row = "<tr>" + inputAudTd + selectSubjectsTd + selectGroupsTd + "</tr>";

    $('#aud-discipline tr:last').after(row);
}

function addSelectGroupsTd(id) {

    var _groups = localStorage.getItem("groups");

    var groups = JSON.parse(_groups);

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

function addSelectSubjects(id) {

    var _subjects = localStorage.getItem("subjects");
    var subjects = JSON.parse(_subjects);

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

function getDataForGenerate(email) {

    var groupList = {
        second_shift: true,
        max_days: 6,
        groups: JSON.parse(localStorage.getItem("groups"))
    }

    var result = {
        client_mail: email,
        groups_list: groupList,
        audiences: getAudiens(),
        disciplines: JSON.parse(localStorage.getItem("subjects_json")),
        load_plan: JSON.parse(localStorage.getItem("loadhours")),
        pedagogs: JSON.parse(localStorage.getItem("pedagogs")),
    }

    console.log(result);

    return result;
}
