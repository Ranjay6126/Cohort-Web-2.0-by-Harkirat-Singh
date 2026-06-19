function memoizedSquare() {
    const cache = {};

    return function(num) {
        if (cache[num]) return cache[num];

        cache[num] = num * num;
        return cache[num];
    };
}

const square = memoizedSquare();