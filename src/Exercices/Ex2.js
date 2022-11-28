// Ex 2.
	var list = []
	var num = 0

	for(let i = 0; list.length < 10; i++){
    		if( num % 2 != 0){
        	list.push(num)
    		}
    		num ++
	}

	console.log('Números impares: ', list) 