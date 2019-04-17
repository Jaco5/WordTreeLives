import React from 'react';
import { Chart } from "react-google-charts";

import  './DisplayTree.css';

let options = {};

const displayTree = (props) => {
    return (
         /* Need a ternary in here on treeData */
         <div className={"my-pretty-chart-container tree-div"}> 
         <Chart
             chartType="WordTree"
             data={props.treeData}
             width="100%"
             height="600px"
             options={
                 options = {
                    wordtree: {
                     format: "implicit",
                     type: "double",
                     word: props.node 
                 }
             }
             }
             legendToggle
         />
     </div>
    )
};

export default displayTree;