

//*******Login Section
var login={
	name:"Anu",
	password:"2008"
}


function validate(){
	var name= document.getElementById('username').value;
	var password=document.getElementById('password').value;
	if (name===login.name && password===login.password){
		document.write("I did it!!! We mueeeveeee!!!")
	}

	else{
		alert("Invalid Login details");
	}
}



//*********SignUp Section

function signUp(){
	var password=document.getElementById('password').value;
	if (password.length < 8){
		//**I commented out the function already
		movement();
	}

}

//**copied online from codepen 
//** I don't know how jquery works yet
// but i can see that they created a class and linked it to the submit button
//it didnt work for me

 // $(function movement(){
	//     $(".move").on({
	//         mouseover:function(){
	//             $(this).css({
	//                 left:(Math.random()*90)+"%",
	//                 top:(Math.random()*90)+"%",
	//             });
	//         }
	//     });
	//     $(".btn-wrap").hover(function() {
	//        	$(this).toggleClass('active');
	//     });
	// });

	// $('.move').bind('touchstart', function(){
	//     $(this).css({
 //            left:(Math.random()*90)+"%",
 //            top:(Math.random()*90)+"%"
 //        });
	// })
