/**
 * Created by zt-2009958 on 17/5/25.
 */
(function (win) {
    var url = win.location.href,
        h1Link = document.querySelector('h1 a');
    h1Link.href = url.substr(0, url.indexOf('/manual'));
})(window);


