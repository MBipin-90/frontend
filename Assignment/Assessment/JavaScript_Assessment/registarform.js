
function reg_form(arg)
{
	if(arg.uname.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please enter User Name";
	arg.uname.focus();
	return false;
	}

	if(!arg.uname.value.match(/^[a-zA-Z]{1,}$/))
	{
		document.getElementById("msg1").innerHTML="! Omly charcter value";
		arg.uname.focus();
		return  false;
	}

	if(arg.pass.value=="")
	{
		document.getElementById("msg1").innerHTML="! Please enter right Password";
		arg.pass.focus();
		return false;
	}
	
	if(arg.pass.value.length<8)
	{
		document.getElementById("msg1").innerHTML="! Please enter minimam 8 digit Password";
		arg.pass.focus();
		return false;
	}

	if(arg.email.value=="")
	{
		document.getElementById("msg1").innerHTML="! please enter email";
		arg.email.focus();
		return false;
	}

	if(!arg.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/))
	{
		document.getElementById("msg1").innerHTML="! please enter right email";
		arg.email.focus();
		return false;
	}
	
	var gen_arr = document.getElementsByName("gender")
	if(gen_arr[0].checked == true)
	{

	}
	else if(gen_arr[1].checked == true) 
	{

	}
	else if(gen_arr[2].checked == true) 
	{

	}
	else
	{
		document.getElementById("msg1").innerHTML="! please select the gender";
		return false;
	}

	var chk_arr = document.getElementsByName("chk")
	if(chk_arr[0].checked == true)
	{

	}
	else if(chk_arr[1].checked == true) 
	{

	}
	else if(chk_arr[2].checked == true) 
	{

	}
	else if(chk_arr[3].checked == true) 
	{

	}
	else if(chk_arr[4].checked == true) 
	{

	}
	else if(chk_arr[5].checked == true) 
	{

	}
	else
	{
	document.getElementById("msg1").innerHTML="! please select the Hobby";
	return false;
	} 

	if(arg.country.value=="")
	{
		document.getElementById("msg1").innerHTML="! Select the country";
		arg.country.focus();
		return false;
	}

	if(arg.address.value=="")
	{
		document.getElementById("msg1").innerHTML="! Please enter the Address";
		arg.address.focus();
		return false;
	}

	if(arg.photo.value=="")
	{
		document.getElementById("msg1").innerHTML="! Please select the photo";
		arg.photo.focus();
		return false;
	}

	var image = document.getElementById("photo");
    var img_size_mb = parseFloat(image.files[0].size / (1024 * 1024)).toFixed(2); 
    if(img_size_mb > 2)
	{
		document.getElementById("msg1").innerHTML="! Please upload less then 2 MB";
		arg.photo.focus();
		return false;
	}
	if(arg.resume.value=="")
	{
		document.getElementById("msg1").innerHTML="! Please upload the Resume";
		arg.photo.focus();
		return false;
	}

	var image = document.getElementById("resume");
    var img_size_mb = parseFloat(image.files[0].size / (1024 * 1024)).toFixed(2); 
    if(img_size_mb > 2)
	{
		document.getElementById("msg1").innerHTML="! Please select less then 2 MB";
		arg.photo.focus();
		return false;
	}
}
	function check(arg)
    {
	var profile=arg.value;
	var ext=profile.substring(profile.lastIndexOf('.')+1);
	
	if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="gif" || ext=="JPG" || 
	ext=="PNG" || ext=="JPEG" || ext=="GIF")
	{
		document.getElementById("msg1").innerHTML="";
		document.getElementById("submit").disabled=false;
	}
	else
	{
		document.getElementById("msg1").innerHTML="! Please Upload only jpg, png, jpeg, gif File";
		document.getElementById("submit").disabled=true;
	}
}

function check1(arg)
    {
	var profile=arg.value;
	var ext=profile.substring(profile.lastIndexOf('.')+1);
	
	if(ext=="pdf" || ext=="PDF")
	{
		document.getElementById("msg1").innerHTML="";
		document.getElementById("submit").disabled=false;
	}
	else
	{
		document.getElementById("msg1").innerHTML="! Please Upload only pdf File";
		document.getElementById("submit").disabled=true;
	}
}
