     response.js��ʵ��ԭ��  http://caibaojian.com/respondjs.html
     Ϊʲô����IE8��֧��@media
     Html5shiv��ʹ�÷��� Ϊ�˼���IE9���µ�IE�����
     <!--[if It IE 9]> less than
     <script src="scripts/html5shiv.js"></script>

     <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
     ���IE��װ��Google Chreome Frame,��ô���߰�װ�����,���û�о�����߰汾��

     <meta name="viewpoint" content="width=device-width,initial-scale=1.0">
     name=viewpoint��������ʹ�ֻ����ն˵��ӿڿ�ȵ����豸�Ŀ��,��Ϊ�ֻ���ʵ�ʿ�����ֻ��ķֱ��ʲ�ͬ���ֻ����������ȫ����,�����ҳ�淽���ӿ���
     ���������ӿڿ������Ļ�ֱ���Ϊ��׼,���ú����ض����Ϊ��׼�����豸���device-width
     @media��ѯ�����ĵ��Ŀ��
     http://caniuse.com/#   ���߲�ѯcss���Լ����Ե���վ

     npm package.json ��script�Ķ��������,json��ʽ,���Ա�����˫����������,������������ ���ö�����������&���� &��ʾ���� &&���Ⱥ�˳��

     ����֪ʶdpi��dots per inch ����д��ÿӢ��������������ڴ�ӡ����
     ppi ����ÿӢ�� ֻ�����ڵ�����ʾ����
     shift �ı� shifting��λ shifting heavily��λ���� edge����,��Ե chore���ǹ���,��������ķ��ع��� varying�ı�
     pseudo [sJU:deo] �ٵ�,��α�� pseudo-element αԪ�� nestedǶ�׵�
     �豸���ر�devicePixelRatio �������س����豸�������ص�ֵ
     devicePixelRatio�ڴ�����������ֵ�������ġ�
     ��iOS�豸��screen.width����devicePixelRatio�õ�������������ֵ��
     ��Android�Լ�Windows Phone�豸��screen.width����devicePixelRatio�õ������豸��������(dips)ֵ��
     css�е�1px����������Ļ�ϵ�1px ��ֱ���Խ�� css��1px��������������ؾ�Խ�� ��Ϊ�ֱ��ʱ����,��Ļ�ߴ粢û�б� ������css�е�1px���������������أ�������1px����������������,������1px�Ķ�������Ļ�Ĵ�С����Щ�ͷֱ��ʵ��豸�Ĵ�С���
     tabel-cell�ص� ͬ�еȸ�,����Զ�����
     max-min��Grid-less�����container;

     @import�������� ��Ϊ��Ҫ��ҳ���������ݼ������ż���
     gulp-perfixer ʹ������봫���� Ӣ��https://github.com/ai/browserslist#queries ����http://www.ydcss.com/archives/94
     less�����������;������ǰ����
     :extendα����all������������׵�α��
     �вεĻ������԰�������ʵ�ֶ�̬����ʽЧ��
     ����ѡ�������� @selector:banner;  .@{selector}{};  url:@img:'../img'; body{background-image:url("@{img}/white.jpg")}
     ���������Ϊֵ��ʹ�ã���ֱ��д�ͺ��ˣ�������Ϊ�ַ�����һ���֣�Ӧ��@{var}�������������ñ��� ~�ǵ��ַ�����������
     @property:color background-@{property}:
     ess��Ҳ���ǵ�����㣬���ǿ���ʹ�á������ʽ����������룬�����Ϳ�ԭ��������ʽ
     =<���﷨��less��


     ��ʽ����
     �ֳƵȱ����Ų���,ʹ�ðٷֱ��趨��� http://www.hangge.com/blog/cache/detail_1010.html ע���߿������,���ڲ�Ԫ�����趨�߿�
     ʹ�ðٷֱȲ��ִ��������ĵ��Խ���,ͬʱʹ��ý���ѯ������Ԫ�صı䶯��Χ�� ����������ϵ�һ�𹹳�����Ӧʽ��Ƶĺ��ģ����ڴ˿��Դ������������������
     https://relsoul.gitbooks.io/readbook/%E5%93%8D%E5%BA%94%E5%BC%8FWEB%E8%AE%BE%E8%AE%A1/%E6%8B%A5%E6%8A%B1%E6%B5%81%E5%BC%8F%E5%B8%83%E5%B1%80/readme.html

     ���ڿ��Ƿ���԰����鼶Ԫ�� Can an inline-block element contain block element?
     Yes. Inline block can contain everything a regular block can - both blocks and inline elements. The difference between block and inline block is that inline block is positioned as an inline element, but it acts like a block in all other aspects.
     ���԰��� ��Ϊ���ڿ���������ֻ����ʾ��ͬ����

     box-sizing:line-height:Ӧ�õ���height ��Ҫ�ֹ����� ��ʹ�� display:table-cell vertical-align:middle���Խ��

     table-cell���ܻ��е����� Ӧ��ý���ѯ,�ǵ�table-cell���ض�λ����Ч

     border-box�е�border:xpx solid #transparent/backgroundColor �����߾������
     border-box height=border-width+padding+content-hieght;

     �Զ�������
      font-family: 'MyWebFont';
       src: url('webfont.eot'); /* IE9 Compat Modes */
       src:
        local('MyWboFont'),
        url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
            url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
            url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
            url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */


     �����������Ƿ�֧�ֵ�д��
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


