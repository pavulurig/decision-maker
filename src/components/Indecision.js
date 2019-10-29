import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    }

    handleDeleteOptions = ()=> {
        this.setState(() => {
            return{
                options:[]
            };
        });
    }
    handleClearSelectedOption = ()=> {
        this.setState(()=> ({selectedOption:undefined}));
    }
    handleDeleteOption = (optionToRemove)=>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=> optionToRemove !== option)
        }));
    }
    handleAdd = (option)=>{
        if(!option){
            return 'Enter valid option';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'Option Already Exists';
        }

       this.setState((prevState) => {
           return{
               options:prevState.options.concat(option)
           }
       })
    }

    handlePick = ()=>{
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption:option
        }));
    }
    
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({
                    options:options
                }))
            }
        }
        catch(e){

        }
    }
    componentDidUpdate(prevProps ,prevState){
        if(prevState.options != undefined && this.state.options !=undefined){
            if(prevState.options.length !== this.state.options.length){
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options',json);
            }
        }
       
    }
    
    render(){
        const appNames = 'Indecision';
        const subTittle = 'Your life is in My Hands';
        return(
            <div>
                <Header 
                    appNames ={appNames} 
                    subTittle={subTittle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length>0}
                        handlePick = {this.handlePick}/>
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}/>
                    
                        <AddOption
                            handleAdd={this.handleAdd}
                        />
                    </div>
                </div>

                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                    />
                    
            </div>
        )
    }
}