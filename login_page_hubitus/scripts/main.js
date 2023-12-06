btn.style.cursor = 'pointer';
user_name.style.cursor = 'text';
userpassword.style.cursor = 'text';
let usern;
let passw;

btn.addEventListener("click", vorbereiten);

function vorbereiten () {
 	usern = document.getElementById('user_name').value;
  	passw = document.getElementById('userpassword').value;
  	if (usern.length > 0 && passw.length > 0) { 
    	anfrage_abschicken(usern, passw)
  	}
};

async function anfrage_abschicken(usern, passw){
	alert("username: "+ usern + ", password: " + passw)
	// await fetch('https://sxwman622o.de.airbusds.corp/login', {
	// 	method: "POST",
	// 	headers: {"content-type": "application/json"},
	// 	body: JSON.stringify({"username": usern, "password": passw}),
	//  })

	// window.location.replace("/protected");
	document.getElementById('user_name').value =""
	document.getElementById('userpassword').value=""
	document.getElementById('user_name').classname  ="user_icon_black"
	document.getElementById('userpassword').classname="password_icon_black"
}

document.addEventListener('keydown', function(e){
	let key_name = e.key
	if (key_name === "Enter") {
		if(document.getElementById('user_name').value.length !==0 && document.getElementById('userpassword').value.length !==0){
			vorbereiten()
		}else{
			e.preventDefault();
			return false;
		}
	}
})

function user_name_event(u) {
	user_input=u.value.length;
	if (user_input === 0){
		document.getElementById('user_name').className='user_icon_black';
	}
	else{
		document.getElementById('user_name').className='user_icon_orange';
	}
};

function password_event(p) {	
	password_input = p.value.length
	if (password_input ===0 ){
		document.getElementById('userpassword').className='password_icon_black';
	}else{
		document.getElementById('userpassword').className='password_icon_orange';
	}
}