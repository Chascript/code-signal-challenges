function almostIncreasingSequence(sequence) {
    let counter = 0
    const s = sequence
    for(let i = 1; i < s.length; i++){
        if(s[i-1] >= s[i]) {
            counter++
            if(counter > 1) return false

            if(s[i-2] >= s[i] && s[i-1] >= s[i+1]) return false          
        }
    }
    return true
}