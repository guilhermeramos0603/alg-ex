// Ex 3.
	var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
	
	var newList = []
	
	for (let i = parseInt(num.length / 2); i < num.length; i++){
		newList.push(num[i])
	}

      for (let i = 0; i < parseInt(num.length / 2); i++){
		newList.push(num[i])
	}

	console.log(newList)