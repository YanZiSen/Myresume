!function(){window.$=document.documentElement.$=function(t){var e=(this===window?document:this).querySelectorAll(t);return 0===e.length?null:1===e.length?e[0]:e},$("#home").style.height=window.innerHeight+"px",window.onresize=function(){$("#home").style.height=window.innerHeight+"px"},$("#contact").style.minHeight=window.innerHeight+"px",window.onresize=function(){$("#contact").style.minHeight=window.innerHeight+"px"}}(),function(t){function e(t){for(var e=0;t!==document.body;)e+=t.offsetTop,t=t.offsetParent;return e}$("#button-toggle").onclick=function(){"block"===$("#navbar-collapse").style.display?($("#navbar-collapse").style.display="none",this.className=this.className.replace(/\s?add/,"")):($("#navbar-collapse").style.display="block",this.className+=" add")};var i={DURATION:1e3,STEPS:50,distance:0,step:0,moved:0,timer:null,HOMETOP:0,ABOUTTOP:0,PRODUCTTOP:0,CONTACTTOP:0,HOMETOP:0,ABOUTTOP:0,PRODUCTTOP:0,CONTACTTOP:0,infi:function(){this.ABOUTTOP=e($("#about")),this.PRODUCTTOP=e($("#product")),this.CONTACTTOP=e($("#contact")),t.addEventListener("scroll",function(){this.check()}.bind(this)),$("#navbar-collapse>ul").addEventListener("click",function(e){var e=e||t.event;e.preventDefault();var i=e.target||e.srcElement;if("A"===i.nodeName){var n=i.href.replace(/(.*)#(.*)/,function(t,e,i){return i});this.move($("#"+n))}}.bind(this))},check:function(){function t(t,e){[].forEach.call(t,function(t,i,n){if(t.firstElementChild.href.indexOf(e)===-1)t.className=t.className.replace(/\s?active/,"");else{if(t.className.indexOf("active")!==-1)return;t.className+="active"}})}var e=document.body.scrollTop;e<this.ABOUTTOP-60?t($("#navbar-collapse li"),"#home"):e<this.PRODUCTTOP-60?t($("#navbar-collapse li"),"#about"):e<this.CONTACTTOP-60?t($("#navbar-collapse li"),"#product"):t($("#navbar-collapse li"),"#contact")},move:function(t){null===this.timer&&(this.distance=e(t)-document.body.scrollTop,this.step=this.distance/this.STEPS,this.timer=setTimeout(this.moveStep.bind(this),this.DURATION/this.STEPS))},moveStep:function(){this.moved<this.STEPS?(this.moved++,t.scrollBy(0,this.step),this.timer=setTimeout(this.moveStep.bind(this),this.DURATION/this.STEPS)):(this.moved=0,this.timer=null,this.distance=0)}};i.infi()}(window);