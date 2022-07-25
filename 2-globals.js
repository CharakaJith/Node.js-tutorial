// __dirname    - path to current directory
// __filename   - current file name
// require      - function to use modules(CommonJs)
// module       - info about current module
// process      - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)

setTimeout(() => {
    console.log("time delayed: 1 sec")
}, 1000) 

setInterval(() => {
    console.log("interval period: 2 sec")
}, 2000) 