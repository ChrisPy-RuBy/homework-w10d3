var arrayTasks = {

	 concat: function (arr1, arr2) {
	 		var new_array = arr1.concat(arr2)
	 		return new_array
	
	 },

	 insertAt: function (arr, itemToAdd, index) {
			arr.splice(index, 0, itemToAdd)
			return arr;
	 },

	// splice returns everything that you have removed so if you don't remove anything then you get an empty array.

	square: function (arr) {
		var new_array = []
		for (x of arr) {
			new_array.push(x*x)
		}
		return new_array
	},

	sum: function (arr) {
		var total = 0
		for (x of arr) {
			total += x
		}
		return total
	},

// can do this is multiple ways. delete all instances where there are no duplicates. 


	findDuplicates: function (arr) {
		var sortedArr = arr.sort()
		var remDupArr = [];
		for (i=0; i < sortedArr.length; i++) {
			if (sortedArr[i] == sortedArr[i-1]) {
			}
			else if (sortedArr[i] == sortedArr[i+1])
				remDupArr.push(sortedArr[i])
			}
			return remDupArr
		},

	removeAndClone: function (arr, valueToRemove) {
		var sortedArr = arr.sort()
		var notInstanceArr = [];
		for (i=0; i < sortedArr.length; i++) {
			if (sortedArr[i] == valueToRemove) {
			}
			else {
				notInstanceArr.push(sortedArr[i])
			}
			}
			return notInstanceArr
		},


	findIndexesOf: function (arr, itemToFind) {
			var indexArr = [];
			for (i=0; i < arr.length; i++) {
				if (arr[i] == itemToFind) {
					indexArr.push(i)
				}
				}
				return indexArr
	
	},


	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;
		for (i=0; i < arr.length; i++) {
			arr[i] % 2 == 0 ? (total += (arr[i]*arr[i])) : (total += 0 ) 
		}
		return total;
	}
}


module.exports = arrayTasks
