
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'
import { connect } from "react-redux";
import {bindActionCreators} from "redux"


import * as setSearchTerm from "../../redux/actions/searchTermAction"


import React, { Component } from 'react'


 class SearchBar extends Component {

  setInput(value) {
   
     this.props.actions.changeSearchTerm(value)
     }


 handleSubmit=(e)=>{
    if(this.props.searchTerm){
      
       const navigate= this.props.navigate
       navigate(`/search/${this.props.searchTerm}`)  
       this.props.actions.changeSearchTerm("")  
    
      }
    }

  render() {
     
    return (
      <Paper 
      className='search-bar'
      component="form"
      onSubmit={this.handleSubmit}
      sx={{borderRadius:20,
         border: '1px solid grey',
         boxShadow:"none",
         pl: 2,
    
      }}
      
      > 
      <input
      placeholder='Search'
      value={this.props.searchTerm}
      style={{border:"none",
      outlineStyle: 'none' }}
      onChange={(e)=>{this.setInput(e.target.value)}}
      ></input>
      <IconButton type="submit" sx={{color:"red", borderRadius:20}}>
      <Search></Search>
      </IconButton>
      </Paper>
      
    )
  }
}

function mapStateToProps(state) {
  return {
   searchTerm:state.searchTermReducer,
  
  };

}

function mapDispatchToProps(dispatch) {
 
  return {
    actions: {
      changeSearchTerm: bindActionCreators(
        setSearchTerm.changeSearchTerm,dispatch,
       
      ),
   

}}}

export default connect(mapStateToProps, mapDispatchToProps)(props=>(<SearchBar {...props} navigate={useNavigate()}/>))

// (props=>(<SearchFeed {...props} params={useParams()}/>))