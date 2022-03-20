import React from "react";

class Variable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' + varName);
        var varName = '200';
        console.log('varName2 : ' + varName);

        let letName = 'react';
        console.log('letName1 : ' + letName);
        //let letName = '200'; 
        //Parsing error: Identifier 'letName' has already been declared. (24:14)
        letName = 'react200';
        console.log('letName2 : ' + letName);

        const constName = 'react';
        console.log('constName1 : ' + constName);

        //const constName = '200'; 
        //Parsing error: Identifier 'constName' has already been declared. (24:14)

        //constName = 'react200';
        //'constName' is constant       no-const-assign

    }

    render() {
        return (
            <h2>[ THIS IS Variable]</h2>
        );
    }
}

export default Variable;