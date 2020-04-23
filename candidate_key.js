function solution(relation) {
	var limit_column = 8;
	var limit_row = 20;
	var i = 0;
	var answer = 0;
	var count = 0;

	if(relation.length > 0 && relation.length < limit_row){
		while(i < relation[i].length){
			var uniq = [];
			if(relation[i].length < 8) {
				for (let x=0; x < relation.length; x++){
					uniq.push(relation[x][i]);
				}
			}
			var check = checkNoDuplicate(uniq, relation.length);
			if (check) {
				count = count + 1;
				relation.map(item => item.splice(i, 1));
			} else {
				i++;
			}
		  
			if(i === relation[i].length){
				nextLooping(relation);
			}
		}
	  
		console.log(count);
		return answer = count;
	}
	
	function checkNoDuplicate(array, length){
		return [...new Set(array)].length === length;
	}

	function nextLooping(array){
		var i = 0;
		var x = 1;
		while(i < array[i].length){
			while (x < array[i].length) {
				var list = array.map(data => data[i] + data[x]);
				var check = checkNoDuplicate(list, array.length);
				if (check){
					count = count + 1;
				}
				x++;
			}
			i++;
			x=i+1;
		}	
	}
	
}

const relation = [
  ["100","ryan","music","2"],
  ["200","apeach","math","2"],
  ["300","tube","computer","3"],
  ["400","con","computer","4"],
  ["500","muzi","music","3"],
  ["600","apeach","music","2"]
];
solution(relation);