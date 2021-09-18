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
                innerParent.append("<div class='discipline-chek'> <input type='checkbox'  name='discipline" + i + "' " + " value='discipline" + i + "' " + " checked>     <input type='checkbox' class='discipline-pair" + i +"' name='discipline-pair" + i +"' value='discipline-pair" + i +"'> <div class='select_pair'><select class='pair' id='pair' multiple name='pair" + i + "'><option disabled>укажите второй предмет</option></select></div></div>");

        //innerParent.append("<div class='discipline-chek'> <input type='checkbox'  name='discipline" + i + "' " + " value='discipline" + i + "' " + " checked>     <input type='checkbox' class='discipline1-pair' name='discipline1-pair' value='discipline1-pair'> <input type='checkbox' class='discipline2-pair' name='discipline2-pair' value='discipline2-pair'> </div>");
        //innerParent.find('.discipline1-pair').change(f)
        //
    }


    getAllCurrent();

    $(".discipline-pair0").click(function(){
        
        if ($('.discipline-pair0').prop('checked')) {
            $('.select_pair').fadeIn().show();
            console.log('hide-show');
            discipline.forEach((item, i, discipline) => {
            $("#pair").append('<option value="pair1">' + discipline[i] + '</option>');
        })}
        else {
            
        }
    });

    // $('#' + id).is(":checked")

    $("#subjects_next_page").click(function() {
        console.log('Кнопка нажата!');
        var subjects = getAllCurrent();
        localStorage.setItem("subjects", JSON.stringify(subjects));
        // alert("dd")
    })

});

function getAllCurrent() {

    var arr = [];
    $('.discipline_container').children('div').each(function() {
        console.log(this); // "this" is the current element in the loop

        var str =  $(this)
        .clone()    //clone the element
        .children() //select all the children
        .remove()   //remove all the children
        .end()  //again go back to selected element
        .text().trim();
        
        console.log(str);
        arr.push(str);
    });

    return arr;
}
