function showConfirm(msg,callBack){

    var confirmBox=document.createElement("div");
    confirmBox.classList.add('confirm-box');

    var messageBox=document.createElement("div");
    messageBox.classList.add('message-box');
    messageBox.textContent=msg;
    confirmBox.appendChild(messageBox);

    var buttonBox=document.createElement("div");
    buttonBox.classList.add('button-box');
    messageBox.appendChild(buttonBox);

    var yesButton=document.createElement("button");
    yesButton.classList.add("yes-button")
    yesButton.textContent="Yes";
    buttonBox.appendChild(yesButton);
    yesButton.addEventListener('click',yesBUttonClick);

    var noButton=document.createElement("button");
    noButton.classList.add("no-button");
    noButton.textContent="No";
    buttonBox.appendChild(noButton);
    noButton.addEventListener('click',noButtonClick);

    function removeConfirmBox(){
        document.body.removeChild(confirmBox);
    }

    function yesBUttonClick(){
        callBack(true);
        removeConfirmBox();

    }
    function noButtonClick(){
        callBack(false)
        removeConfirmBox();

    }

    document.body.appendChild(confirmBox)
}
showConfirm("Are you 18 years old or not",function(result){
    if(result){
        console.log("You press Yes.")

    }else{
        console.log("You Press No.")

    }

});