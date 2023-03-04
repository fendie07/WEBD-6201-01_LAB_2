(function(){

    let mainContent = document.getElementById("main")

    mainContent.setAttribute("class", "container")


    let title = document.getElementById("title")


    title.textContent = "Register"

    let mainParagraph = document.createElement("p")
       
    mainParagraph.setAttribute("id", "MainParagraph")
        
    mainParagraph.setAttribute("class", "mt-3")

        
    mainParagraph.textContent = "Create your own account. It's free and only takes a minute! We only record 50% of your private data including SIN and Bank Info!"
        
    mainContent.append(mainParagraph)

    let ErrorMessage = document.createElement("div")
    ErrorMessage.setAttribute("id", "ErrorMessage")
    ErrorMessage.setAttribute("class", "container")
    mainContent.prepend(ErrorMessage)

        
    


    function TestFirstName(){
        
        let ErrorMessageArea = $('#ErrorMessage').hide()
        let firstNamePattern = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i

        $('#firstName').on("blur", function(){
            let firstNameText = $(this).val()
            if (!firstNamePattern.test(firstNameText)){
                $(this).trigger("focus").trigger("select")
                ErrorMessageArea.addClass("alert alert-danger")
                ErrorMessageArea.text("Please Enter a valid first name")
                ErrorMessageArea.show()
            }
            else if (firstNameText.length < 2){
                $(this).trigger("focus").trigger("select")
                ErrorMessageArea.addClass("alert alert-danger")
                ErrorMessageArea.text("Please Enter a first name longer than two letters")
                ErrorMessageArea.show()
            }
            else{
                ErrorMessageArea.removeAttr("class")
                ErrorMessageArea.hide()
            }
        })
    }
    function TestLastName(){
        
        let ErrorMessageArea = $('#ErrorMessage').hide()
        let lastNamePattern = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i

        $('#lastName').on("blur", function(){
            let lastNameText = $(this).val()
            if (!lastNamePattern.test(lastNameText)){
                $(this).trigger("focus").trigger("select")
                ErrorMessageArea.addClass("alert alert-danger")
                ErrorMessageArea.text("Please Enter a valid last name")
                ErrorMessageArea.show()
            }
            else if (lastNameText.length < 2){
                $(this).trigger("focus").trigger("select")
                ErrorMessageArea.addClass("alert alert-danger")
                ErrorMessageArea.text("Please Enter a last name longer than two letters")
                ErrorMessageArea.show()
            }
            else{
                ErrorMessageArea.removeAttr("class")
                ErrorMessageArea.hide()
            }
        })
    }
    function TestEmail(){
        
        let ErrorMessageArea = $('#ErrorMessage').hide()
        let emailPattern = /^\S+@\S+\.\S+$/i

        $('#inputEmail').on("blur", function(){
            let emailText = $(this).val()
            if (!emailPattern.test(emailText)){
                $(this).trigger("focus").trigger("select")
                ErrorMessageArea.addClass("alert alert-danger")
                ErrorMessageArea.text("Please Enter a valid email")
                ErrorMessageArea.show()
            }
            else if(emailText.length < 8){
                $(this).trigger("focus").trigger("select")
                ErrorMessageArea.addClass("alert alert-danger")
                ErrorMessageArea.text("Email address must be at least 8 characters")
                ErrorMessageArea.show()
            }
            else{
                ErrorMessageArea.removeAttr("class")
                ErrorMessageArea.hide()
            }
        })
    }
    function TestPassword(){
        
        let ErrorMessageArea = $('#ErrorMessage').hide()
        
        let passwordInput = $('#inputPassword2').val()

        $('#confirmPassword').on("blur", function(){
            let confirmPassword = $(this).val()
            if (!confirmPassword.test(passwordInput)){
                $(this).trigger("focus").trigger("select")
                ErrorMessageArea.addClass("alert alert-danger")
                ErrorMessageArea.text("Ensure password and confirmed password match")
                ErrorMessageArea.show()
            }
            else{
                ErrorMessageArea.removeAttr("class")
                ErrorMessageArea.hide()
            }
        })
    }


    function Start(){
    
        TestFirstName()
        TestLastName()
        TestEmail()
        TestPassword


    }
    

    let humanResourcesIcon = document.createElement("i")

    humanResourcesIcon.setAttribute("class", "fa-solid fa-person")
        

    let navBar = document.getElementById("navbarNav")



    let humanResourcesLink = document.createElement("a")

    let humanResources = document.createElement("li")

    humanResources.setAttribute("class", "nav-item")


    humanResourcesLink.innerHTML = "<i class = fa-solid fa-person></i>Human Resources"

    humanResourcesLink.setAttribute("href", "#")

    humanResourcesLink.setAttribute("class", "nav-link")

    humanResourcesLink.insertBefore(humanResourcesIcon, humanResourcesLink.children[0])

    humanResources.appendChild(humanResourcesLink)

    navBar.insertBefore(humanResources, navBar.children[4])


    window.addEventListener("load", Start)
})()