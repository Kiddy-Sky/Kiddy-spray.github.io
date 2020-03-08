<!--崩溃欺骗-->
var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '404 | 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else {
         document.title = '又好了耶~' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 2000);
     }
 });