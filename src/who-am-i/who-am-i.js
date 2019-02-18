export default function whoAmI(question) {
     return question === 'Blah Blah Blah Blah' ?
     'YES, YOU WON' :
     question === 'Blah Blah Blah' ?
     'WRONG, BUT CLOSE' :
     question === 'Blah Blah' ?
     'YES' :
     'WRONG';
}