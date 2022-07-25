// in CommonJS, every file is a module by default
// modules are encapsulated code segments shared among only few other modules
const names = require("./5-names")
const helloFunction = require("./6-utils")

helloFunction("Cj")
helloFunction(names.name1)
helloFunction(names.name2)