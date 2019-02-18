import whoAmI from './who-am-i';

describe('this is the block', () => {
    [{
        it:'returns "WRONG" if no question is provided',
        question:undefined,
        answer:'WRONG'
    },
    {
        it:'returns "YES" if the question is "Blah Blah',
        question:'Blah Blah',
        answer:'YES'
    },
    {
        it:'returns "WRONG, BUT CLOSE" if the question is "Blah Blah Blah',
        question:'Blah Blah Blah',
        answer:'WRONG, BUT CLOSE'
    },
    {
        it:'YES, YOU WON" if the question is "Blah Blah Blah Blah',
        question:'Blah Blah Blah Blah',
        answer:'YES, YOU WON'
    }].forEach(scenario => {

        it(scenario.it, () => {
            //given
            let question = scenario.question;

            //when
            let answer = whoAmI(scenario.question);
            //then
            
            expect(answer).toBe(scenario.answer);
            expect(['siri']).toEqual(['siri'])
       })
    })
});

