import React from 'react';
import Option from './Option';

const Options = (props) =>(
        <div>
            <div className="widget-color">
                <h3>Your Options</h3>
                <button 
                    className ="button button--link"
                    onClick={props.handleDeleteOptions}>
                    RemoveAll
                </button>
            </div>
            {props.options.length == 0 && <p className="widget__message">Add An Option to get Started!</p>}
            {
                props.options.map((option,index)=>
                <Option
                key={option} 
                option={option}
                count={index+1}
                handleDeleteOption = {props.handleDeleteOption}
                />)
            }
            
        </div>
    )
export default Options;