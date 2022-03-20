import React from "react";

class ClassPrototype extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        /* ES5 prototype
        var ExamCountFunc = (function () {
            function ExamCount (num) {
                this.number = num;
            }
            ExamCount.prototype.showNum = function () {
                console.log('1. react_' + this.number);
            };
            return ExamCount;
        }());
        var cnt = ExamCountFunc('200');
        cnt.showNum();
        */

        //ES6 Class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() {
                console.log(`2. react_${this.number2}`);
            }
        }

        let cnt2 = new ExamCountClass('200');
        cnt2.showNum();

    }

    render() {
        return (
            <h2>[ THIS IS Class]</h2>
        );
    }
}

export default ClassPrototype;