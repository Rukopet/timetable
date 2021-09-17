// classnum = {
//     "number": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//     "letter": ["а", "б", "в", "г", "д"]
// }

var groupsArray = []

// todo groups1 - нет смысла нигде не используется
// todo вместо group1a надо оперировать groups1 и индексами в массиве, а не group1a

let groups1 = [
    group1a = {
        "number": 1,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group1b = {
        "number": 1,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group1c = {
        "number": 1,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group1d = {
        "number": 1,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group1e = {
        "number": 1,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group1f = {
        "number": 1,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups2 = [
    group2a = {
        "number": 2,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group2b = {
        "number": 2,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group2c = {
        "number": 2,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group2d = {
        "number": 2,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group2e = {
        "number": 2,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group2f = {
        "number": 2,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups3 = [
    group3a = {
        "number": 3,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group3b = {
        "number": 3,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group3c = {
        "number": 3,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group3d = {
        "number": 3,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group3e = {
        "number": 3,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group3f = {
        "number": 3,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups4 = [
    group4a = {
        "number": 4,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group4b = {
        "number": 4,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group4c = {
        "number": 4,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group4d = {
        "number": 4,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group4e = {
        "number": 4,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group4f = {
        "number": 4,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups5 = [
    group5a = {
        "number": 5,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group5b = {
        "number": 5,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group5c = {
        "number": 5,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group5d = {
        "number": 5,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group5e = {
        "number": 5,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group5f = {
        "number": 5,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups6 = [
    group6a = {
        "number": 6,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group6b = {
        "number": 6,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group6c = {
        "number": 6,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group6d = {
        "number": 6,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group6e = {
        "number": 6,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group6f = {
        "number": 6,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups7 = [
    group7a = {
        "number": 7,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group7b = {
        "number": 7,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group7c = {
        "number": 7,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group7d = {
        "number": 7,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group7e = {
        "number": 7,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group7f = {
        "number": 7,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups8 = [
    group8a = {
        "number": 8,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group8b = {
        "number": 8,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group8c = {
        "number": 8,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group8d = {
        "number": 8,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group8e = {
        "number": 8,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group8f = {
        "number": 8,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups9 = [
    group9a = {
        "number": 9,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group9b = {
        "number": 9,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group9c = {
        "number": 9,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group9d = {
        "number": 9,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group9e = {
        "number": 9,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group9f = {
        "number": 9,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups10 = [
    group10a = {
        "number": 10,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group10b = {
        "number": 10,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group10c = {
        "number": 10,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group10d = {
        "number": 10,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group10e = {
        "number": 10,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group10f = {
        "number": 10,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]
let groups11 = [
    group11a = {
        "number": 11,
        "count": "а",
        "saturday_not_study": false,
        "second_shift": false
    },
    group11b = {
        "number": 11,
        "count": "б",
        "saturday_not_study": false,
        "second_shift": false
    },
    group11c = {
        "number": 11,
        "count": "в",
        "saturday_not_study": false,
        "second_shift": false
    },
    group11d = {
        "number": 11,
        "count": "г",
        "saturday_not_study": false,
        "second_shift": false
    },
    group11e = {
        "number": 11,
        "count": "д",
        "saturday_not_study": false,
        "second_shift": false
    },
    group11f = {
        "number": 11,
        "count": "е",
        "saturday_not_study": false,
        "second_shift": false
    }
]

// todo
// function addClassToGroup(group, itemGroup, number, counters) {
//     for (let i = 0; i < counters.length; i++) {
//         const count = counters[i];
//         group.add();
//     }
// }


function reset(group1, group2, group3, group4, group5, group6) {
    for (i = 0; i < groupsArray.length; i++) {
        if (groupsArray[i] == group1) {
            groupsArray.splice(i, 1);
        }
    }
    for (i = 0; i < groupsArray.length; i++) {
        if (groupsArray[i] == group2) {
            groupsArray.splice(i, 1);
        }
    }
    for (i = 0; i < groupsArray.length; i++) {
        if (groupsArray[i] == group3) {
            groupsArray.splice(i, 1);
        }
    }
    for (i = 0; i < groupsArray.length; i++) {
        if (groupsArray[i] == group4) {
            groupsArray.splice(i, 1);
        }
    }
    for (i = 0; i < groupsArray.length; i++) {
        if (groupsArray[i] == group5) {
            groupsArray.splice(i, 1);
        }
    }
    for (i = 0; i < groupsArray.length; i++) {
        if (groupsArray[i] == group6) {
            groupsArray.splice(i, 1);
        }
    }
}

function addCheckbox(group, value) {
    document.getElementById(group).innerHTML = '';
    let innergroup = $("." + group);
    innergroup.append(value);
    if ($('input#second_shift').prop('checked')) {
        $('.second_shift').fadeIn().show();
    } else {
        $('.second_shift').fadeOut(300);
    }
}

$("#class1_par").change(function() {

    console.log("hello 1");

    if ($(this).val() == 'class1_par-1') {

        reset(group1a, group1b, group1c, group1d, group1e, group1f);
        groupsArray.push(group1a)

        console.log(groupsArray)
        addCheckbox('group1', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group1a' value='group1a'></td><td><input class='second-shift' type='checkbox' name='group1a-second' value='group1a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 1/1");
    } else {
        if ($(this).val() == 'class1_par-2') {
            console.log("hello2")

            reset(group1a, group1b, group1c, group1d, group1e, group1f);

            groupsArray.push(group1a, group1b)
            console.log(groupsArray);

            addCheckbox('group1', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group1a' value='group1a'></td><td><input class='second-shift' type='checkbox' name='group1a-second' value='group1a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group1b' value='group1b'></td><td><input class='second-shift' type='checkbox' name='group1b-second' value='group1b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/1");
        } else {
            if ($(this).val() == 'class1_par-3') {
                console.log("hello3")

                reset(group1a, group1b, group1c, group1d, group1e, group1f);

                groupsArray.push(group1a, group1b, group1c)

                console.log(groupsArray);
                addCheckbox('group1', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group1a' value='group1a'></td><td><input class='second-shift' type='checkbox' name='group1a-second' value='group1a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group1b' value='group1b'></td><td><input class='second-shift' type='checkbox' name='group1b-second' value='group1b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group1c' value='group1c'></td><td><input class='second-shift' type='checkbox' name='group1c-second' value='group1c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 3/1");
            } else {
                if ($(this).val() == 'class1_par-4') {
                    console.log("hello4")

                    reset(group1a, group1b, group1c, group1d, group1e, group1f);

                    groupsArray.push(group1a, group1b, group1c, group1d)

                    console.log(groupsArray);
                    addCheckbox('group1', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group1a' value='group1a'></td><td><input class='second-shift' type='checkbox' name='group1a-second' value='group1a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group1b' value='group1b'></td><td><input class='second-shift' type='checkbox' name='group1b-second' value='group1b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group1c' value='group1c'></td><td><input class='second-shift' type='checkbox' name='group1c-second' value='group1c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group1d' value='group1d'></td><td><input class='second-shift' type='checkbox' name='group1d-second' value='group1d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 4/1");
                } else {
                    if ($(this).val() == 'class1_par-5') {
                        console.log("hello3")

                        reset(group1a, group1b, group1c, group1d, group1e, group1f);

                        groupsArray.push(group1a, group1b, group1c, group1d, group1e)

                        console.log(groupsArray);

                        addCheckbox('group1', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group1a' value='group1a'></td><td><input class='second-shift' type='checkbox' name='group1a-second' value='group1a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group1b' value='group1b'></td><td><input class='second-shift' type='checkbox' name='group1b-second' value='group1b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group1c' value='group1c'></td><td><input class='second-shift' type='checkbox' name='group1c-second' value='group1c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group1d' value='group1d'></td><td><input class='second-shift' type='checkbox' name='group1d-second' value='group1d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group1e' value='group1e'></td><td><input class='second-shift' type='checkbox' name='group1e-second' value='group1e-second'></td></tr><tr></tr>");

                        console.log("hello 5/1");
                    } else {
                        if ($(this).val() == 'class1_par-6') {
                            console.log("hello3")

                            reset(group1a, group1b, group1c, group1d, group1e, group1f);

                            groupsArray.push(group1a, group1b, group1c, group1d, group1e, group1f)

                            console.log(groupsArray);
                            addCheckbox('group1', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group1a' value='group1a'></td><td><input class='second-shift' type='checkbox' name='group1a-second' value='group1a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group1b' value='group1b'></td><td><input class='second-shift' type='checkbox' name='group1b-second' value='group1b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group1c' value='group1c'></td><td><input class='second-shift' type='checkbox' name='group1c-second' value='group1c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group1d' value='group1d'></td><td><input class='second-shift' type='checkbox' name='group1d-second' value='group1d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group1e' value='group1e'></td><td><input class='second-shift' type='checkbox' name='group1e-second' value='group1e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group1f' value='group1f'></td><td><input class='second-shift' type='checkbox' name='group1f-second' value='group1f-second'></td></tr>");

                            console.log("hello 6/1");
                        }
                    }
                }
            }
        }

    }
});

$("#class2_par").change(function() {

    console.log("hello 1.2");

    if ($(this).val() == 'class2_par-1') {

        reset(group2a, group2b, group2c, group2d, group2e, group2f);

        groupsArray.push(group2a)
        console.log(groupsArray)

        addCheckbox('group2', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group2a' value='group2a'></td><td><input class='second-shift' type='checkbox' name='group2a-second' value='group2a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 1.2/1");
    } else {
        if ($(this).val() == 'class2_par-2') {
            console.log("hello2.2")
            reset(group2a, group2b, group2c, group2d, group2e, group2f);

            groupsArray.push(group2a, group2b)

            console.log(groupsArray);

            addCheckbox('group2', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group2a' value='group2a'></td><td><input class='second-shift' type='checkbox' name='group2a-second' value='group2a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group2b' value='group2b'></td><td><input class='second-shift' type='checkbox' name='group2b-second' value='group2b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2.2/1");
        } else {
            if ($(this).val() == 'class2_par-3') {
                console.log("hello3.2")

                reset(group2a, group2b, group2c, group2d, group2e, group2f);

                groupsArray.push(group2a, group2b, group2c)

                console.log(groupsArray);
                addCheckbox('group2', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group2a' value='group2a'></td><td><input class='second-shift' type='checkbox' name='group2a-second' value='group2a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group2b' value='group2b'></td><td><input class='second-shift' type='checkbox' name='group2b-second' value='group2b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group2c' value='group2c'></td><td><input class='second-shift' type='checkbox' name='group2c-second' value='group2c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 3.2/1");
            } else {
                if ($(this).val() == 'class2_par-4') {
                    console.log("hello4.2")

                    reset(group2a, group2b, group2c, group2d, group2e, group2f);

                    groupsArray.push(group2a, group2b, group2c, group2d)

                    console.log(groupsArray);
                    addCheckbox('group2', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group2a' value='group2a'></td><td><input class='second-shift' type='checkbox' name='group2a-second' value='group2a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group2b' value='group2b'></td><td><input class='second-shift' type='checkbox' name='group2b-second' value='group2b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group2c' value='group2c'></td><td><input class='second-shift' type='checkbox' name='group2c-second' value='group2c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group2d' value='group2d'></td><td><input class='second-shift' type='checkbox' name='group2d-second' value='group2d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 4.2/1");
                } else {
                    if ($(this).val() == 'class2_par-5') {
                        console.log("hello3.2")

                        reset(group2a, group2b, group2c, group2d, group2e, group2f);

                        groupsArray.push(group2a, group2b, group2c, group2d, group2e)

                        console.log(groupsArray);
                        addCheckbox('group2', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group2a' value='group2a'></td><td><input class='second-shift' type='checkbox' name='group2a-second' value='group2a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group2b' value='group2b'></td><td><input class='second-shift' type='checkbox' name='group2b-second' value='group2b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group2c' value='group2c'></td><td><input class='second-shift' type='checkbox' name='group2c-second' value='group2c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group2d' value='group2d'></td><td><input class='second-shift' type='checkbox' name='group2d-second' value='group2d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group2e' value='group2e'></td><td><input class='second-shift' type='checkbox' name='group2e-second' value='group2e-second'></td></tr><tr></tr>");

                        console.log("hello 5.2/1");
                    } else {
                        if ($(this).val() == 'class2_par-6') {
                            console.log("hello3.2")

                            reset(group2a, group2b, group2c, group2d, group2e, group2f);

                            groupsArray.push(group2a, group2b, group2c, group2d, group2e, group2f)

                            console.log(groupsArray);
                            addCheckbox('group2', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group2a' value='group2a'></td><td><input class='second-shift' type='checkbox' name='group2a-second' value='group2a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group2b' value='group2b'></td><td><input class='second-shift' type='checkbox' name='group2b-second' value='group2b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group2c' value='group2c'></td><td><input class='second-shift' type='checkbox' name='group2c-second' value='group2c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group2d' value='group2d'></td><td><input class='second-shift' type='checkbox' name='group2d-second' value='group2d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group2e' value='group2e'></td><td><input class='second-shift' type='checkbox' name='group2e-second' value='group2e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group2f' value='group2f'></td><td><input class='second-shift' type='checkbox' name='group2f-second' value='group2f-second'></td></tr>");

                            console.log("hello 6.2/1");
                        }
                    }
                }
            }
        }

    }
});

$("#class3_par").change(function() {

    console.log("hello 3");

    if ($(this).val() == 'class3_par-1') {

        reset(group3a, group3b, group3c, group3d, group3e, group3f);
        groupsArray.push(group3a)

        console.log(groupsArray)
        addCheckbox('group3', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group3a' value='group3a'></td><td><input class='second-shift' type='checkbox' name='group3a-second' value='group3a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 3/3");
    } else {
        if ($(this).val() == 'class3_par-2') {
            console.log("hello2")

            reset(group3a, group3b, group3c, group3d, group3e, group3f);

            groupsArray.push(group3a, group3b)
            console.log(groupsArray);

            addCheckbox('group3', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group3a' value='group3a'></td><td><input class='second-shift' type='checkbox' name='group3a-second' value='group3a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group3b' value='group3b'></td><td><input class='second-shift' type='checkbox' name='group3b-second' value='group3b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/3");
        } else {
            if ($(this).val() == 'class3_par-3') {
                console.log("hello3")

                reset(group3a, group3b, group3c, group3d, group3e, group3f);

                groupsArray.push(group3a, group3b, group3c)

                console.log(groupsArray);
                addCheckbox('group3', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group3a' value='group3a'></td><td><input class='second-shift' type='checkbox' name='group3a-second' value='group3a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group3b' value='group3b'></td><td><input class='second-shift' type='checkbox' name='group3b-second' value='group3b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group3c' value='group3c'></td><td><input class='second-shift' type='checkbox' name='group3c-second' value='group3c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 3/3");
            } else {
                if ($(this).val() == 'class3_par-4') {
                    console.log("hello4")

                    reset(group3a, group3b, group3c, group3d, group3e, group3f);

                    groupsArray.push(group3a, group3b, group3c, group3d)

                    console.log(groupsArray);
                    addCheckbox('group3', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group3a' value='group3a'></td><td><input class='second-shift' type='checkbox' name='group3a-second' value='group3a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group3b' value='group3b'></td><td><input class='second-shift' type='checkbox' name='group3b-second' value='group3b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group3c' value='group3c'></td><td><input class='second-shift' type='checkbox' name='group3c-second' value='group3c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group3d' value='group3d'></td><td><input class='second-shift' type='checkbox' name='group3d-second' value='group3d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 4/3");
                } else {
                    if ($(this).val() == 'class3_par-5') {
                        console.log("hello3")

                        reset(group3a, group3b, group3c, group3d, group3e, group3f);

                        groupsArray.push(group3a, group3b, group3c, group3d, group3e)

                        console.log(groupsArray);

                        addCheckbox('group3', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group3a' value='group3a'></td><td><input class='second-shift' type='checkbox' name='group3a-second' value='group3a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group3b' value='group3b'></td><td><input class='second-shift' type='checkbox' name='group3b-second' value='group3b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group3c' value='group3c'></td><td><input class='second-shift' type='checkbox' name='group3c-second' value='group3c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group3d' value='group3d'></td><td><input class='second-shift' type='checkbox' name='group3d-second' value='group3d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group3e' value='group3e'></td><td><input class='second-shift' type='checkbox' name='group3e-second' value='group3e-second'></td></tr><tr></tr>");

                        console.log("hello 5/3");
                    } else {
                        if ($(this).val() == 'class3_par-6') {
                            console.log("hello3")

                            reset(group3a, group3b, group3c, group3d, group3e, group3f);

                            groupsArray.push(group3a, group3b, group3c, group3d, group3e, group3f)

                            console.log(groupsArray);
                            addCheckbox('group3', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group3a' value='group3a'></td><td><input class='second-shift' type='checkbox' name='group3a-second' value='group3a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group3b' value='group3b'></td><td><input class='second-shift' type='checkbox' name='group3b-second' value='group3b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group3c' value='group3c'></td><td><input class='second-shift' type='checkbox' name='group3c-second' value='group3c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group3d' value='group3d'></td><td><input class='second-shift' type='checkbox' name='group3d-second' value='group3d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group3e' value='group3e'></td><td><input class='second-shift' type='checkbox' name='group3e-second' value='group3e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group3f' value='group3f'></td><td><input class='second-shift' type='checkbox' name='group3f-second' value='group3f-second'></td></tr>");

                            console.log("hello 6/3");
                        }
                    }
                }
            }
        }

    }
});

$("#class4_par").change(function() {

    console.log("hello 4");

    if ($(this).val() == 'class4_par-1') {

        reset(group4a, group4b, group4c, group4d, group4e, group4f);
        groupsArray.push(group4a)

        console.log(groupsArray)
        addCheckbox('group4', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group4a' value='group4a'></td><td><input class='second-shift' type='checkbox' name='group4a-second' value='group4a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 4/4");
    } else {
        if ($(this).val() == 'class4_par-2') {
            console.log("hello2")

            reset(group4a, group4b, group4c, group4d, group4e, group4f);

            groupsArray.push(group4a, group4b)
            console.log(groupsArray);

            addCheckbox('group4', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group4a' value='group4a'></td><td><input class='second-shift' type='checkbox' name='group4a-second' value='group4a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group4b' value='group4b'></td><td><input class='second-shift' type='checkbox' name='group4b-second' value='group4b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/4");
        } else {
            if ($(this).val() == 'class4_par-3') {
                console.log("hello4")

                reset(group4a, group4b, group4c, group4d, group4e, group4f);

                groupsArray.push(group4a, group4b, group4c)

                console.log(groupsArray);
                addCheckbox('group4', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group4a' value='group4a'></td><td><input class='second-shift' type='checkbox' name='group4a-second' value='group4a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group4b' value='group4b'></td><td><input class='second-shift' type='checkbox' name='group4b-second' value='group4b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group4c' value='group4c'></td><td><input class='second-shift' type='checkbox' name='group4c-second' value='group4c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 4/4");
            } else {
                if ($(this).val() == 'class4_par-4') {
                    console.log("hello4")

                    reset(group4a, group4b, group4c, group4d, group4e, group4f);

                    groupsArray.push(group4a, group4b, group4c, group4d)

                    console.log(groupsArray);
                    addCheckbox('group4', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group4a' value='group4a'></td><td><input class='second-shift' type='checkbox' name='group4a-second' value='group4a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group4b' value='group4b'></td><td><input class='second-shift' type='checkbox' name='group4b-second' value='group4b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group4c' value='group4c'></td><td><input class='second-shift' type='checkbox' name='group4c-second' value='group4c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group4d' value='group4d'></td><td><input class='second-shift' type='checkbox' name='group4d-second' value='group4d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 4/4");
                } else {
                    if ($(this).val() == 'class4_par-5') {
                        console.log("hello4")

                        reset(group4a, group4b, group4c, group4d, group4e, group4f);

                        groupsArray.push(group4a, group4b, group4c, group4d, group4e)

                        console.log(groupsArray);

                        addCheckbox('group4', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group4a' value='group4a'></td><td><input class='second-shift' type='checkbox' name='group4a-second' value='group4a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group4b' value='group4b'></td><td><input class='second-shift' type='checkbox' name='group4b-second' value='group4b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group4c' value='group4c'></td><td><input class='second-shift' type='checkbox' name='group4c-second' value='group4c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group4d' value='group4d'></td><td><input class='second-shift' type='checkbox' name='group4d-second' value='group4d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group4e' value='group4e'></td><td><input class='second-shift' type='checkbox' name='group4e-second' value='group4e-second'></td></tr><tr></tr>");

                        console.log("hello 5/4");
                    } else {
                        if ($(this).val() == 'class4_par-6') {
                            console.log("hello4")

                            reset(group4a, group4b, group4c, group4d, group4e, group4f);

                            groupsArray.push(group4a, group4b, group4c, group4d, group4e, group4f)

                            console.log(groupsArray);
                            addCheckbox('group4', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group4a' value='group4a'></td><td><input class='second-shift' type='checkbox' name='group4a-second' value='group4a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group4b' value='group4b'></td><td><input class='second-shift' type='checkbox' name='group4b-second' value='group4b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group4c' value='group4c'></td><td><input class='second-shift' type='checkbox' name='group4c-second' value='group4c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group4d' value='group4d'></td><td><input class='second-shift' type='checkbox' name='group4d-second' value='group4d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group4e' value='group4e'></td><td><input class='second-shift' type='checkbox' name='group4e-second' value='group4e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group4f' value='group4f'></td><td><input class='second-shift' type='checkbox' name='group4f-second' value='group4f-second'></td></tr>");

                            console.log("hello 6/4");
                        }
                    }
                }
            }
        }

    }
});

$("#class5_par").change(function() {

    console.log("hello 5");

    if ($(this).val() == 'class5_par-1') {

        reset(group5a, group5b, group5c, group5d, group5e, group5f);
        groupsArray.push(group5a)

        console.log(groupsArray)
        addCheckbox('group5', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group5a' value='group5a'></td><td><input class='second-shift' type='checkbox' name='group5a-second' value='group5a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 5/5");
    } else {
        if ($(this).val() == 'class5_par-2') {
            console.log("hello2")

            reset(group5a, group5b, group5c, group5d, group5e, group5f);

            groupsArray.push(group5a, group5b)
            console.log(groupsArray);

            addCheckbox('group5', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group5a' value='group5a'></td><td><input class='second-shift' type='checkbox' name='group5a-second' value='group5a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group5b' value='group5b'></td><td><input class='second-shift' type='checkbox' name='group5b-second' value='group5b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/5");
        } else {
            if ($(this).val() == 'class5_par-3') {
                console.log("hello5")

                reset(group5a, group5b, group5c, group5d, group5e, group5f);

                groupsArray.push(group5a, group5b, group5c)

                console.log(groupsArray);
                addCheckbox('group5', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group5a' value='group5a'></td><td><input class='second-shift' type='checkbox' name='group5a-second' value='group5a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group5b' value='group5b'></td><td><input class='second-shift' type='checkbox' name='group5b-second' value='group5b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group5c' value='group5c'></td><td><input class='second-shift' type='checkbox' name='group5c-second' value='group5c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 5/5");
            } else {
                if ($(this).val() == 'class5_par-4') {
                    console.log("hello5")

                    reset(group5a, group5b, group5c, group5d, group5e, group5f);

                    groupsArray.push(group5a, group5b, group5c, group5d)

                    console.log(groupsArray);
                    addCheckbox('group5', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group5a' value='group5a'></td><td><input class='second-shift' type='checkbox' name='group5a-second' value='group5a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group5b' value='group5b'></td><td><input class='second-shift' type='checkbox' name='group5b-second' value='group5b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group5c' value='group5c'></td><td><input class='second-shift' type='checkbox' name='group5c-second' value='group5c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group5d' value='group5d'></td><td><input class='second-shift' type='checkbox' name='group5d-second' value='group5d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 5/5");
                } else {
                    if ($(this).val() == 'class5_par-5') {
                        console.log("hello5")

                        reset(group5a, group5b, group5c, group5d, group5e, group5f);

                        groupsArray.push(group5a, group5b, group5c, group5d, group5e)

                        console.log(groupsArray);

                        addCheckbox('group5', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group5a' value='group5a'></td><td><input class='second-shift' type='checkbox' name='group5a-second' value='group5a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group5b' value='group5b'></td><td><input class='second-shift' type='checkbox' name='group5b-second' value='group5b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group5c' value='group5c'></td><td><input class='second-shift' type='checkbox' name='group5c-second' value='group5c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group5d' value='group5d'></td><td><input class='second-shift' type='checkbox' name='group5d-second' value='group5d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group5e' value='group5e'></td><td><input class='second-shift' type='checkbox' name='group5e-second' value='group5e-second'></td></tr><tr></tr>");

                        console.log("hello 5/5");
                    } else {
                        if ($(this).val() == 'class5_par-6') {
                            console.log("hello5")

                            reset(group5a, group5b, group5c, group5d, group5e, group5f);

                            groupsArray.push(group5a, group5b, group5c, group5d, group5e, group5f)

                            console.log(groupsArray);
                            addCheckbox('group5', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group5a' value='group5a'></td><td><input class='second-shift' type='checkbox' name='group5a-second' value='group5a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group5b' value='group5b'></td><td><input class='second-shift' type='checkbox' name='group5b-second' value='group5b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group5c' value='group5c'></td><td><input class='second-shift' type='checkbox' name='group5c-second' value='group5c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group5d' value='group5d'></td><td><input class='second-shift' type='checkbox' name='group5d-second' value='group5d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group5e' value='group5e'></td><td><input class='second-shift' type='checkbox' name='group5e-second' value='group5e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group5f' value='group5f'></td><td><input class='second-shift' type='checkbox' name='group5f-second' value='group5f-second'></td></tr>");

                            console.log("hello 6/5");
                        }
                    }
                }
            }
        }

    }
});
$("#class6_par").change(function() {

    console.log("hello 6");

    if ($(this).val() == 'class6_par-1') {

        reset(group6a, group6b, group6c, group6d, group6e, group6f);
        groupsArray.push(group6a)

        console.log(groupsArray)
        addCheckbox('group6', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group6a' value='group6a'></td><td><input class='second-shift' type='checkbox' name='group6a-second' value='group6a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 6/6");
    } else {
        if ($(this).val() == 'class6_par-2') {
            console.log("hello2")

            reset(group6a, group6b, group6c, group6d, group6e, group6f);

            groupsArray.push(group6a, group6b)
            console.log(groupsArray);

            addCheckbox('group6', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group6a' value='group6a'></td><td><input class='second-shift' type='checkbox' name='group6a-second' value='group6a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group6b' value='group6b'></td><td><input class='second-shift' type='checkbox' name='group6b-second' value='group6b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/6");
        } else {
            if ($(this).val() == 'class6_par-3') {
                console.log("hello6")

                reset(group6a, group6b, group6c, group6d, group6e, group6f);

                groupsArray.push(group6a, group6b, group6c)

                console.log(groupsArray);
                addCheckbox('group6', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group6a' value='group6a'></td><td><input class='second-shift' type='checkbox' name='group6a-second' value='group6a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group6b' value='group6b'></td><td><input class='second-shift' type='checkbox' name='group6b-second' value='group6b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group6c' value='group6c'></td><td><input class='second-shift' type='checkbox' name='group6c-second' value='group6c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 6/6");
            } else {
                if ($(this).val() == 'class6_par-4') {
                    console.log("hello6")

                    reset(group6a, group6b, group6c, group6d, group6e, group6f);

                    groupsArray.push(group6a, group6b, group6c, group6d)

                    console.log(groupsArray);
                    addCheckbox('group6', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group6a' value='group6a'></td><td><input class='second-shift' type='checkbox' name='group6a-second' value='group6a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group6b' value='group6b'></td><td><input class='second-shift' type='checkbox' name='group6b-second' value='group6b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group6c' value='group6c'></td><td><input class='second-shift' type='checkbox' name='group6c-second' value='group6c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group6d' value='group6d'></td><td><input class='second-shift' type='checkbox' name='group6d-second' value='group6d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 6/6");
                } else {
                    if ($(this).val() == 'class6_par-5') {
                        console.log("hello6")

                        reset(group6a, group6b, group6c, group6d, group6e, group6f);

                        groupsArray.push(group6a, group6b, group6c, group6d, group6e)

                        console.log(groupsArray);

                        addCheckbox('group6', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group6a' value='group6a'></td><td><input class='second-shift' type='checkbox' name='group6a-second' value='group6a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group6b' value='group6b'></td><td><input class='second-shift' type='checkbox' name='group6b-second' value='group6b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group6c' value='group6c'></td><td><input class='second-shift' type='checkbox' name='group6c-second' value='group6c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group6d' value='group6d'></td><td><input class='second-shift' type='checkbox' name='group6d-second' value='group6d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group6e' value='group6e'></td><td><input class='second-shift' type='checkbox' name='group6e-second' value='group6e-second'></td></tr><tr></tr>");

                        console.log("hello 6/6");
                    } else {
                        if ($(this).val() == 'class6_par-6') {
                            console.log("hello6")

                            reset(group6a, group6b, group6c, group6d, group6e, group6f);

                            groupsArray.push(group6a, group6b, group6c, group6d, group6e, group6f)

                            console.log(groupsArray);
                            addCheckbox('group6', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group6a' value='group6a'></td><td><input class='second-shift' type='checkbox' name='group6a-second' value='group6a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group6b' value='group6b'></td><td><input class='second-shift' type='checkbox' name='group6b-second' value='group6b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group6c' value='group6c'></td><td><input class='second-shift' type='checkbox' name='group6c-second' value='group6c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group6d' value='group6d'></td><td><input class='second-shift' type='checkbox' name='group6d-second' value='group6d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group6e' value='group6e'></td><td><input class='second-shift' type='checkbox' name='group6e-second' value='group6e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group6f' value='group6f'></td><td><input class='second-shift' type='checkbox' name='group6f-second' value='group6f-second'></td></tr>");

                            console.log("hello 6/6");
                        }
                    }
                }
            }
        }

    }
});
$("#class7_par").change(function() {

    console.log("hello 7");

    if ($(this).val() == 'class7_par-1') {

        reset(group7a, group7b, group7c, group7d, group7e, group7f);
        groupsArray.push(group7a)

        console.log(groupsArray)
        addCheckbox('group7', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group7a' value='group7a'></td><td><input class='second-shift' type='checkbox' name='group7a-second' value='group7a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 7/7");
    } else {
        if ($(this).val() == 'class7_par-2') {
            console.log("hello2")

            reset(group7a, group7b, group7c, group7d, group7e, group7f);

            groupsArray.push(group7a, group7b)
            console.log(groupsArray);

            addCheckbox('group7', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group7a' value='group7a'></td><td><input class='second-shift' type='checkbox' name='group7a-second' value='group7a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group7b' value='group7b'></td><td><input class='second-shift' type='checkbox' name='group7b-second' value='group7b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/7");
        } else {
            if ($(this).val() == 'class7_par-3') {
                console.log("hello7")

                reset(group7a, group7b, group7c, group7d, group7e, group7f);

                groupsArray.push(group7a, group7b, group7c)

                console.log(groupsArray);
                addCheckbox('group7', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group7a' value='group7a'></td><td><input class='second-shift' type='checkbox' name='group7a-second' value='group7a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group7b' value='group7b'></td><td><input class='second-shift' type='checkbox' name='group7b-second' value='group7b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group7c' value='group7c'></td><td><input class='second-shift' type='checkbox' name='group7c-second' value='group7c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 7/7");
            } else {
                if ($(this).val() == 'class7_par-4') {
                    console.log("hello7")

                    reset(group7a, group7b, group7c, group7d, group7e, group7f);

                    groupsArray.push(group7a, group7b, group7c, group7d)

                    console.log(groupsArray);
                    addCheckbox('group7', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group7a' value='group7a'></td><td><input class='second-shift' type='checkbox' name='group7a-second' value='group7a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group7b' value='group7b'></td><td><input class='second-shift' type='checkbox' name='group7b-second' value='group7b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group7c' value='group7c'></td><td><input class='second-shift' type='checkbox' name='group7c-second' value='group7c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group7d' value='group7d'></td><td><input class='second-shift' type='checkbox' name='group7d-second' value='group7d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 7/7");
                } else {
                    if ($(this).val() == 'class7_par-5') {
                        console.log("hello7")

                        reset(group7a, group7b, group7c, group7d, group7e, group7f);

                        groupsArray.push(group7a, group7b, group7c, group7d, group7e)

                        console.log(groupsArray);

                        addCheckbox('group7', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group7a' value='group7a'></td><td><input class='second-shift' type='checkbox' name='group7a-second' value='group7a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group7b' value='group7b'></td><td><input class='second-shift' type='checkbox' name='group7b-second' value='group7b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group7c' value='group7c'></td><td><input class='second-shift' type='checkbox' name='group7c-second' value='group7c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group7d' value='group7d'></td><td><input class='second-shift' type='checkbox' name='group7d-second' value='group7d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group7e' value='group7e'></td><td><input class='second-shift' type='checkbox' name='group7e-second' value='group7e-second'></td></tr><tr></tr>");

                        console.log("hello 7/7");
                    } else {
                        if ($(this).val() == 'class7_par-6') {
                            console.log("hello7")

                            reset(group7a, group7b, group7c, group7d, group7e, group7f);

                            groupsArray.push(group7a, group7b, group7c, group7d, group7e, group7f)

                            console.log(groupsArray);
                            addCheckbox('group7', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group7a' value='group7a'></td><td><input class='second-shift' type='checkbox' name='group7a-second' value='group7a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group7b' value='group7b'></td><td><input class='second-shift' type='checkbox' name='group7b-second' value='group7b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group7c' value='group7c'></td><td><input class='second-shift' type='checkbox' name='group7c-second' value='group7c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group7d' value='group7d'></td><td><input class='second-shift' type='checkbox' name='group7d-second' value='group7d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group7e' value='group7e'></td><td><input class='second-shift' type='checkbox' name='group7e-second' value='group7e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group7f' value='group7f'></td><td><input class='second-shift' type='checkbox' name='group7f-second' value='group7f-second'></td></tr>");

                            console.log("hello 7/7");
                        }
                    }
                }
            }
        }

    }
});

$("#class8_par").change(function() {

    console.log("hello 8");

    if ($(this).val() == 'class8_par-1') {

        reset(group8a, group8b, group8c, group8d, group8e, group8f);
        groupsArray.push(group8a)

        console.log(groupsArray)
        addCheckbox('group8', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group8a' value='group8a'></td><td><input class='second-shift' type='checkbox' name='group8a-second' value='group8a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 8/8");
    } else {
        if ($(this).val() == 'class8_par-2') {
            console.log("hello2")

            reset(group8a, group8b, group8c, group8d, group8e, group8f);

            groupsArray.push(group8a, group8b)
            console.log(groupsArray);

            addCheckbox('group8', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group8a' value='group8a'></td><td><input class='second-shift' type='checkbox' name='group8a-second' value='group8a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group8b' value='group8b'></td><td><input class='second-shift' type='checkbox' name='group8b-second' value='group8b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/8");
        } else {
            if ($(this).val() == 'class8_par-3') {
                console.log("hello8")

                reset(group8a, group8b, group8c, group8d, group8e, group8f);

                groupsArray.push(group8a, group8b, group8c)

                console.log(groupsArray);
                addCheckbox('group8', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group8a' value='group8a'></td><td><input class='second-shift' type='checkbox' name='group8a-second' value='group8a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group8b' value='group8b'></td><td><input class='second-shift' type='checkbox' name='group8b-second' value='group8b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group8c' value='group8c'></td><td><input class='second-shift' type='checkbox' name='group8c-second' value='group8c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 8/8");
            } else {
                if ($(this).val() == 'class8_par-4') {
                    console.log("hello8")

                    reset(group8a, group8b, group8c, group8d, group8e, group8f);

                    groupsArray.push(group8a, group8b, group8c, group8d)

                    console.log(groupsArray);
                    addCheckbox('group8', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group8a' value='group8a'></td><td><input class='second-shift' type='checkbox' name='group8a-second' value='group8a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group8b' value='group8b'></td><td><input class='second-shift' type='checkbox' name='group8b-second' value='group8b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group8c' value='group8c'></td><td><input class='second-shift' type='checkbox' name='group8c-second' value='group8c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group8d' value='group8d'></td><td><input class='second-shift' type='checkbox' name='group8d-second' value='group8d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 8/8");
                } else {
                    if ($(this).val() == 'class8_par-5') {
                        console.log("hello8")

                        reset(group8a, group8b, group8c, group8d, group8e, group8f);

                        groupsArray.push(group8a, group8b, group8c, group8d, group8e)

                        console.log(groupsArray);

                        addCheckbox('group8', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group8a' value='group8a'></td><td><input class='second-shift' type='checkbox' name='group8a-second' value='group8a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group8b' value='group8b'></td><td><input class='second-shift' type='checkbox' name='group8b-second' value='group8b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group8c' value='group8c'></td><td><input class='second-shift' type='checkbox' name='group8c-second' value='group8c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group8d' value='group8d'></td><td><input class='second-shift' type='checkbox' name='group8d-second' value='group8d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group8e' value='group8e'></td><td><input class='second-shift' type='checkbox' name='group8e-second' value='group8e-second'></td></tr><tr></tr>");

                        console.log("hello 8/8");
                    } else {
                        if ($(this).val() == 'class8_par-6') {
                            console.log("hello8")

                            reset(group8a, group8b, group8c, group8d, group8e, group8f);

                            groupsArray.push(group8a, group8b, group8c, group8d, group8e, group8f)

                            console.log(groupsArray);
                            addCheckbox('group8', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group8a' value='group8a'></td><td><input class='second-shift' type='checkbox' name='group8a-second' value='group8a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group8b' value='group8b'></td><td><input class='second-shift' type='checkbox' name='group8b-second' value='group8b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group8c' value='group8c'></td><td><input class='second-shift' type='checkbox' name='group8c-second' value='group8c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group8d' value='group8d'></td><td><input class='second-shift' type='checkbox' name='group8d-second' value='group8d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group8e' value='group8e'></td><td><input class='second-shift' type='checkbox' name='group8e-second' value='group8e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group8f' value='group8f'></td><td><input class='second-shift' type='checkbox' name='group8f-second' value='group8f-second'></td></tr>");

                            console.log("hello 8/8");
                        }
                    }
                }
            }
        }

    }
});

$("#class9_par").change(function() {

    console.log("hello 9");

    if ($(this).val() == 'class9_par-1') {

        reset(group9a, group9b, group9c, group9d, group9e, group9f);
        groupsArray.push(group9a)

        console.log(groupsArray)
        addCheckbox('group9', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group9a' value='group9a'></td><td><input class='second-shift' type='checkbox' name='group9a-second' value='group9a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 9/9");
    } else {
        if ($(this).val() == 'class9_par-2') {
            console.log("hello2")

            reset(group9a, group9b, group9c, group9d, group9e, group9f);

            groupsArray.push(group9a, group9b)
            console.log(groupsArray);

            addCheckbox('group9', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group9a' value='group9a'></td><td><input class='second-shift' type='checkbox' name='group9a-second' value='group9a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group9b' value='group9b'></td><td><input class='second-shift' type='checkbox' name='group9b-second' value='group9b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/9");
        } else {
            if ($(this).val() == 'class9_par-3') {
                console.log("hello9")

                reset(group9a, group9b, group9c, group9d, group9e, group9f);

                groupsArray.push(group9a, group9b, group9c)

                console.log(groupsArray);
                addCheckbox('group9', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group9a' value='group9a'></td><td><input class='second-shift' type='checkbox' name='group9a-second' value='group9a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group9b' value='group9b'></td><td><input class='second-shift' type='checkbox' name='group9b-second' value='group9b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group9c' value='group9c'></td><td><input class='second-shift' type='checkbox' name='group9c-second' value='group9c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 9/9");
            } else {
                if ($(this).val() == 'class9_par-4') {
                    console.log("hello9")

                    reset(group9a, group9b, group9c, group9d, group9e, group9f);

                    groupsArray.push(group9a, group9b, group9c, group9d)

                    console.log(groupsArray);
                    addCheckbox('group9', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group9a' value='group9a'></td><td><input class='second-shift' type='checkbox' name='group9a-second' value='group9a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group9b' value='group9b'></td><td><input class='second-shift' type='checkbox' name='group9b-second' value='group9b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group9c' value='group9c'></td><td><input class='second-shift' type='checkbox' name='group9c-second' value='group9c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group9d' value='group9d'></td><td><input class='second-shift' type='checkbox' name='group9d-second' value='group9d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 9/9");
                } else {
                    if ($(this).val() == 'class9_par-5') {
                        console.log("hello9")

                        reset(group9a, group9b, group9c, group9d, group9e, group9f);

                        groupsArray.push(group9a, group9b, group9c, group9d, group9e)

                        console.log(groupsArray);

                        addCheckbox('group9', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group9a' value='group9a'></td><td><input class='second-shift' type='checkbox' name='group9a-second' value='group9a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group9b' value='group9b'></td><td><input class='second-shift' type='checkbox' name='group9b-second' value='group9b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group9c' value='group9c'></td><td><input class='second-shift' type='checkbox' name='group9c-second' value='group9c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group9d' value='group9d'></td><td><input class='second-shift' type='checkbox' name='group9d-second' value='group9d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group9e' value='group9e'></td><td><input class='second-shift' type='checkbox' name='group9e-second' value='group9e-second'></td></tr><tr></tr>");

                        console.log("hello 9/9");
                    } else {
                        if ($(this).val() == 'class9_par-6') {
                            console.log("hello9")

                            reset(group9a, group9b, group9c, group9d, group9e, group9f);

                            groupsArray.push(group9a, group9b, group9c, group9d, group9e, group9f)

                            console.log(groupsArray);
                            addCheckbox('group9', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group9a' value='group9a'></td><td><input class='second-shift' type='checkbox' name='group9a-second' value='group9a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group9b' value='group9b'></td><td><input class='second-shift' type='checkbox' name='group9b-second' value='group9b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group9c' value='group9c'></td><td><input class='second-shift' type='checkbox' name='group9c-second' value='group9c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group9d' value='group9d'></td><td><input class='second-shift' type='checkbox' name='group9d-second' value='group9d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group9e' value='group9e'></td><td><input class='second-shift' type='checkbox' name='group9e-second' value='group9e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group9f' value='group9f'></td><td><input class='second-shift' type='checkbox' name='group9f-second' value='group9f-second'></td></tr>");

                            console.log("hello 9/9");
                        }
                    }
                }
            }
        }

    }
});

$("#class10_par").change(function() {

    console.log("hello 10");

    if ($(this).val() == 'class10_par-1') {

        reset(group10a, group10b, group10c, group10d, group10e, group10f);
        groupsArray.push(group10a)

        console.log(groupsArray)
        addCheckbox('group10', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group10a' value='group10a'></td><td><input class='second-shift' type='checkbox' name='group10a-second' value='group10a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 10/10");
    } else {
        if ($(this).val() == 'class10_par-2') {
            console.log("hello2")

            reset(group10a, group10b, group10c, group10d, group10e, group10f);

            groupsArray.push(group10a, group10b)
            console.log(groupsArray);

            addCheckbox('group10', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group10a' value='group10a'></td><td><input class='second-shift' type='checkbox' name='group10a-second' value='group10a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group10b' value='group10b'></td><td><input class='second-shift' type='checkbox' name='group10b-second' value='group10b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/10");
        } else {
            if ($(this).val() == 'class10_par-3') {
                console.log("hello10")

                reset(group10a, group10b, group10c, group10d, group10e, group10f);

                groupsArray.push(group10a, group10b, group10c)

                console.log(groupsArray);
                addCheckbox('group10', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group10a' value='group10a'></td><td><input class='second-shift' type='checkbox' name='group10a-second' value='group10a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group10b' value='group10b'></td><td><input class='second-shift' type='checkbox' name='group10b-second' value='group10b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group10c' value='group10c'></td><td><input class='second-shift' type='checkbox' name='group10c-second' value='group10c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 10/10");
            } else {
                if ($(this).val() == 'class10_par-4') {
                    console.log("hello10")

                    reset(group10a, group10b, group10c, group10d, group10e, group10f);

                    groupsArray.push(group10a, group10b, group10c, group10d)

                    console.log(groupsArray);
                    addCheckbox('group10', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group10a' value='group10a'></td><td><input class='second-shift' type='checkbox' name='group10a-second' value='group10a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group10b' value='group10b'></td><td><input class='second-shift' type='checkbox' name='group10b-second' value='group10b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group10c' value='group10c'></td><td><input class='second-shift' type='checkbox' name='group10c-second' value='group10c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group10d' value='group10d'></td><td><input class='second-shift' type='checkbox' name='group10d-second' value='group10d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 10/10");
                } else {
                    if ($(this).val() == 'class10_par-5') {
                        console.log("hello10")

                        reset(group10a, group10b, group10c, group10d, group10e, group10f);

                        groupsArray.push(group10a, group10b, group10c, group10d, group10e)

                        console.log(groupsArray);

                        addCheckbox('group10', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group10a' value='group10a'></td><td><input class='second-shift' type='checkbox' name='group10a-second' value='group10a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group10b' value='group10b'></td><td><input class='second-shift' type='checkbox' name='group10b-second' value='group10b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group10c' value='group10c'></td><td><input class='second-shift' type='checkbox' name='group10c-second' value='group10c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group10d' value='group10d'></td><td><input class='second-shift' type='checkbox' name='group10d-second' value='group10d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group10e' value='group10e'></td><td><input class='second-shift' type='checkbox' name='group10e-second' value='group10e-second'></td></tr><tr></tr>");

                        console.log("hello 10/10");
                    } else {
                        if ($(this).val() == 'class10_par-6') {
                            console.log("hello10")

                            reset(group10a, group10b, group10c, group10d, group10e, group10f);

                            groupsArray.push(group10a, group10b, group10c, group10d, group10e, group10f)

                            console.log(groupsArray);
                            addCheckbox('group10', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group10a' value='group10a'></td><td><input class='second-shift' type='checkbox' name='group10a-second' value='group10a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group10b' value='group10b'></td><td><input class='second-shift' type='checkbox' name='group10b-second' value='group10b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group10c' value='group10c'></td><td><input class='second-shift' type='checkbox' name='group10c-second' value='group10c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group10d' value='group10d'></td><td><input class='second-shift' type='checkbox' name='group10d-second' value='group10d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group10e' value='group10e'></td><td><input class='second-shift' type='checkbox' name='group10e-second' value='group10e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group10f' value='group10f'></td><td><input class='second-shift' type='checkbox' name='group10f-second' value='group10f-second'></td></tr>");

                            console.log("hello 10/10");
                        }
                    }
                }
            }
        }

    }
});

$("#class11_par").change(function() {

    console.log("hello 11");

    if ($(this).val() == 'class11_par-1') {

        reset(group11a, group11b, group11c, group11d, group11e, group11f);
        groupsArray.push(group11a)

        console.log(groupsArray)
        addCheckbox('group11', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group11a' value='group11a'></td><td><input class='second-shift' type='checkbox' name='group11a-second' value='group11a-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr>");

        console.log("hello 11/11");
    } else {
        if ($(this).val() == 'class11_par-2') {
            console.log("hello2")

            reset(group11a, group11b, group11c, group11d, group11e, group11f);

            groupsArray.push(group11a, group11b)
            console.log(groupsArray);

            addCheckbox('group11', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group11a' value='group11a'></td><td><input class='second-shift' type='checkbox' name='group11a-second' value='group11a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group11b' value='group11b'></td><td><input class='second-shift' type='checkbox' name='group11b-second' value='group11b-second'></td></tr><tr></tr><tr></tr><tr></tr><tr></tr>");
            console.log("hello 2/11");
        } else {
            if ($(this).val() == 'class11_par-3') {
                console.log("hello11")

                reset(group11a, group11b, group11c, group11d, group11e, group11f);

                groupsArray.push(group11a, group11b, group11c)

                console.log(groupsArray);
                addCheckbox('group11', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group11a' value='group11a'></td><td><input class='second-shift' type='checkbox' name='group11a-second' value='group11a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group11b' value='group11b'></td><td><input class='second-shift' type='checkbox' name='group11b-second' value='group11b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group11c' value='group11c'></td><td><input class='second-shift' type='checkbox' name='group11c-second' value='group11c-second'></td></tr><tr></tr><tr></tr><tr></tr>");

                console.log("hello 11/11");
            } else {
                if ($(this).val() == 'class11_par-4') {
                    console.log("hello11")

                    reset(group11a, group11b, group11c, group11d, group11e, group11f);

                    groupsArray.push(group11a, group11b, group11c, group11d)

                    console.log(groupsArray);
                    addCheckbox('group11', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group11a' value='group11a'></td><td><input class='second-shift' type='checkbox' name='group11a-second' value='group11a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group11b' value='group11b'></td><td><input class='second-shift' type='checkbox' name='group11b-second' value='group11b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group11c' value='group11c'></td><td><input class='second-shift' type='checkbox' name='group11c-second' value='group11c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group11d' value='group11d'></td><td><input class='second-shift' type='checkbox' name='group11d-second' value='group11d-second'></td></tr><tr></tr><tr></tr>");

                    console.log("hello 11/11");
                } else {
                    if ($(this).val() == 'class11_par-5') {
                        console.log("hello11")

                        reset(group11a, group11b, group11c, group11d, group11e, group11f);

                        groupsArray.push(group11a, group11b, group11c, group11d, group11e)

                        console.log(groupsArray);

                        addCheckbox('group11', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group11a' value='group11a'></td><td><input class='second-shift' type='checkbox' name='group11a-second' value='group11a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group11b' value='group11b'></td><td><input class='second-shift' type='checkbox' name='group11b-second' value='group11b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group11c' value='group11c'></td><td><input class='second-shift' type='checkbox' name='group11c-second' value='group11c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group11d' value='group11d'></td><td><input class='second-shift' type='checkbox' name='group11d-second' value='group11d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group11e' value='group11e'></td><td><input class='second-shift' type='checkbox' name='group11e-second' value='group11e-second'></td></tr><tr></tr>");

                        console.log("hello 11/11");
                    } else {
                        if ($(this).val() == 'class11_par-6') {
                            console.log("hello11")

                            reset(group11a, group11b, group11c, group11d, group11e, group11f);

                            groupsArray.push(group11a, group11b, group11c, group11d, group11e, group11f)

                            console.log(groupsArray);
                            addCheckbox('group11', "<tr><td><p>a</p></td><td><input class='first-shift' type='checkbox' name='group11a' value='group11a'></td><td><input class='second-shift' type='checkbox' name='group11a-second' value='group11a-second'></td></tr><tr><td><p>б</p></td><td><input class='first-shift' type='checkbox' name='group11b' value='group11b'></td><td><input class='second-shift' type='checkbox' name='group11b-second' value='group11b-second'></td></tr><tr><td><p>в</p></td><td><input class='first-shift' type='checkbox' name='group11c' value='group11c'></td><td><input class='second-shift' type='checkbox' name='group11c-second' value='group11c-second'></td></tr><tr><td><p>г</p></td><td><input class='first-shift' type='checkbox' name='group11d' value='group11d'></td><td><input class='second-shift' type='checkbox' name='group11d-second' value='group11d-second'></td></tr><tr><td><p>д</p></td><td><input class='first-shift' type='checkbox' name='group11e' value='group11e'></td><td><input class='second-shift' type='checkbox' name='group11e-second' value='group11e-second'></td></tr><tr><td><p>е</p></td><td><input class='first-shift' type='checkbox' name='group11f' value='group11f'></td><td><input class='second-shift' type='checkbox' name='group11f-second' value='group11f-second'></td></tr>");

                            console.log("hello 11/11");
                        }
                    }
                }
            }
        }

    }
});





$(function() {

    $("#groups_next_page").click(function() {

        if ($('input[name=group1a]').is(':checked')) {
            // нажат       
            groupsArray[group1a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group1a.saturday_not_study = false];
        }
        if ($('input[name=group1b]').is(':checked')) {
            // нажат       
            groupsArray[group1b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group1b.saturday_not_study = false];
        }
        if ($('input[name=group1c]').is(':checked')) {
            // нажат       
            groupsArray[group1c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group1c.saturday_not_study = false];
        }
        if ($('input[name=group1d]').is(':checked')) {
            // нажат       
            groupsArray[group1d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group1d.saturday_not_study = false];
        }
        if ($('input[name=group1e]').is(':checked')) {
            // нажат       
            groupsArray[group1e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group1e.saturday_not_study = false];
        }
        if ($('input[name=group1f]').is(':checked')) {
            // нажат       
            groupsArray[group1f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group1f.saturday_not_study = false];
        }
        if ($('input[name=group2a]').is(':checked')) {
            // нажат       
            groupsArray[group2a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group2a.saturday_not_study = false];
        }
        if ($('input[name=group2b]').is(':checked')) {
            // нажат       
            groupsArray[group2b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group2b.saturday_not_study = false];
        }
        if ($('input[name=group2c]').is(':checked')) {
            // нажат       
            groupsArray[group2c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group2c.saturday_not_study = false];
        }
        if ($('input[name=group2d]').is(':checked')) {
            // нажат       
            groupsArray[group2d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group2d.saturday_not_study = false];
        }
        if ($('input[name=group2e]').is(':checked')) {
            // нажат       
            groupsArray[group2e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group2e.saturday_not_study = false];
        }
        if ($('input[name=group2f]').is(':checked')) {
            // нажат       
            groupsArray[group2f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group2f.saturday_not_study = false];
        }
        if ($('input[name=group3a]').is(':checked')) {
            // нажат       
            groupsArray[group3a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group3a.saturday_not_study = false];
        }
        if ($('input[name=group3b]').is(':checked')) {
            // нажат       
            groupsArray[group3b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group3b.saturday_not_study = false];
        }
        if ($('input[name=group3c]').is(':checked')) {
            // нажат       
            groupsArray[group3c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group3c.saturday_not_study = false];
        }
        if ($('input[name=group3d]').is(':checked')) {
            // нажат       
            groupsArray[group3d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group3d.saturday_not_study = false];
        }
        if ($('input[name=group3e]').is(':checked')) {
            // нажат       
            groupsArray[group3e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group3e.saturday_not_study = false];
        }
        if ($('input[name=group3f]').is(':checked')) {
            // нажат       
            groupsArray[group3f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group3f.saturday_not_study = false];
        }
        if ($('input[name=group4a]').is(':checked')) {
            // нажат       
            groupsArray[group4a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group4a.saturday_not_study = false];
        }
        if ($('input[name=group4b]').is(':checked')) {
            // нажат       
            groupsArray[group4b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group4b.saturday_not_study = false];
        }
        if ($('input[name=group4c]').is(':checked')) {
            // нажат       
            groupsArray[group4c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group4c.saturday_not_study = false];
        }
        if ($('input[name=group4d]').is(':checked')) {
            // нажат       
            groupsArray[group4d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group4d.saturday_not_study = false];
        }
        if ($('input[name=group4e]').is(':checked')) {
            // нажат       
            groupsArray[group4e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group4e.saturday_not_study = false];
        }
        if ($('input[name=group4f]').is(':checked')) {
            // нажат       
            groupsArray[group4f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group4f.saturday_not_study = false];
        }
        if ($('input[name=group5a]').is(':checked')) {
            // нажат       
            groupsArray[group5a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group5a.saturday_not_study = false];
        }
        if ($('input[name=group5b]').is(':checked')) {
            // нажат       
            groupsArray[group5b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group5b.saturday_not_study = false];
        }
        if ($('input[name=group5c]').is(':checked')) {
            // нажат       
            groupsArray[group5c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group5c.saturday_not_study = false];
        }
        if ($('input[name=group5d]').is(':checked')) {
            // нажат       
            groupsArray[group5d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group5d.saturday_not_study = false];
        }
        if ($('input[name=group5e]').is(':checked')) {
            // нажат       
            groupsArray[group5e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group5e.saturday_not_study = false];
        }
        if ($('input[name=group5f]').is(':checked')) {
            // нажат       
            groupsArray[group5f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group5f.saturday_not_study = false];
        }
        if ($('input[name=group6a]').is(':checked')) {
            // нажат       
            groupsArray[group6a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group6a.saturday_not_study = false];
        }
        if ($('input[name=group6b]').is(':checked')) {
            // нажат       
            groupsArray[group6b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group6b.saturday_not_study = false];
        }
        if ($('input[name=group6c]').is(':checked')) {
            // нажат       
            groupsArray[group6c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group6c.saturday_not_study = false];
        }
        if ($('input[name=group6d]').is(':checked')) {
            // нажат       
            groupsArray[group6d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group6d.saturday_not_study = false];
        }
        if ($('input[name=group6e]').is(':checked')) {
            // нажат       
            groupsArray[group6e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group6e.saturday_not_study = false];
        }
        if ($('input[name=group6f]').is(':checked')) {
            // нажат       
            groupsArray[group6f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group6f.saturday_not_study = false];
        }
        if ($('input[name=group7a]').is(':checked')) {
            // нажат       
            groupsArray[group7a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group7a.saturday_not_study = false];
        }
        if ($('input[name=group7b]').is(':checked')) {
            // нажат       
            groupsArray[group7b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group7b.saturday_not_study = false];
        }
        if ($('input[name=group7c]').is(':checked')) {
            // нажат       
            groupsArray[group7c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group7c.saturday_not_study = false];
        }
        if ($('input[name=group7d]').is(':checked')) {
            // нажат       
            groupsArray[group7d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group7d.saturday_not_study = false];
        }
        if ($('input[name=group7e]').is(':checked')) {
            // нажат       
            groupsArray[group7e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group7e.saturday_not_study = false];
        }
        if ($('input[name=group7f]').is(':checked')) {
            // нажат       
            groupsArray[group7f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group7f.saturday_not_study = false];
        }
        if ($('input[name=group8a]').is(':checked')) {
            // нажат       
            groupsArray[group8a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group8a.saturday_not_study = false];
        }
        if ($('input[name=group8b]').is(':checked')) {
            // нажат       
            groupsArray[group8b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group8b.saturday_not_study = false];
        }
        if ($('input[name=group8c]').is(':checked')) {
            // нажат       
            groupsArray[group8c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group8c.saturday_not_study = false];
        }
        if ($('input[name=group8d]').is(':checked')) {
            // нажат       
            groupsArray[group8d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group8d.saturday_not_study = false];
        }
        if ($('input[name=group8e]').is(':checked')) {
            // нажат       
            groupsArray[group8e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group8e.saturday_not_study = false];
        }
        if ($('input[name=group8f]').is(':checked')) {
            // нажат       
            groupsArray[group8f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group8f.saturday_not_study = false];
        }
        if ($('input[name=group9a]').is(':checked')) {
            // нажат       
            groupsArray[group9a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group9a.saturday_not_study = false];
        }
        if ($('input[name=group9b]').is(':checked')) {
            // нажат       
            groupsArray[group9b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group9b.saturday_not_study = false];
        }
        if ($('input[name=group9c]').is(':checked')) {
            // нажат       
            groupsArray[group9c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group9c.saturday_not_study = false];
        }
        if ($('input[name=group9d]').is(':checked')) {
            // нажат       
            groupsArray[group9d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group9d.saturday_not_study = false];
        }
        if ($('input[name=group9e]').is(':checked')) {
            // нажат       
            groupsArray[group9e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group9e.saturday_not_study = false];
        }
        if ($('input[name=group9f]').is(':checked')) {
            // нажат       
            groupsArray[group9f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group9f.saturday_not_study = false];
        }
        if ($('input[name=group10a]').is(':checked')) {
            // нажат       
            groupsArray[group10a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group10a.saturday_not_study = false];
        }
        if ($('input[name=group10b]').is(':checked')) {
            // нажат       
            groupsArray[group10b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group10b.saturday_not_study = false];
        }
        if ($('input[name=group10c]').is(':checked')) {
            // нажат       
            groupsArray[group10c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group10c.saturday_not_study = false];
        }
        if ($('input[name=group10d]').is(':checked')) {
            // нажат       
            groupsArray[group10d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group10d.saturday_not_study = false];
        }
        if ($('input[name=group10e]').is(':checked')) {
            // нажат       
            groupsArray[group10e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group10e.saturday_not_study = false];
        }
        if ($('input[name=group10f]').is(':checked')) {
            // нажат       
            groupsArray[group10f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group10f.saturday_not_study = false];
        }
        if ($('input[name=group11a]').is(':checked')) {
            // нажат       
            groupsArray[group11a.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group11a.saturday_not_study = false];
        }
        if ($('input[name=group11b]').is(':checked')) {
            // нажат       
            groupsArray[group11b.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group11b.saturday_not_study = false];
        }
        if ($('input[name=group11c]').is(':checked')) {
            // нажат       
            groupsArray[group11c.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group11c.saturday_not_study = false];
        }
        if ($('input[name=group11d]').is(':checked')) {
            // нажат       
            groupsArray[group11d.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group11d.saturday_not_study = false];
        }
        if ($('input[name=group11e]').is(':checked')) {
            // нажат       
            groupsArray[group11e.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group11e.saturday_not_study = false];
        }
        if ($('input[name=group11f]').is(':checked')) {
            // нажат       
            groupsArray[group11f.saturday_not_study = true];
        } else {
            // не нажаt     
            groupsArray[group11f.saturday_not_study = false];
        };

        if ($('input[name=group1a-second]').is(':checked')) {
            // нажат       
            groupsArray[group1a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group1a.second_shift = false];
        }
        if ($('input[name=group1b-second]').is(':checked')) {
            // нажат       
            groupsArray[group1b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group1b.second_shift = false];
        }
        if ($('input[name=group1c-second]').is(':checked')) {
            // нажат       
            groupsArray[group1c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group1c.second_shift = false];
        }
        if ($('input[name=group1d-second]').is(':checked')) {
            // нажат       
            groupsArray[group1d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group1d.second_shift = false];
        }
        if ($('input[name=group1e-second]').is(':checked')) {
            // нажат       
            groupsArray[group1e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group1e.second_shift = false];
        }
        if ($('input[name=group1f-second]').is(':checked')) {
            // нажат       
            groupsArray[group1f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group1f.second_shift = false];
        }
        if ($('input[name=group2a-second]').is(':checked')) {
            // нажат       
            groupsArray[group2a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group2a.second_shift = false];
        }
        if ($('input[name=group2b-second]').is(':checked')) {
            // нажат       
            groupsArray[group2b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group2b.second_shift = false];
        }
        if ($('input[name=group2c-second]').is(':checked')) {
            // нажат       
            groupsArray[group2c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group2c.second_shift = false];
        }
        if ($('input[name=group2d-second]').is(':checked')) {
            // нажат       
            groupsArray[group2d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group2d.second_shift = false];
        }
        if ($('input[name=group2e-second]').is(':checked')) {
            // нажат       
            groupsArray[group2e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group2e.second_shift = false];
        }
        if ($('input[name=group2f-second]').is(':checked')) {
            // нажат       
            groupsArray[group2f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group2f.second_shift = false];
        }
        if ($('input[name=group3a-second]').is(':checked')) {
            // нажат       
            groupsArray[group3a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group3a.second_shift = false];
        }
        if ($('input[name=group3b-second]').is(':checked')) {
            // нажат       
            groupsArray[group3b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group3b.second_shift = false];
        }
        if ($('input[name=group3c-second]').is(':checked')) {
            // нажат       
            groupsArray[group3c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group3c.second_shift = false];
        }
        if ($('input[name=group3d-second]').is(':checked')) {
            // нажат       
            groupsArray[group3d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group3d.second_shift = false];
        }
        if ($('input[name=group3e-second]').is(':checked')) {
            // нажат       
            groupsArray[group3e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group3e.second_shift = false];
        }
        if ($('input[name=group3f-second]').is(':checked')) {
            // нажат       
            groupsArray[group3f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group3f.second_shift = false];
        }
        if ($('input[name=group4a-second]').is(':checked')) {
            // нажат       
            groupsArray[group4a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group4a.second_shift = false];
        }
        if ($('input[name=group4b-second]').is(':checked')) {
            // нажат       
            groupsArray[group4b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group4b.second_shift = false];
        }
        if ($('input[name=group4c-second]').is(':checked')) {
            // нажат       
            groupsArray[group4c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group4c.second_shift = false];
        }
        if ($('input[name=group4d-second]').is(':checked')) {
            // нажат       
            groupsArray[group4d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group4d.second_shift = false];
        }
        if ($('input[name=group4e-second]').is(':checked')) {
            // нажат       
            groupsArray[group4e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group4e.second_shift = false];
        }
        if ($('input[name=group4f-second]').is(':checked')) {
            // нажат       
            groupsArray[group4f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group4f.second_shift = false];
        }
        if ($('input[name=group5a-second]').is(':checked')) {
            // нажат       
            groupsArray[group5a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group5a.second_shift = false];
        }
        if ($('input[name=group5b-second]').is(':checked')) {
            // нажат       
            groupsArray[group5b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group5b.second_shift = false];
        }
        if ($('input[name=group5c-second]').is(':checked')) {
            // нажат       
            groupsArray[group5c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group5c.second_shift = false];
        }
        if ($('input[name=group5d-second]').is(':checked')) {
            // нажат       
            groupsArray[group5d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group5d.second_shift = false];
        }
        if ($('input[name=group5e-second]').is(':checked')) {
            // нажат       
            groupsArray[group5e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group5e.second_shift = false];
        }
        if ($('input[name=group5f-second]').is(':checked')) {
            // нажат       
            groupsArray[group5f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group5f.second_shift = false];
        }
        if ($('input[name=group6a-second]').is(':checked')) {
            // нажат       
            groupsArray[group6a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group6a.second_shift = false];
        }
        if ($('input[name=group6b-second]').is(':checked')) {
            // нажат       
            groupsArray[group6b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group6b.second_shift = false];
        }
        if ($('input[name=group6c-second]').is(':checked')) {
            // нажат       
            groupsArray[group6c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group6c.second_shift = false];
        }
        if ($('input[name=group6d-second]').is(':checked')) {
            // нажат       
            groupsArray[group6d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group6d.second_shift = false];
        }
        if ($('input[name=group6e-second]').is(':checked')) {
            // нажат       
            groupsArray[group6e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group6e.second_shift = false];
        }
        if ($('input[name=group6f-second]').is(':checked')) {
            // нажат       
            groupsArray[group6f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group6f.second_shift = false];
        }
        if ($('input[name=group7a-second]').is(':checked')) {
            // нажат       
            groupsArray[group7a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group7a.second_shift = false];
        }
        if ($('input[name=group7b-second]').is(':checked')) {
            // нажат       
            groupsArray[group7b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group7b.second_shift = false];
        }
        if ($('input[name=group7c-second]').is(':checked')) {
            // нажат       
            groupsArray[group7c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group7c.second_shift = false];
        }
        if ($('input[name=group7d-second]').is(':checked')) {
            // нажат       
            groupsArray[group7d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group7d.second_shift = false];
        }
        if ($('input[name=group7e-second]').is(':checked')) {
            // нажат       
            groupsArray[group7e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group7e.second_shift = false];
        }
        if ($('input[name=group7f-second]').is(':checked')) {
            // нажат       
            groupsArray[group7f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group7f.second_shift = false];
        }
        if ($('input[name=group8a-second]').is(':checked')) {
            // нажат       
            groupsArray[group8a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group8a.second_shift = false];
        }
        if ($('input[name=group8b-second]').is(':checked')) {
            // нажат       
            groupsArray[group8b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group8b.second_shift = false];
        }
        if ($('input[name=group8c-second]').is(':checked')) {
            // нажат       
            groupsArray[group8c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group8c.second_shift = false];
        }
        if ($('input[name=group8d-second]').is(':checked')) {
            // нажат       
            groupsArray[group8d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group8d.second_shift = false];
        }
        if ($('input[name=group8e-second]').is(':checked')) {
            // нажат       
            groupsArray[group8e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group8e.second_shift = false];
        }
        if ($('input[name=group8f-second]').is(':checked')) {
            // нажат       
            groupsArray[group8f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group8f.second_shift = false];
        }
        if ($('input[name=group9a-second]').is(':checked')) {
            // нажат       
            groupsArray[group9a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group9a.second_shift = false];
        }
        if ($('input[name=group9b-second]').is(':checked')) {
            // нажат       
            groupsArray[group9b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group9b.second_shift = false];
        }
        if ($('input[name=group9c-second]').is(':checked')) {
            // нажат       
            groupsArray[group9c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group9c.second_shift = false];
        }
        if ($('input[name=group9d-second]').is(':checked')) {
            // нажат       
            groupsArray[group9d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group9d.second_shift = false];
        }
        if ($('input[name=group9e-second]').is(':checked')) {
            // нажат       
            groupsArray[group9e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group9e.second_shift = false];
        }
        if ($('input[name=group9f-second]').is(':checked')) {
            // нажат       
            groupsArray[group9f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group9f.second_shift = false];
        }
        if ($('input[name=group10a-second]').is(':checked')) {
            // нажат       
            groupsArray[group10a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group10a.second_shift = false];
        }
        if ($('input[name=group10b-second]').is(':checked')) {
            // нажат       
            groupsArray[group10b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group10b.second_shift = false];
        }
        if ($('input[name=group10c-second]').is(':checked')) {
            // нажат       
            groupsArray[group10c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group10c.second_shift = false];
        }
        if ($('input[name=group10d-second]').is(':checked')) {
            // нажат       
            groupsArray[group10d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group10d.second_shift = false];
        }
        if ($('input[name=group10e-second]').is(':checked')) {
            // нажат       
            groupsArray[group10e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group10e.second_shift = false];
        }
        if ($('input[name=group10f-second]').is(':checked')) {
            // нажат       
            groupsArray[group10f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group10f.second_shift = false];
        }
        if ($('input[name=group11a-second]').is(':checked')) {
            // нажат       
            groupsArray[group11a.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group11a.second_shift = false];
        }
        if ($('input[name=group11b-second]').is(':checked')) {
            // нажат       
            groupsArray[group11b.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group11b.second_shift = false];
        }
        if ($('input[name=group11c-second]').is(':checked')) {
            // нажат       
            groupsArray[group11c.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group11c.second_shift = false];
        }
        if ($('input[name=group11d-second]').is(':checked')) {
            // нажат       
            groupsArray[group11d.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group11d.second_shift = false];
        }
        if ($('input[name=group11e-second]').is(':checked')) {
            // нажат       
            groupsArray[group11e.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group11e.second_shift = false];
        }
        if ($('input[name=group11f-second]').is(':checked')) {
            // нажат       
            groupsArray[group11f.second_shift = true];
        } else {
            // не нажаt     
            groupsArray[group11f.second_shift = false];
        }
        console.log(groupsArray);
        console.log('Кнопка нажата!');
        localStorage.setItem("groups", JSON.stringify(groupsArray));

        if (groupsArray.length === 0) {
            alert("Не выбрали классы");
        }
    })
});