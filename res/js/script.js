$(function () {
    var user = new User("Ahto","Leemet","28/10/1998","Car mechanic","4.5")

    var courses = [
        new Course("Agile software development","1","82"),
        new Course("System modeling","1","85"),
        new Course("Object-orientated programming","2","99"),
        new Course("Estonian language Level A2","2","65")

    ];
    init();
    
    function init() {
        $("#name").text(user.firstname +" "+ user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculity);


    }
});