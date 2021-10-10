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

function getAudiens() {
    return [
        {
            "number_audience": 101,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Обществознание"
                },
                {
                    "discipline": "История"
                }
            ]
        },
        {
            "number_audience": 102,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Математика"
                }
            ]
        },
        {
            "number_audience": 103,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Математика"
                }
            ]
        },
        {
            "number_audience": 104,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Математика"
                }
            ]
        },
        {
            "number_audience": 105,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "География"
                }
            ]
        },
        {
            "number_audience": 107,
            "link_flags": 1,
            "params": [
                {
                    "discipline": "Информатика"
                },
                {
                    "discipline": "Информатика (гр1)"
                },
                {
                    "discipline": "Информатика (гр2)"
                },
                {
                    "discipline": "Иностранный язык (гр1)"
                },
                {
                    "discipline": "Иностранный язык (гр2)"
                },
                {
                    "discipline": "Иностранный язык"
                }
            ]
        },
        {
            "number_audience": 108,
            "link_flags": 1,
            "params": [
                {
                    "discipline": "Иностранный язык (гр1)"
                },
                {
                    "discipline": "Иностранный язык (гр2)"
                },
                {
                    "discipline": "Иностранный язык"
                }
            ]
        },
        {
            "number_audience": 109,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Музыка"
                }
            ]
        },
        {
            "number_audience": 110,
            "link_flags": 1,
            "params": [
                {
                    "discipline": "Технология (мал)"
                }
            ]
        },
        {
            "number_audience": 111,
            "link_flags": 1,
            "params": [
                {
                    "discipline": "Технология (дев)"
                }
            ]
        },
        {
            "number_audience": 201,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Математика"
                }
            ]
        },
        {
            "number_audience": 205,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Биология"
                }
            ]
        },
        {
            "number_audience": 206,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Химия"
                }
            ]
        },
        {
            "number_audience": 208,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Обществознание"
                },
                {
                    "discipline": "История"
                }
            ]
        },
        {
            "number_audience": 209,
            "link_flags": 0,
            "params": null
        },
        {
            "number_audience": 210,
            "link_flags": 0,
            "params": null
        },
        {
            "number_audience": 211,
            "link_flags": 1,
            "params": [
                {
                    "discipline": "Информатика"
                },
                {
                    "discipline": "Информатика (гр1)"
                },
                {
                    "discipline": "Информатика (гр2)"
                },
                {
                    "discipline": "Иностранный язык (гр1)"
                },
                {
                    "discipline": "Иностранный язык (гр2)"
                },
                {
                    "discipline": "Иностранный язык"
                }
            ]
        },
        {
            "number_audience": 213,
            "link_flags": 2,
            "params": [
                {
                    "num": 1,
                    "letter": "А"
                }
            ]
        },
        {
            "number_audience": 214,
            "link_flags": 2,
            "params": [
                {
                    "num": 1,
                    "letter": "Б"
                }
            ]
        },
        {
            "number_audience": 215,
            "link_flags": 2,
            "params": [
                {
                    "num": 1,
                    "letter": "В"
                }
            ]
        },
        {
            "number_audience": 216,
            "link_flags": 2,
            "params": [
                {
                    "num": 1,
                    "letter": "Г"
                }
            ]
        },
        {
            "number_audience": 217,
            "link_flags": 2,
            "params": [
                {
                    "num": 2,
                    "letter": "А"
                },
                {
                    "num": 3,
                    "letter": "А"
                }
            ]
        },
        {
            "number_audience": 218,
            "link_flags": 2,
            "params": [
                {
                    "num": 2,
                    "letter": "Б"
                },
                {
                    "num": 3,
                    "letter": "Б"
                }
            ]
        },
        {
            "number_audience": 219,
            "link_flags": 1,
            "params": [
                {
                    "discipline": "Иностранный язык (гр1)"
                },
                {
                    "discipline": "Иностранный язык (гр2)"
                },
                {
                    "discipline": "Иностранный язык"
                }
            ]
        },
        {
            "number_audience": "Сп.зал(б.)",
            "link_flags": 3,
            "params": [
                {
                    "discipline": "Физкультура"
                },
                {
                    "discipline": "Физкультура (мал)"
                },
                {
                    "num": 5,
                    "letter": "А"
                },
                {
                    "num": 5,
                    "letter": "Б"
                },
                {
                    "num": 5,
                    "letter": "В"
                },
                {
                    "num": 6,
                    "letter": "А"
                },
                {
                    "num": 6,
                    "letter": "Б"
                },
                {
                    "num": 6,
                    "letter": "В"
                },
                {
                    "num": 6,
                    "letter": "Г"
                },
                {
                    "num": 7,
                    "letter": "А"
                },
                {
                    "num": 7,
                    "letter": "Б"
                },
                {
                    "num": 7,
                    "letter": "В"
                },
                {
                    "num": 7,
                    "letter": "Г"
                },
                {
                    "num": 8,
                    "letter": "А"
                },
                {
                    "num": 8,
                    "letter": "Б"
                },
                {
                    "num": 8,
                    "letter": "В"
                },
                {
                    "num": 9,
                    "letter": "А"
                },
                {
                    "num": 9,
                    "letter": "Б"
                },
                {
                    "num": 9,
                    "letter": "В"
                },
                {
                    "num": 10,
                    "letter": "А"
                },
                {
                    "num": 11,
                    "letter": "А"
                }
            ]
        },
        {
            "number_audience": "Сп.зал(м.)",
            "link_flags": 3,
            "params": [
                {
                    "discipline": "Физкультура"
                },
                {
                    "discipline": "Физкультура (дев)"
                },
                {
                    "num": 1,
                    "letter": "А"
                },
                {
                    "num": 1,
                    "letter": "Б"
                },
                {
                    "num": 1,
                    "letter": "В"
                },
                {
                    "num": 1,
                    "letter": "Г"
                },
                {
                    "num": 2,
                    "letter": "А"
                },
                {
                    "num": 2,
                    "letter": "Б"
                },
                {
                    "num": 2,
                    "letter": "В"
                },
                {
                    "num": 2,
                    "letter": "Г"
                },
                {
                    "num": 3,
                    "letter": "А"
                },
                {
                    "num": 3,
                    "letter": "Б"
                },
                {
                    "num": 3,
                    "letter": "В"
                },
                {
                    "num": 3,
                    "letter": "Г"
                },
                {
                    "num": 4,
                    "letter": "А"
                },
                {
                    "num": 4,
                    "letter": "Б"
                },
                {
                    "num": 4,
                    "letter": "В"
                },
                {
                    "num": 4,
                    "letter": "Г"
                },
                {
                    "num": 11,
                    "letter": "А"
                }
            ]
        },
        {
            "number_audience": 301,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "ОБЖ"
                }
            ]
        },
        {
            "number_audience": 305,
            "link_flags": 1,
            "params": [
                {
                    "discipline": "Иностранный язык (гр1)"
                },
                {
                    "discipline": "Иностранный язык (гр2)"
                },
                {
                    "discipline": "Иностранный язык"
                }
            ]
        },
        {
            "number_audience": 308,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Физика"
                }
            ]
        },
        {
            "number_audience": 309,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Русский язык"
                },
                {
                    "discipline": "Литература"
                }
            ]
        },
        {
            "number_audience": 310,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Русский язык"
                },
                {
                    "discipline": "Литература"
                }
            ]
        },
        {
            "number_audience": 311,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Русский язык"
                },
                {
                    "discipline": "Литература"
                }
            ]
        },
        {
            "number_audience": 312,
            "link_flags": 0,
            "params": [
                {
                    "discipline": "Иностранный язык"
                },
                {
                    "discipline": "Иностранный язык (гр1)"
                },
                {
                    "discipline": "Иностранный язык (гр2)"
                }
            ]
        },
        {
            "number_audience": 313,
            "link_flags": 2,
            "params": [
                {
                    "num": 4,
                    "letter": "А"
                }
            ]
        },
        {
            "number_audience": 314,
            "link_flags": 2,
            "params": [
                {
                    "num": 4,
                    "letter": "Б"
                }
            ]
        },
        {
            "number_audience": 315,
            "link_flags": 2,
            "params": [
                {
                    "num": 4,
                    "letter": "В"
                }
            ]
        },
        {
            "number_audience": 316,
            "link_flags": 2,
            "params": [
                {
                    "num": 4,
                    "letter": "Г"
                }
            ]
        },
        {
            "number_audience": 317,
            "link_flags": 2,
            "params": [
                {
                    "num": 2,
                    "letter": "В"
                },
                {
                    "num": 3,
                    "letter": "В"
                }
            ]
        },
        {
            "number_audience": 318,
            "link_flags": 2,
            "params": [
                {
                    "num": 2,
                    "letter": "Г"
                },
                {
                    "num": 3,
                    "letter": "Г"
                }
            ]
        }
    ]
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
