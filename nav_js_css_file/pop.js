
var popdisplay= document.getElementById("loginBtn")
popdisplay.addEventListener("click", function(){
    var popCont= document.getElementById("myNav")
    popCont.style.display="flex"
})

var popCross=document.getElementById("popPlus")

popCross.addEventListener("click", function(){

    document.getElementById("myNav").style.display="none"

    document.getElementById("inputmobOtp").value="";
    document.getElementById("inputmailOtp").value="";

    document.getElementById("popInpMob").value="";
    document.getElementById("popInpEmail").value="";
    document.getElementById("popBtn").style.backgroundImage="none";
    document.getElementById("popOtpBtn").style.backgroundImage="none";

})

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
    document.getElementById("inputmobOtp").value="";
    document.getElementById("inputmailOtp").value="";

    document.getElementById("popInpMob").value="";
    document.getElementById("popInpEmail").value="";

    document.getElementById("popOtp").style.display="none"
    document.getElementById("popBox").style.display="block" 
    document.getElementById("popBtn").style.backgroundImage="none";
    document.getElementById("popOtpBtn").style.backgroundImage="none";

}

var selectEmail=document.getElementById("selectEmail")

selectEmail.addEventListener("click", function(){
    
    document.getElementById("popInpMob").value = "";

    document.getElementById("popMobileDiv").style.display="none";

    var selectMobile=document.getElementById("popEmailDiv");
    selectMobile.style.display="block";

    document.getElementById("popMobileOtp").style.display="none"
    document.getElementById("popEmailOtp").style.display="block"

    document.getElementById("popBtn").style.backgroundImage="none";
    document.getElementById("popOtpBtn").style.backgroundImage="none";
})



var selmob= document.getElementById("selectMobile")
selmob.addEventListener("click", function(){
    document.getElementById("popInpEmail").value = "";
    document.getElementById("popEmailDiv").style.display="none"
    document.getElementById("popMobileDiv").style.display="block"

    document.getElementById("popEmailOtp").style.display="none"
    document.getElementById("popMobileOtp").style.display="block"

    document.getElementById("popBtn").style.backgroundImage="none";
    document.getElementById("popOtpBtn").style.backgroundImage="none";
})


//  otp pop up close==========================

// var otpCross=document.getElementById("popPlusOtp").addEventListener("click", function(){
//     document.getElementById("popContainer").style.display="none"
    
//     document.getElementById("popOtp").style.display="none"
//     document.getElementById("popBox").style.display="block"
    
// })

// ----------------------------------------------

var flage=""

// button color change when mobile number is correct
document.getElementById("popInpMob").addEventListener("input", function(){
    var mobSize=document.getElementById("popInpMob").value
    // console.log(mobSize)
    if(mobSize.length==10)
    {
    
        document.getElementById("popBtn").style.backgroundImage="linear-gradient(to bottom right, #8d2369, #d44154)";
         flage=true
        
    }
    else{
        
        document.getElementById("popBtn").style.backgroundImage="none";
        flage=false
    }
})

// console.log(flage)
//------------------------------------------------------------

var mailflag=false

//-------------------------------------------------------------


document.getElementById("popInpEmail").addEventListener("input", function(){
    var email1Size=document.getElementById("popInpEmail").value
    // console.log(mobSize)
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(email1Size.match(mailformat))
    {
    
        document.getElementById("popBtn").style.backgroundImage="linear-gradient(to bottom right, #8d2369, #d44154)";
        mailflag=true
    }
    else{
        
        document.getElementById("popBtn").style.backgroundImage="none";
        mailflag=false

    }
})



// continue button

var popBtn=document.getElementById("popBtn").addEventListener("click", gotoOtp)

function gotoOtp(){
   
    if(flage)
    {

        var getmobno=document.getElementById("popInpMob").value
        document.getElementById("dispopMob").textContent="on +91"+"  "+getmobno;


        document.getElementById("popBox").style.display="none"
        document.getElementById("popEmailOtp").style.display="none"
        document.getElementById("popMobileOtp").style.display="block"
        document.getElementById("popOtp").style.display="block"
    }

    if(mailflag)
    {

      var getmailid=document.getElementById("popInpEmail").value
        document.getElementById("dispopEmal").textContent="on"+ " "+getmailid;

        document.getElementById("popBox").style.display="none"
        document.getElementById("popMobileOtp").style.display="none"
        document.getElementById("popEmailOtp").style.display="block"
        
        document.getElementById("popOtp").style.display="block"
    }
}

// edit email===============================================================

document.getElementById("editEmail").addEventListener("click", function(){
    document.getElementById("popOtp").style.display="none"
    document.getElementById("popBox").style.display="block"
})


// edit mobile no==================================================

document.getElementById("editMobile").addEventListener("click", function(){
    document.getElementById("popOtp").style.display="none"
    document.getElementById("popBox").style.display="block"
})



// OTP verification ==================================

document.getElementById("inputmobOtp").addEventListener("input", function(){
    var mobOtp=document.getElementById("inputmobOtp").value;
    if(mobOtp.length==6)
    {
    
        document.getElementById("popOtpBtn").style.backgroundImage="linear-gradient(to bottom right, #8d2369, #d44154)";
         flage=true
        
    }
    else{
        
        document.getElementById("popOtpBtn").style.backgroundImage="none";
        flage=false
    }

})

document.getElementById("inputmailOtp").addEventListener("input", function(){
    var emilOtp=document.getElementById("inputmailOtp").value;
    if(emilOtp.length==6)
    {
    
        document.getElementById("popOtpBtn").style.backgroundImage="linear-gradient(to bottom right, #8d2369, #d44154)";
         flage=true
        
    }
    else{
        
        document.getElementById("popOtpBtn").style.backgroundImage="none";
        flage=false
    }

})


// OTP Data ================================================

document.getElementById("popOtpBtn").addEventListener("click", function(){
    var mobOtp=document.getElementById("inputmobOtp").value;
    var emilOtp=document.getElementById("inputmailOtp").value;

    if(emilOtp==123456 ||  mobOtp==123456){
        document.getElementById("myNav").style.display="none"
    
        document.getElementById("popOtp").style.display="none"
        document.getElementById("popBox").style.display="block" 
        document.getElementById("loginBtn").style.display="none"

        document.getElementById("inputmobOtp").value="";
        document.getElementById("inputmailOtp").value="";

        document.getElementById("popInpMob").value="";
        document.getElementById("popInpEmail").value="";
        
        document.getElementById("signInText").style.display="none";
        document.getElementById("profileIcon").style.display="block";
        document.getElementById("profileIcon").style.fontSize="18px";
      
        document.getElementById("loginBtn").style.display="none"
        document.getElementById("logOut").style.display="block"
        
    }   

})

