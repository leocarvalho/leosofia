// Function to randomly change the main image.
function displayImage(){
	var num = Math.floor(Math.random()*22)
	document.getElementById("buddy_image").src = 'imgs/out-'+num.toString()+'.png'
}

