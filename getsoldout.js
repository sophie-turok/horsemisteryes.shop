const start = async function() {
	const secret = "S_ZWY2MmU3ZjAtYzZkOC00ZGY2LWE1YTAtMmQ2ODVkZjJjNThhNjM3NDM0MzEyNDEwMDkxMTQ5"

	const request = await fetch('https://app.snipcart.com/api/products?limit=1000', {
	    headers: {
	        'Authorization': `Basic ${btoa(secret)}`,
	        'Accept': 'application/json'
	    }
	})

	const result = await request.json()
	console.log(result)
	for (var item of result.items) {
		if (item.stock == 0) {
			$('a[data-modal-open='+item.userDefinedId+']').first().parent()[0].classList.add('soldout')
			$('a[data-modal-open='+item.userDefinedId+']').first().parent().append('Sold out')
			$('#'+item.userDefinedId).addClass('soldout')
		}
	}
}
start()
