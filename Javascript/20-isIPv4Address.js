/*
An IP address is a numerical label assigned to each device 
(e.g., computer, printer) participating in a computer network 
that uses the Internet Protocol for communication. There are two 
versions of the Internet protocol, and thus two versions of addresses. 
One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.
*/
//line 15 col 62 to col 94 needs updating as they pass the tests but not if number is 02,03,04... 
function isIPv4Address(inputString) {
    const arr = inputString.split('.')
    if(arr.length == 4){
        return arr.every(number=>{
            if(number >=0 && number <=255 && number != '' && number != '00' && number != '01') return true
            return false
        })
    }
    return false
}