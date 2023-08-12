window.onload = function() {
	document.getElementById('signup').onclick = signup;
}


async function signup() {
	try {
		const response = await fetch('http://localhost:5000/users',{
			method: 'POST',
			body: JSON.stringify({
				username: document.getElementById('username').value,
				password: document.getElementById('password').value,
				role: document.getElementById('role').value,
				
				
			}), 
			header: {
				'Content-Type': 'application/json'
			}
		});
		console.log(response);
		if (response.status === 404) {
			const result = await response.json();
			document.getElementById('err').innerText = result.error;
		}else {
			location.href = 'login.html';
	
		}
		
	} catch (error) {
		console.log('inside catch');
	}

}


