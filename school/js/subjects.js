discipline = ["Математика", "Русский язык", "Литература", "Иностранный язык", "История", "Физическая культура", "Музыка", "Технология", "Химия", "Биология", "Физика", "Экология", "География", "Естествознание", "Астрономия", "Окружающий мир", "ИЗО", "Обществознание", "Информатика", "Геометрия"]

$(function() {

    console.log("hello subjects js");

    var parent = $(".discipline_container");
    for (let i = 0; i < discipline.length; i++) {
        const item = discipline[i];
        var id = "disp_one_cont" + i;
        parent.append("<div class='discipline' id='" + id + "' " +
            +"> <div class='discipline" + i + "' " + "id='discipline" + i + "' " + "> " + item + "  </div>   </div>");

        var innerParent = $("#" + id);
                innerParent.append("<div class='discipline-chek'> <input type='checkbox'  name='discipline" + i + "' " + " value='discipline" + i + "' " + " checked>     <input type='checkbox' class='discipline-pair" + i +"' name='discipline-pair" + i +"' value='discipline-pair" + i +"'> <div class='select_pair'><select class='pair' id='pair" + i + "' name='pair" + i + "'><option disabled>укажите второй предмет</option></select></div></div>");

      
        var disciplineId = ".discipline-pair" + i;
        console.log(disciplineId)
        $(disciplineId).on("click", function(){
            
            var id = i;
            console.log("hello " + id)
            if ($('.discipline-pair' + id).prop('checked')) {
                $('.select_pair').fadeIn().show();
                console.log('hide-show');            
                discipline.forEach((item, i, discipline) => {
                $("#pair" + id).append('<option value="pair1">' + discipline[i] + '</option>');
            })}
            else {
                
            }
        });
    }

    getAllCurrent();    
    getJson();

    $("#subjects_next_page").click(function() {
        console.log('Кнопка нажата!');
        var subjects = getAllCurrent();
        localStorage.setItem("subjects", JSON.stringify(subjects));
        // alert("dd")
        var subjects_json = getJson();
        localStorage.setItem("subjects_json", JSON.stringify(subjects_json));
    
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
function getJson() {

    var arrJson = [];
    
    // $('.discipline_container').children('div').each(function() {
    //     console.log(this); 
    //     var strJson = $(this)
    //     .clone()    //clone the element
    //     .children() //select all the children
    //     .remove()
    //     .end() 
    //     .text().trim();// "this" is the current element in the loop
    // $( ".discipline" ).each(function(index) {
    //     $(this).on("click", function(){
    //         // For the boolean value
    //         // For the mammal value
    //         var mammalKey = $(this).attr('id'); 
   
     for (let i = 0; i < discipline.length; i++) {
    var object = {}
    
      
    object.discipline = discipline[i];
    var discId = i;
    document.getElementById('pair' + discId).addEventListener('change', function() {
    function getSelectedText(elementId) {
        var elt = document.getElementById(elementId);
    
        if (elt.selectedIndex == -1)
            return null;
    
        return elt.options[elt.selectedIndex].text;
    }
    var text = getSelectedText("pair0");
    // var text = getSelectedText("pair" + discId);
    console.log(text)
    // document.getElementById('pair' + discId).addEventListener('change', function() {
    //     var n = this.value;
    //     var e = (selection.options[index].innerHTML);
    //     console.log(e)
    //     // var n = $( "'pair' + discId option:selected" ).text(); 
    //     //  var txt = n.text;
    object.pair = text;
    arrJson.push(object)
    //      console.log(arrJson)
      
});
// arrJson.push(object)
}
    console.log(arrJson)
}
