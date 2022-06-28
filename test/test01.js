function geekshubs(index) {
    let arr = []
    for(let i = 1; i <= index; i++){
        if(i % 15 == 0){
        arr.push('GeeksHubs')
        }else if(i % 3 == 0){
        arr.push('Geeks')
        }else if(i % 5 == 0){
        arr.push('Hubs')
        }else{
        arr.push(i)
        }
    }
    return arr.join('\n')+'\n'
}
module.exports = geekshubs;
