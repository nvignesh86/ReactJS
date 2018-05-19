import React,{Component} from "react";
import {connect} from 'react-redux';
import sonImg from './../images/son.jpg';
import {Grid,Row,Col,Image} from 'react-bootstrap';

class Son extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount=()=>{
        const {props:{reduxDispatch}} = this;
        reduxDispatch({type:'ADD',value:"Son"})
        console.log()
    }

    render=()=>{
        return (
            <div>
            <div>Son</div>
            <Grid>
            <Row>
                <Col xs={6} md={3}>
                <Image style={{width:'400px',height:'400px'}} src={sonImg} rounded />
                </Col>
                <Col xs={6} md={9}>
                    Shivesh
                </Col>                
            </Row>
            </Grid>
            </div>    
        );
    }
}
const mapStateToProps = function(state){
    return {
      reduxState: state,
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
        reduxDispatch:dispatch
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Son)