// Definition of Interval:
class Interval {
    start :number;
    end :number;
    constructor(start :number, end :number) {
        this.start = start;
        this.end = end;
    }
}
/*
 * @param intervals: an array of meeting time intervals
 * @return: if a person could attend all meetings
 */

// Solution 1
// sort by starting
// check if start is less than prev end
// T = O(n logn) for sort + O(n) for check
// S = O(n)
// n = number of intervals

class Solution {
    canAttendMeetings(intervals: Interval[]): boolean {
      const intervalsByStart  =  intervals.sort((a,b) => a.start - b.start)
      for(let i = 1; i < intervalsByStart.length; i++){
        const previous = i - 1;
        if(intervalsByStart[i].start < intervalsByStart[previous].end){
            return false
        }
      }
      return true
    }
}