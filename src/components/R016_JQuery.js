import React from "react";
import $ from 'jquery';

class R016_JQuery extends React.Component {
    input_alert = (e) => {
        let input_val = $('#inputId').val();
        alert(input_val);
    }

    render() {
        return (
            <div>
                <h2>[ THIS IS JQuery ]</h2>
                <input id='inputId' name='InputName' />
                <button id='buttonId' onClick={ e => this.input_alert(e)} >JQuery Button</button>
            </div>
        );
    }
}

export default R016_JQuery;