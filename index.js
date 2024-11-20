function introduction (name){
    return (`Hi, my name is ${name}.`)
}
console.log(introduction("ryann"));

function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguage("javascript"))

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie"));