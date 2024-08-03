function validate()
{
    var nam = document.forms["formvalidate"]["namevalue"].value;
    var ema = document.forms["formvalidate"]["emailvalue"].value;
    var web = document.forms["formvalidate"]["websitevalue"].value;
    var imgv = document.forms["formvalidate"]["imgvalue"].value;
    if (nam == "")
    {
        alert("Please enter valid Name !");
    }
    else if (ema=="" || emailvalidation()==false){
        alert("Please enter valid Email Id !");
    }
    else if(web=="" || websitevalidation()==false){
        alert("Please enter valid Website Name !");
    }
    else if(imgv==""){
        alert("Please enter valid Image Link !");
    }
    else{
        var v=confirm("Do you want to submit the form !")
        if (v==true){
            Add();
        }
    }
}

// Function for validation of the Email

function emailvalidation(){
    var temp=document.getElementById("email").value;
    var regx= /^([a-z 0-9\.-]+)@([a-z 0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (regx.test(temp)){
        return true;
    }
    else{
        return false;  
    }
}

// Function for validation of the Website

function websitevalidation(){
    var temp=document.getElementById("website").value;
    var regx= /^(www)\.[0-9a-z\.]+\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (regx.test(temp)){
        return true;
    }
    else{
        return false;
    }
}


let count=0;

// Function to Add the input data to the display Table

function Add()
{
    var gender = genderselect();
    var skill  = skillvalues();
    if ($("#product tbody").length == 0) {
        $("#product").append("<tbody></tbody>");
    }

    // Different Styling for even row element

    if (count== 0) {
        $("#product tbody").append(
            "<tr>" + 
                "<td id='new' class='animated fadeInLeft' style='height:100px'>" 
                        + "<b>" + $("#name").val() + "</b>" + "<br>" + gender + "<br>" +
                        $("#email").val() + "<br>" + 
                        '<a href="'+"https://"+ $("#website").val() + '" target="_blank" > '+ $("#website").val() +'</a>' 
                        + "<br>" + skill + 
                "</td>" + 
                "<td id='new' class='animated fadeInLeft'>" +
                         '<a href="' + $("#image").val() + '" target="_blank">' 
                        + '<img src="'+ $("#image").val() + '" alt="Photo" style="width:125px;height:100px"></a>' +
                "</td>" +
            "</tr>");
        count=1;

    }

    // Different Styling for odd row element

    else {
        $("#product tbody").append(
            "<tr>" +
                "<td id='new' class='animated fadeInLeft' style='height:100px'>" 
                    + "<b>" + $("#name").val() + "</b>" + "<br>" +  gender + "<br>" +
                    '<a href="' + "https://"+ $("#website").val() + '" target="_blank" > '+ $("#website").val() +'</a>' + 
                    "<br>" + $("#email").val() +"<br>" + skill + 
                "</td>" + 
                "<td id='new' class='animated fadeInLeft'>" + 
                    '<a href="' + $("#image").val() + '" target="_blank">' 
                    + '<img src="'+ $("#image").val() + '" alt="Photo"  style="width:125px;height:100px"></a>' +
                "</td>" + 
            "</tr>");
        count=0;
    }
    document.getElementById("myform").reset();
}

// function to take input value of the gender choice from radio buttons

function genderselect()
{
    var selected = document.querySelector('input[name="genderselect"]:checked').id;
    return selected;
}


// function to take input values from Skills choices checkbox

function skillvalues()
{
    const choices = document.querySelectorAll('input[name="skillvalue"]');
    let Value = [];
    for (const choice of choices) {
        if (choice.checked) {
            Value.push(choice.value);
        }
    }
    return Value.toString();
}