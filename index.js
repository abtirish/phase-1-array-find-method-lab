// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "1998", result: "W"},
]

//Find a specific result of W
function superbowlWin(record) {
    const wonRecord = record.find(entry => entry.result === "W");
    if (wonRecord) {
        return wonRecord.year;
    }
    
}

console.log(superbowlWin(record));







