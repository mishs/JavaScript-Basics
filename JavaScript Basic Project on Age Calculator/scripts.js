function ageFunction() {
    var ageDetail;

    var age = document.forms.ageForm.age.value;

    if (age < 0 ) {
        alert("Age cannot be negative");
    } /* USE && --https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and*/
    else if (age > 0 && age < 16) {
        ageDetail = "Still young, stay in school!";
    }
    else if (age >= 16  && age < 20) {
        ageDetail = "Young adult, at least you can now get your driver's license!";
    }
    else if (age >= 21 && age < 65) {
        ageDetail = "Welcome to adulthood!";
    }
    else if (age > 65) {
        ageDetail = "Senior Citizen-You Tell Us What to Tell!";
    }
    else {
        alert("Please enter a valid age");
    }

    document.getElementById('feedback').innerHTML = ageDetail;
 /*Use Brad Hussey's style */
    document.getElementById('result').style.display = 'block';
    return false;
}
