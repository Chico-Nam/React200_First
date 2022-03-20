import React from 'react';

class R009_ES6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        let jsString1 = '자바 스크립트';
        let jsString2 = '입니다. \n다음 줄입니다.';
        console.log(jsString1 + '문자열' + jsString2 + '~');

        let es6String1 = 'ES6';
        let es6String2 = '입니다.'
        console.log(`${es6String1} 문자열${es6String2}!!
        ___다음줄입니다.`);

        let longString = "ES6에 추가된 string 함수들입니다.";
        console.log('startsWith : ' + longString.startsWith("ES6에 추가"));
        console.log('endwith : ' + longString.endsWith("함수들입니다."));
        console.log('includes : ' + longString.includes('추가된 string'));
    }

    render () {
        return (
            <h2>[ THIS IS ES6 STRING ]</h2> 
        );
    }
}

export default R009_ES6;