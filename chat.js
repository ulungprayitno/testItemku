function solution(record) {
    var answer = [];
    var result = [];
    var data = {}
    record.map(item => {
      const [action, id, name] = item.split(' ');
      const newName = name || data[id].name
      if (id.length <= 10 & newName.length <= 10) {
          if(action !== 'Change'){
            data[id] = {
            name: action === 'Leave' ? data[id].name : name
          };
          result.push({ id , action });
          } else {        
            data[id].name = name
          }
      }      
    });
    
    answer = result.map((item) => {
      const { name } = data[item.id];
      const action = item.action === 'Enter' ? 'came in' : 'has left'
      return `${name} ${action}`
    })
    console.log(answer);
	return answer;
}
const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234",
                "Enter uid1234 Prodo", "Change uid4567 Ryan"];
solution(record);