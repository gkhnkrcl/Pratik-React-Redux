import React, { Component } from 'react'
import {Stack} from "@mui/material"
import {categories} from "./constant"
import { connect } from "react-redux";
import {bindActionCreators} from "redux"
import * as changeCategoryAction from "../../redux/actions/changeCategoryActions"
import * as feedAction from "../../redux/actions/feedAction"


 class SideBar extends Component {

  selectedCategory=(category)=>{
  
     this.props.actions.changeCategory(category)
     this.props.actions.getVideos(`search?q=${category.name}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`)
 
 }
  render() {
    return (
      <Stack
      direction="row"
      sx={{overflowY:"auto", height:{sx:'auto',md:'95%'}, flexDirection:{md:"column"}}}
      >
       {categories.map((category,i)=>(
           <button key={i} onClick={()=>this.selectedCategory(category)}  className="category-btn">
               <span>{category.icon} </span>
               <span >{category.name} </span>   
           </button>
       ))}
   
      </Stack>
   
    )
  }
}
function mapStateToProps(state) {
 return { changeName:state.changeCategoryReducer };}

function mapDispatchToProps(dispatch) {
 return {
      actions: {
        changeCategory: bindActionCreators(
          changeCategoryAction.changeCategoryActions,dispatch
          
        ),
        getVideos: bindActionCreators(
          feedAction.getVideos,dispatch
        ),
  }}}


export default connect( mapStateToProps,mapDispatchToProps)(SideBar)