console.log('Hello, world!');
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

Math.round(1.6); // 2
Math.round(1.4); // 1





function solution(str){
    let result = [];
    
    for (let i = 0; i < str.length; i += 2) {
      let pair = str[i] + (str[i + 1] || "_" )
      result.push(pair);
    }
    
    return result;
  }



  console.log(solution("abc"));      // ['ab', 'c_']
  console.log(solution("abcdef"));   // ['ab', 'cd', 'ef']
  console.log(solution("a"));        // ['a_']
  console.log(solution(""));     