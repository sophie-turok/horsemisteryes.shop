// const Http = new XMLHttpRequest();
// const url='https://app.snipcart.com/api/products';
// Http.open("GET", url);
// Http.setRequestHeader('Accept', 'application/json');
// Http.setRequestHeader('X-Snipcart-RequestToken', 'MzA3NzI3NDAtYzc2NC00YWZiLWE3NTYtZjk5NTcwMDIxN2NmNjM3NDI5NTYzNjQ1MTA4Mjkw');
// Http.send();

const start = async function() {
	const secret = "MzA3NzI3NDAtYzc2NC00YWZiLWE3NTYtZjk5NTcwMDIxN2NmNjM3NDI5NTYzNjQ1MTA4Mjkw"

	const request = await fetch('https://app.snipcart.com/api/products', {
	    headers: {
	        'Authorization': `Basic ${btoa(secret)}`,
	        'Accept': 'application/json'
	    }
	})

	const result = await request.json()
	console.log(result)
}
start()
