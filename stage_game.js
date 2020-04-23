function solution(N, users) {
    var answer = [];
    var limit_stage = 500;
    var limit_user = 200000;
    var divider = users.length;
    var list_result = [];
	
    if (N < 500 && users.length < limit_user) {
      for(var i=1; i<= N; i++){
        const count = users.filter(x => x === i).length;
        if (count > 0){
            const result = count / divider;
            list_result.push({
              stage: i,
              value: result
            });
            divider = divider - count;
        } else {
          list_result.push({
              stage: i,
              value: 0
          });
          divider = divider - count;
        }
      }
      const sort_list = list_result.sort((a,b) => (a.value > b.value) ? -1 : 1);
      sort_list.map((item) => {
        answer.push(item.stage);
      });
    }
    console.log(answer);
    return answer;
}


const users = [2,1,2,6,2,4,3,3];
const N = 5;
solution(N, users);