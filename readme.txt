     response.js的实现原理  http://caibaojian.com/respondjs.html
     为什么引入IE8不支持@media
     Html5shiv的使用方法 为了兼容IE9以下的IE浏览器
     <!--[if It IE 9]> less than
     <script src="scripts/html5shiv.js"></script>

     <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
     如果IE安装有Google Chreome Frame,那么就走安装的组件,如果没有就走最高版本的

     <meta name="viewpoint" content="width=device-width,initial-scale=1.0">
     name=viewpoint的作用是使手机等终端的视口宽度等于设备的宽度,因为手机的实际宽度与手机的分辨率不同，手机的浏览器是全屏的,它会把页面方在视口中
     不设置是视口宽度以屏幕分辨率为基准,设置后以特定宽度为基准，如设备宽度device-width
     @media查询的是文档的宽度
     http://caniuse.com/#   在线查询css属性兼容性的网站

     npm package.json 中script的对象的设置,json格式,属性必须用双引号括起来,属性引用命令 引用多个命令可以用&连接 &表示并行 &&有先后顺序

     补充知识dpi是dots per inch 的缩写，每英寸的像素数存在于打印领域
     ppi 像素每英寸 只存在于电脑显示领域
     shift 改变 shifting移位 shifting heavily移位严重 edge优势,边缘 chore零星工作,两人讨厌的繁重工作 varying改变
     pseudo [sJU:deo] 假的,虚伪的 pseudo-element 伪元素 nested嵌套的
     设备像素比devicePixelRatio 物理像素除以设备独立像素的值
     devicePixelRatio在大多数浏览器是值得信赖的。
     在iOS设备，screen.width乘以devicePixelRatio得到的是物理像素值。
     在Android以及Windows Phone设备，screen.width除以devicePixelRatio得到的是设备独立像素(dips)值。
     css中的1px并不代表屏幕上的1px 你分辨率越大 css中1px所代表的物理像素就越多 因为分辨率变大了,屏幕尺寸并没有变 必须让css中的1px代表更多的物理像素，才能让1px代表更多的物理像素,才能让1px的东西在屏幕的大小与那些低分辨率的设备的大小差不多
     tabel-cell特点 同行等高,宽度自动调节
     max-min的Grid-less定义的container;

     @import尽量少用 因为他要等页面所有内容加载完后才加载
     gulp-perfixer 使用详解与传送门 英文https://github.com/ai/browserslist#queries 中文http://www.ydcss.com/archives/94
     less变量按需加载;不用提前声明
     :extend伪类用all输出所有起那套的伪类
     有参的混合类可以帮助我们实现动态的样式效果
     定义选择器变量 @selector:banner;  .@{selector}{};  url:@img:'../img'; body{background-image:url("@{img}/white.jpg")}
     如果变量作为值被使用，则直接写就好了，若是作为字符串的一部分，应用@{var}这样的形势引用变量 ~是的字符串不带引号
     @property:color background-@{property}:
     ess中也考虑到了这点，我们可以使用～“表达式”来避免编译，这样就可原样输出表达式
     =<的语法在less中


     流式布局
     又称等比缩放布局,使用百分比设定宽度 http://www.hangge.com/blog/cache/detail_1010.html 注意点边框的设置,在内层元素中设定边框
     使用百分比布局创建流动的弹性界面,同时使用媒体查询来限制元素的变动范围， 将这两者组合到一起构成了响应式设计的核心，基于此可以创建出真正完美的设计
     https://relsoul.gitbooks.io/readbook/%E5%93%8D%E5%BA%94%E5%BC%8FWEB%E8%AE%BE%E8%AE%A1/%E6%8B%A5%E6%8A%B1%E6%B5%81%E5%BC%8F%E5%B8%83%E5%B1%80/readme.html

     行内块是否可以包含块级元素 Can an inline-block element contain block element?
     Yes. Inline block can contain everything a regular block can - both blocks and inline elements. The difference between block and inline block is that inline block is positioned as an inline element, but it acts like a block in all other aspects.
     可以包含 因为行内块与快的区别只是显示不同而已

     box-sizing:line-height:应该等于height 需要手工计算 而使用 display:table-cell vertical-align:middle可以解决

     table-cell不能换行的问题 应用媒体查询,是的table-cell在特定位置生效

     border-box中的border:xpx solid #transparent/backgroundColor 解决外边距的问题
     border-box height=border-width+padding+content-hieght;

     自定义字体
      font-family: 'MyWebFont';
       src: url('webfont.eot'); /* IE9 Compat Modes */
       src:
        local('MyWboFont'),
        url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
            url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
            url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
            url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */


     测试与属性是否支持的写法
     There is no issue to check for css property support, but what to do if you need to check for css value?

     Example: transform-style:preserve-3d value that not supported in IE10, although property transform-style is.
     Another example: display:table for IE7.

     So for now this is my solution for this problem:

     Modernizr.addValueTest('property','value');

     Modernizr.addValueTest('transform-style','preserve-3d');
     And here is implementation:

     Modernizr.addValueTest = function(property,value){
         var testName= (property+value).replace(/-/g,'');
         Modernizr.addTest(testName , function () {
             var element = document.createElement('link');
             var body = document.getElementsByTagName('HEAD')[0];
             var properties = [];
             var upcaseProp = property.replace(/(^|-)([a-z])/g, function(a, b, c){ return c.toUpperCase(); });
             properties[property] = property;
             properties['Webkit'+upcaseProp] ='-webkit-'+property;
             properties['Moz'+upcaseProp] ='-moz-'+property;
             properties['ms'+upcaseProp] ='-ms-'+property;

             body.insertBefore(element, null);
             for (var i in properties) {
                 if (element.style[i] !== undefined) {
                     element.style[i] = value;
                 }
             }
             //ie7,ie8 doesnt support getComputedStyle
             //so this is the implementation
             if(!window.getComputedStyle) {
                 window.getComputedStyle = function(el, pseudo) {
                     this.el = el;
                     this.getPropertyValue = function(prop) {
                         var re = /(\-([a-z]){1})/g;
                         if (prop == 'float') prop = 'styleFloat';
                         if (re.test(prop)) {
                             prop = prop.replace(re, function () {
                                 return arguments[2].toUpperCase();
                             });
                         }
                         return el.currentStyle[prop] ? el.currentStyle[prop] : null;
                     };
                     return this;
                 };
             }

             var st = window.getComputedStyle(element, null),
                 currentValue = st.getPropertyValue("-webkit-"+property) ||
                     st.getPropertyValue("-moz-"+property) ||
                     st.getPropertyValue("-ms-"+property) ||
                     st.getPropertyValue(property);

             if(currentValue!== value){
                 element.parentNode.removeChild(element);
                 return false;
             }
             element.parentNode.removeChild(element);
             return true;
         });
     }


