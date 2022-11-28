// Ex 4.
	var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
	var x = 14
	
	var check = false
 	
	for (let i = 0; i < num.length; i++){
		if (num[i] == x){
			check = true
			console.log('Número encontrado no indice: ', i)
		}
	}
	
	if(!check){
	console.log('Não foi encontrado o número sugerido no vetor')
	}