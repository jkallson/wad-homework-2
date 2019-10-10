$(function () {
    var user = new User("Ahto","Leemet","28/10/1998","Car mechanic","4.5")

    var courses = [
        new Course("Agile software development","1","82"),
        new Course("System modeling","1","85"),
        new Course("Object-orientated programming","2","109"),
        new Course("Estonian language Level A2","2","65")

    ];

    init();

    $("#courses-button").click(function () {
        $(".tab").removeClass("active");
        $("#courses-container").addClass("active");
        $("#courses-button").addClass("active");
        $("#profile-button").removeClass("active");

    });

    $("#profile-button").click(function () {
        $(".tab").removeClass("active");
        $("#profile-container").addClass("active");
        $("#courses-button").removeClass("active");
        $("#profile-button").addClass("active");
    });

    $("#add-course-button").click(function () {
        $("#add-course").toggle();
    });

    $("#save-course").click(function () {
        let table = $("#courses");
        let courseTitle = $("#title").val();
        let semester = $("#semester").val();
        let grade = $("#grade").val();
        let lastId = $("#courses tr:last").find("td:first").html();

        let tr = $("<tr></tr>");
        let td1 = $("<td></td>").text(parseInt(lastId)+1);
        let td2 = $("<td></td>").text(courseTitle);
        let td3 = $("<td></td>").text(semester);
        let td4 = $("<td></td>").text(grade);

        tr.append((td1));
        tr.append((td2));
        tr.append((td3));
        tr.append((td4));

        table.append(tr);

        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");

        $("#add-course").toggle();

    });

    
    function init() {
        $("#name").text(user.firstname +" "+ user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculity);

        let table = $("#courses");
        table.find("tbody tr").remove();
        for (let i = 0; i < courses.length; i++) {
            let tr = $("<tr></tr>");
            let th1 = $("<td>").text(i+1);
            let th2 = $("<td>").text(courses[i].title);
            let th3 = $("<td>").text(courses[i].semester);
            let th4 =$("<td>").text(courses[i].grade);

            tr.append(th1);
            tr.append(th2);
            tr.append(th3);
            tr.append(th4);

            table.append(tr);
        }
    }
});