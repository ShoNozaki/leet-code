// solution 1 
// use a stack
// push open brackets and pop matching close brackets
// if no match or stack is not empty, return false
// T = O(n)
// S = O(n)
// n = brackets in string

const isValid = (s: string): boolean => {
    if(s.length % 2 === 1) {
        return false
    }
    const stack: string[] = []
    for(let i = 0; i < s.length; i++){
        const bracket = s[i]
        const last = stack[stack.length - 1]
        if(bracket === "(" || bracket === "{" || bracket === "["){
            stack.push(bracket)
        } else if (bracket === ")"){
            if(last === "("){
                stack.pop()
            } else {
                return false
            }
        } else if (bracket === "}"){
            if(last === "{"){
                stack.pop()
            } else {
                return false
            }
        } else if (bracket === "]"){
            if(last === "["){
                stack.pop()
            } else {
                return false
            }
        }
    }
    if(stack.length > 0){
        return false
    }
    return true
};

export default isValid