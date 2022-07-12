// solution 1
// make all lowercase, remove non alphanumerics
// use pointers and check if they are alphanumeric, then check if match. 
// T = O(n)
// S = O(n)
// n = characters in string 

export const isAlphanumeric = (s: string): boolean => {
    const lettersNumbers = /^[a-zA-Z0-9]+$/
    if(s.match(lettersNumbers)){
        return true
    } 
    return false
}

// interface LetterNumberMap {
//     [char: string | number] : boolean
// }
// export const isAlphanumeric = (s: string): boolean => {
//     const alphaNumericMap: LetterNumberMap = {
//         a: true,
//         b: true,
//         c: true,
//         d: true,
//         e: true,
//         f: true,
//         g: true,
//         h: true,
//         i: true,
//         j: true,
//         k: true,
//         l: true,
//         m: true,
//         n: true,
//         o: true,
//         p: true,
//         q: true,
//         r: true,
//         s: true,
//         t: true,
//         u: true,
//         v: true,
//         w: true,
//         x: true,
//         y: true,
//         z: true,
//         0: true,
//         1: true,
//         2: true,
//         3: true,
//         4: true,
//         5: true,
//         6: true,
//         7: true,
//         8: true,
//         9: true,
        
//     }
//     if(alphaNumericMap[s]){
//         return true
//     } 
//         return false
// }

const isPalindrome =(s: string): boolean => {
    let startPoint = 0
    let endPoint = s.length - 1
    while(startPoint <= endPoint){
        let startChar = s[startPoint].toLowerCase()
        let endChar = s[endPoint].toLowerCase()
        // check ascii
        if(!isAlphanumeric(startChar)){
            startPoint+= 1;
        }
        if(!isAlphanumeric(endChar)){
            endPoint-= 1;
        }
        if(isAlphanumeric(startChar) && isAlphanumeric(endChar)){
            // check match
            if(startChar === endChar){
                startPoint+=1
                endPoint-=1
            }else {
                return false
            }
        }
    }
    return true
};

export default isPalindrome