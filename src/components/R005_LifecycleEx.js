import React from "react";

class R005_LifecycleEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    render() {
        console.log('3. render call')
        return (
            <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
        );
    }
}

export default R005_LifecycleEx;