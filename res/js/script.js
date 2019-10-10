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
        let courseTitle = $("#title");
        let semester = $("#semester");
        let grade = $("#grade");
        let lastId = $("#courses tr:last").find("td:first").html();

        let tr = $("<tr></tr>");
        let td1 = $("<td></td>").text(parseInt(lastId)+1);
        let td2 = $("<td></td>").text(courseTitle.val());
        let td3 = $("<td></td>").text(semester.val());
        let td4 = $("<td></td>").text(grade.val());

        tr.append((td1));
        tr.append((td2));
        tr.append((td3));
        tr.append((td4));

        table.append(tr);

        courseTitle.val("");
        semester.val("");
        grade.val("");

        $("#add-course").toggle();

        calculateGPA();
    });

    function calculateGPA() {
        let rowCount = $("#courses tr").length -1;
        let pointSum = 0;
        let gradePoint = 0;

        $("#courses tr td:nth-child(4)").each(function() {
            let gradeValue = $(this).text();
            if (gradeValue > 90)  gradePoint = 4;
            else if (gradeValue > 80)  gradePoint = 3;
            else if (gradeValue > 70)  gradePoint = 2;
            else if (gradeValue > 60)  gradePoint = 1;
            else if (gradeValue > 50)  gradePoint = 0.5;
            else if (gradeValue <= 50)  gradePoint = 0;

            pointSum += parseFloat(gradePoint);
        });

        this.gpa = Math.round(pointSum/rowCount*100.0)/100.0;
        $("#gpa strong").text(this.gpa);
    }
    
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