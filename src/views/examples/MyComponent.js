import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component{
    state ={
        arrJobs:[
            {id:'abcd1',title:'Developers',salary:'$500'},
            {id:'abcd2',title:'Testers',salary:'$400'},
            {id:'abcd3',title:'Project Managers',salary:'$1000'}
        ]
    }
    addNewJob =(job) => {
        this.setState(
            {
               // let currenJobs = this.state.arrJobs;
               // currenJobs.push(job)


                arrJobs:[...this.state.arrJobs,job]
                // arrJobs: currenJobs
            }
        )
    }
    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }
    render()
    {
    
        return (
            <>
                <AddComponent 
                addNewJob={this.addNewJob}
                />
                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                 />  
            </>
        );
    }
   }
   
export default MyComponent;