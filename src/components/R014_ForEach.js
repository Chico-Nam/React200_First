import React from "react";

class R014_ForEach extends React.Component {
    componentDidMount() {
        var For_Array = [3, 2, 8, 8];
        var For_newArray = [];

        for(var i = 0; i < For_Array.length; i++) {
            For_newArray.push(For_Array[i]);
        }
        console.log(`1. For_newArray : [${For_newArray}]`);

        var ForEach_Array = [3, 3, 9, 8];
        var ForEach_newArray = [];
        ForEach_Array.forEach((result) => {
            ForEach_newArray.push(result);
        });
        console.log(`2. ForEach_newArray : [${ForEach_newArray}]`);
    }


    render() {
        return (
            <h2>[ THIS IS ForEach]</h2>
        );
    }
}

export default R014_ForEach;