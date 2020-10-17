 function validation()
            {
            var fuser=document.getElementById('userf').value;
            var luser=document.getElementById('userl').value;
            var emails=document.getElementById('emails').value;
            var mobileNumber=document.getElementById('mobileNumber').value;
            var techno=document.getElementById('technology').value;
            var resume=document.getElementById('resume').value;
           
           if(fuser == ""){
                  document.getElementById('usernamef').innerHTML="please enter firstname ";
                  return false;
            }
            if((fuser.length <= 2) || (fuser.length>20)){
                  document.getElementById('usernamef').innerHTML="Firsrname length must be in between 2 to 20";
                  return false;
            }
            if(!isNaN(fuser)){
                  document.getElementById('usernamef').innerHTML="please enter only characters";
                  return false;
            }
            if(luser == ""){
                  document.getElementById('usernamel').innerHTML="please enetr lastname";
                  return false;
            }
            if((luser.length <= 2) || (luser.length>20)){
                  document.getElementById('usernamel').innerHTML="Lastname length must be in between 2 to 20";
                  return false;
            }
            if(!isNaN(luser)){
                  document.getElementById('usernamel').innerHTML="Please enter only characters";
                  return false;
            }
            if(emails == ""){
                  document.getElementById('emailids').innerHTML="please enter email address";
                  return false;
            }
            if(emails.indexOf('@') <= 0){
                  document.getElementById('emailids').innerHTML="email should not start with @";
                  return false;
            }
            if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
                  document.getElementById('emailids').innerHTML="Please enter valid email .";
                  return false;
            }
            if((emails.charAt(emails.length-3)!='c') && (emails.charAt(emails.length-2)!='c')){
                  document.getElementById('emailids').innerHTML="Please enter valid email .c";
                  return false;
            }
            if(emails.charAt(emails.length-2)!='o'){
                  document.getElementById('emailids').innerHTML="Please enter valid email .o";
                  return false;
            }
            if(emails.charAt(emails.length-1)!='m'){
                  document.getElementById('emailids').innerHTML="Please enter valid email .m";
                  return false;
            }
            if(mobileNumber == ""){
                  document.getElementById('mobiles').innerHTML="please fill the mobile number field";
                  return false;
            }
            if(isNaN(mobileNumber)){
                  document.getElementById('mobiles').innerHTML="Only digits are allowed";
                  return false;
            }
            if(mobileNumber.length!=10){
                  document.getElementById('mobiles').innerHTML="mobile number must be only 10 digits";
                  return false;
            }
            if(techno == ""){
                  document.getElementById('tech').innerHTML="please enter technology";
                  return false;
            }
            if((techno.length <= 2) || (techno.length>20)){
                  document.getElementById('tech').innerHTML="technology length must be in between 2 to 20";
                  return false;
            }
            if(!isNaN(techno)){
                  document.getElementById('tech').innerHTML="only characters are allowed";
                  return false;
            }


            if(resume == ""){
                  document.getElementById('resumes').innerHTML="please upload the resume";
                  return false;
            }
            
            }
