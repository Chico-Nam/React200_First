import React from "react";

class R015_Map extends React.Component {
    componentDidMount() {
        var Map_Array = [3, 2, 8, 8];
        let Map_newArray = Map_Array.map(x => x);
        console.log(`1. Map_newArray : [${Map_newArray}]`);

        let Map_multiArray = Map_Array.map(x => 2 * x);
        console.log(`2. Map_multiArray : [${Map_multiArray}]`);

        var ObjArray = [{key : 'react' , value : '200'},
                        {key : '리액트' , value : '이백'},
                        {key : 'REACT' , value : '200'},
                        ];
        let Map_ObjArray = ObjArray.map( (obj , index) => {
            console.log((index + 3) + '. obj :' + JSON.stringify(obj));
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log(`6. Map_ObjArray : ${JSON.stringify(Map_ObjArray)}`);

    }

    render() {
        return (
            <h2>[ THIS IS Map]</h2>
        );
    }
}

export default R015_Map;