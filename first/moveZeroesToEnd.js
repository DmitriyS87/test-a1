const moveZeroesToEnd = (arr) => {
    const end = [];
    const start = arr.filter((item) => {
        if (item === 0) {
            end.push(item)
            return false;
        }
        return true;
    })
    return start.concat(end)
}

console.log(moveZeroesToEnd([false,1,0,1,2,0,1,3,"a"]))
