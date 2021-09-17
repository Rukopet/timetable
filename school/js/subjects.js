discipline = ["Математика", "Русский язык", "Литература", "Иностранный язык", "История", "Физическая культура", "Музыка", "Технология", "Химия", "Биология", "Физика", "Экология", "География", "Естествознание", "Астрономия", "Окружающий мир", "ИЗО", "Обществознание", "Информатика", "Геометрия"]

//et state = {view: {discipline1-pair: false}}

//const f = (event) => {
//    if (event.target.checked){
//        $(event.target).next().css("display", "inline-block");
//    }
//    else
//    {
//    $(event.target).next().css("display", "none");
//    }
//}
// <option value="pair' + i + '"  - пример
$(function() {

    console.log("hello subjects js");



    var parent = $(".discipline_container");
    for (let i = 0; i < discipline.length; i++) {
        const item = discipline[i];
        var id = "disp_one_cont" + i;
        parent.append("<div class='discipline' id='" + id + "' " +
            +"> <div class='discipline" + i + "' " + "id='discipline" + i + "' " + "> " + item + "  </div>   </div>");

        var innerParent = $("#" + id);
        innerParent.append("<div class='discipline-chek'> <input type='checkbox'  name='discipline" + i + "' " + " value='discipline" + i + "' " + " checked>     <input type='checkbox' class='discipline1-pair' name='discipline1-pair' value='discipline1-pair'> <select class='pair" + i + "' id='pair" + i + "' multiple name='pair" + i + "'><option disabled>укажите второй предмет</option></select></div>");
        //innerParent.append("<div class='discipline-chek'> <input type='checkbox'  name='discipline" + i + "' " + " value='discipline" + i + "' " + " checked>     <input type='checkbox' class='discipline1-pair' name='discipline1-pair' value='discipline1-pair'> <input type='checkbox' class='discipline2-pair' name='discipline2-pair' value='discipline2-pair'> </div>");
        //innerParent.find('.discipline1-pair').change(f)
        //
    }

    discipline.forEach((item, i, discipline) => {
        $("#pair0").append('<option value="pair1">' + discipline[i] + '</option>');
    });

    // $('#' + id).is(":checked")

    $("#subjects_next_page").click(function() {
        console.log('Кнопка нажата!');
        var subjects = getAllCurrent();
        localStorage.setItem("subjects", JSON.stringify(subjects));
    })

});

function getAllCurrent() {

    var arr = [];
    $('.discipline_container').children('div').each(function() {
        console.log(this); // "this" is the current element in the loop

        var str = $(this).text().trim();
        arr.push(str);
    });

    return arr;
}