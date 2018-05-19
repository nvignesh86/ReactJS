import React,{Component} from "react";
import {connect} from 'react-redux';
import motherImg from './../images/mother.jpg';
import {Grid,Row,Col,Image} from 'react-bootstrap';

class Mother extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount=()=>{
        const {props:{reduxDispatch}} = this;
        reduxDispatch({type:'ADD',value:"Mother"})
        console.log()
    }

    render=()=>{
        return (
            <div>
            <div>Mother</div>
            <Grid>
            <Row>
                <Col xs={6} md={3}>
                <Image style={{width:'400px',height:'400px'}} src={motherImg} rounded />
                </Col>
                <Col xs={6} md={9}>
                    Parameshwari
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
  export default connect(mapStateToProps,mapDispatchToProps)(Mother)