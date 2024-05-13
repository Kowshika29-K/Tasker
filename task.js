function newpage(){

    var pword=document.getElementById("pass").value;
    var em=document.getElementById("mail").value;
    var para=document.getElementById("pa")
    

    function filterpassword(pass) {
        var regex = /^^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
        return regex.test(pass);
    }

    function filterema(mail) {
        var regex1 = /^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex1.test(mail);
    }

    if(filterpassword(pword)&&filterema(em)){
        location.href="home.html"
    }
    else{
        para.style.display="block"   
    }
   

}