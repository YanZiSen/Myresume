/**
 * Created by yanning on 2017/2/15.
 */
(function(){
  window.$=document.documentElement.$=function(selector){
    var result=(this===window?document:this).querySelectorAll(selector);
    return result.length===0?null:
           result.length===1?result[0]:
               result;
  }
  $('#home').style.height=window.innerHeight+'px';
  window.onresize=function(){
    $('#home').style.height=window.innerHeight+'px';
    //console.log($('#home').style.height);
  }
  $('#contact').style.minHeight=window.innerHeight+'px';
  window.onresize=function(){
    $('#contact').style.minHeight=window.innerHeight+'px';
  }
})()