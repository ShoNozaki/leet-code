// solution 1: create hashmaps with {char : occurences} for each word and compare
// Types
interface charMap {
    [char: string]: number
}
// Helpers
const createMap = (text: string): charMap => {
    const map: charMap = {}
    for(let i = 0; i < text.length; i++){
        let char = text[i]
        if(map[char]){
            map[char] += 1
        } else {
            map[char] = 1
        }
    }
    return map
}

const compareMaps = (mapOne: charMap, mapTwo:charMap): boolean => {
    for(let char in mapOne){
        if(mapOne[char] !== mapTwo[char]){
            return false
        }
    }
    return true
}

const isAnagram = (s: string, t: string): boolean => {
    if(s.length !== t.length){
        return false
    }
    const sMap = createMap(s)
    const tMap = createMap(t)

    return compareMaps(sMap, tMap)
};
//T = O(s + t) 
//S = O(s + t) 

// solution 2: sort and compare 
// const isAnagram = (s: string, t: string): boolean => {
//     return s.split("").sort().join() === t.split("").sort().join()
// };

//T = O(nlog(n)) // depends on sort fucntion 
//S = O(1) 
    export default isAnagram