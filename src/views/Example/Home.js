import React from "react";
import Color from "../HOC/Color";
//dung {withRouter}...... de chuyen trang tu dong
//import { withRouter } from "react-router";


class Home extends React.Component {
//chuyen trang tu dong , HOC: higher order component
componentDidMount() {
    // setTimeout(() => {
    //     this.props.history.push('/todo')
    // }, 3000)
}


    render() {
        //HOC
        console.log('>>> check props: ', this.props)
        return (
            <div>
                Hello world from Homepage with Eric & Hoi Dan IT
            </div>
        )
    }
}

//export default withRouter(Home);
export default Color(Home);