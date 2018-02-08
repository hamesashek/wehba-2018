//img_resizer
(function(){'origin:http://fmdesign.forumotion.com/t544-image-resizer#8305';\A \A window.fa_img_resizer = {\A max_width : 400,// maximum image width (400px)\A max_height : 250,// maximum image height (250px)\A \A selector : '.post-contents img',// where images should be resized\A \A options : {\A bar : true,// resized image options bar\A toggler : true,// Enlarge / Reduce Image\A full_size : true,// Show full size\A download : true,// Download image link\A lightbox : true // lightbox effect\A },\A \A // texts\A lang : {\A full_size : '<i class="fa fa-picture-o"></i> عرض الحجم الكامل',\A enlarge : '<i class="fa fa-eye-slash"></i> تكبير الصورة',\A reduce : '<i class="fa fa-eye"></i> تصغير الصورة',\A download : '<i class="fa fa-cloud-download"></i> تحميل الصورة',\A tooltip : 'إضغط لرؤية الصورة الكاملة'\A },\A \A // resize all images inside the "resizeIn" elements\A resize : function() {\A for (var a = $(fa_img_resizer.selector).not('.mention-ava'),i = 0,j = a.length; i < j; i++) {\A if (!a[i].alt && (a[i].naturalWidth > fa_img_resizer.max_width || a[i].naturalHeight > fa_img_resizer.max_height)) {\A a[i].className += ' fa_img_reduced';\A \A // make the image a "link" if it's not wrapper with one if (fa_img_resizer.options.lightbox && a[i].parentNode.tagName != 'A') { a[i].style.cursor = pointer;aititle:fa_img_resizer.lang.tooltip;aionclick:function() { fa_img_resizer.lightbox(this)}// create the resize bar
if (fa_img_resizer.options.bar){(aiparentnodetagname:= A ? a[i].parentNode : a[i]).insertAdjacentHTML(beforebegin,'<div class="fa_img_resizer" style="width:' + (a[i].width - 8) + 'px;">'+ (fa_img_resizer.options.toggler ? '<a class="fa_img_enlarge" href="#" onclick="fa_img_resizer.toggle(this); return false;">' + fa_img_resizer.lang.enlarge + '</a>' : '')+ (fa_img_resizer.options.full_size ? '<a class="fa_img_full" href="/viewimage.forum?u=' + a[i].src + '" target="_blank">' + fa_img_resizer.lang.full_size + '</a>' : '')+ (fa_img_resizer.options.download && !/Firefox/.test(navigator.userAgent) && 'download' in document.createElement(A) ? '<a class="fa_img_download" href="' + a[i].src + '" target="_blank" download>' + fa_img_resizer.lang.download + '</a>' : '')+ '</div>')},// toggle between enlarged and reduced image sizes
toggle : function(that){varimg:that.parentNode.nextSibling;ifimgtagname:= A) { img = img.getElementsByTagName(IMG)[0]}if (/fa_img_reduced/.test(img.className)){thatinnerhtml:fa_img_resizer.lang.reduce;thatclassname:fa_img_reduce;imgclassname:img.className.replace(/fa_img_reduced/,'fa_img_enlarged')}else{thatinnerhtml:fa_img_resizer.lang.enlarge;thatclassname:fa_img_enlarge;imgclassname:img.className.replace(/fa_img_enlarged/,'fa_img_reduced')},// lightbox effect
lightbox : function(that){varfrag:document.createDocumentFragment(),overlay = $('<div id="fa_img_lb_overlay" />')[0],img = $('<img id="fa_img_lb_image" src="' + that.src + '" />')[0];overlayonclick:fa_img_resizer.kill_lightbox;imgonclick:fa_img_resizer.kill_lightbox;documentbodystyleoverflow:hidden;imgstylemargintop:- + (img.height / 2) + px;imgstylemarginleft:- + (img.width / 2) + px},// kill the lightbox
kill_lightbox : function(){varoverlay:document.getElementById(fa_img_lb_overlay),img = document.getElementById(fa_img_lb_image)}

 //overlay

var overlay = function () {
  // Escrito por Chalo Valdez para www.opensourcephpbb3.com 
  //2018
  var g, e, a = document.createElement('div'),
    b = ' background: rgba(0, 0, 0, 0.5); -webkit-background-size: cover;position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 999; pointer-events:none;display:none',
    c = document.body,
    d = document.forms.post.message,
    f = $(d).sceditor('instance');
  c.appendChild(a);
  a.style.cssText = b;
  a.id = 'overlay';
  f.focus(function (e) {
    e = document.getElementById('quick_reply');
    g = document.getElementById('overlay');
    a.style.display = 'block';
    e.style.zIndex = '1000';
    e.style.position = 'relative';
    f.blur(function () {
      g.style.display = 'none';
    });
    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 27) {
        f.blur();
      };
    }, false);
  });
};
$(function () {
  $(function () {
    document.location.pathname.match(/\/t(\d+)/g) && $.sceditor && overlay();
  });
});
                      
//toast                        

function toast(text)
{
    var container = $(document.createElement("div"));
    container.addClass("toast");
    
    var message = $(document.createElement("div"));
    message.addClass("message");
    message.text(text);
    message.appendTo(container);
    
    container.appendTo(document.body);
    
    container.delay(10).fadeIn("slow", function()
    {
        $(this).delay(2500).fadeOut("slow", function() { $(this).remove(); });
    });
}
 //اشعار عند الدخول                                            
function wipeout() {
  setTimeout(function() {
    $(".ps-toast").removeClass("bounceInRight").addClass("bounce");
    setTimeout(function() {
      $(".ps-toast").addClass("bounceOutRight");
    }, 4000);
  }, 5000);
}
wipeout();

//Prefix-tag

/**
     *! Créer des préfixes dans le titre du sujet avec boutons de sélection.
     *
     *  @author Luiz~
     *  @see <a href="http://ajuda.forumeiros.com">Fórum dos Fóruns</a>

     *  @licence MIT
     */
    (function ($) {
      'use strict';
     
      var tags = [
{tag: 'JAVASCRIPT',background: '#ff0100'},             
{tag: 'HTML ',background: '#1bff00'},                     
{tag: 'css',background: '#0066ff'},                     
{tag: 'تومبلايت',background: '#ff0099'},                     
{tag: 'اخبار',background: '#ff002f'},                     
{tag: 'كتاب',background: '#00c4ff'},                     
{tag: 'تكويد',background: '#00ff72'},                     
{tag: 'ارشفة',background: '#7aff00'},             
{tag: 'مساعدة',background: '#ffe000'},             
 {tag: 'تصميم',background: '#c000ff'},             
{tag: 'اسلامى',background: '#000'},      
{tag: 'شرح',background: '#3f00ff'}
        
      ];
     
      $(function () {
        var counter = 1;
     
        /**
        * Partie 1.
        * créer le sélecteur de balises au-dessus de l'éditeur:
        */
        if (location.pathname === '/post' && $('form input[name="subject"]').length > 0) {
          // Criar a zona para colocar-se os inputs:
          var $textarea = $('#textarea_content');
          var $title = $('form [name="subject"]');
          var $zone = $([
            '<div class="fa-icon-selector">',
            '  <div class="fa-icon-selector-inner">',
            '  </div>',
            '</div>',
          ].join('\n'))
            .prependTo($textarea)
          ;
     
          // Créer les entrées dans la zone précédemment créée:
          var $appendZone = $zone.find('.fa-icon-selector-inner');
          $.each(tags, function (index, tag) {
            $([
              '<div class="fa-tag-form-group">',
              '  <input type="radio" class="select-tag-input" name="select-tag-radio" id="tag-input-' + counter + '" data-tag="' + tag.tag + '" />',
              '  <label for="tag-input-' + counter + '" class="fa-tag-label">' + tag.tag + '</label>',
              '</div>',
            ].join('\n'))
              .appendTo($appendZone)
            ;
           
            counter++;
          });
     
          // Fonction pour se concentrer sur une entrée X si c'est l'étiquette d'un sujet X:
          if (/^\[.*\]/gi.test($title.val())) {
            $title.val().replace(/^\[(.*)\]/gi, function (find, match) {
              $('[data-tag="' + match + '"]').prop('checked', true);
            });
          }
     
          // Déclencheur pour ajouter / éditer le préfixe dans l'entrée de titre:
          $zone
            .find('input.select-tag-input')
              .on('focus', function () {
                setPrefix($(this).attr('data-tag'));
              })
          ;
     
          // Fonction pour définir / modifier le préfixe:
          var setPrefix = function (prefix) {
     
            if (/^\[.*\]/gi.test($title.val())) {
              $title.val($title.val().replace(/^\[.*\]/gi, function () {
                return '[' + prefix + ']';
              }));
             
              return;
            }
           
             $title.val('[' + prefix + '] ' + $title.val().trim());
          };
        }
     
        /**
        * Partie 2.
        * Remplacer l'étiquette entre les parenthèses avec un vrai tag:
        */
        var $link = $('a[href^="/t"]');
        $link.each(function () {
     
          var $this = $(this);
     
          $.each(tags, function (index, tag) {
            var regex = new RegExp ('\\[' + tag.tag + '\\]', 'gim');
            var text = $this.text();
     
            if (!regex.test(text)) {
              return;
            }
     
            $this.addClass('fa-tagged-link');
            $this.text(text.trim().replace(regex, ''));
            $this.prepend('<span class="fa-topic-tag" style="background-color: ' + tag.background + ';">' + tag.tag + '</span>');
          });
        });
     
        /**
        * Partie 3:
        * Style.
        */
        var styles = [
          '.fa-icon-selector-inner strong {',
          '  display: block;',
          '  margin-bottom: 4px;',
          '  font-weight: bold;',
          '}',
          '',
'.fa-icon-selector .fa-tag-form-group {',
          '  display: inline-block;',
          '  margin-right: 15px;',
          '  background-color: #E0E0E0;',
          '  border-radius: 4px;',
          '  color: #0a0a0a;',
          '  padding: 3px;',
          '  margin: -5px 5px 50px 1px;',
          '  cursor: pointer;',
          '  -webkit-transform: translate3d(0, 50%, 0) rotate(0deg);',
          '  text-shadow: -1px 1px 0 rgba(160, 160, 160, 0.1), 1px -1px 0 rgba(255, 255, 255, 0.1), 1px -1px 25px white, -1px 1.9px 1px #a0a0a0, -2px 3.8px 2px #a0a0a0, -3px 5.7px 3px rgba(160, 160, 160, 0.6666666667), -4px 7.6px 4px rgba(160, 160, 160, 0.5), -5px 9.5px 5px rgba(160, 160, 160, 0.4), -6px 11.4px 6px rgba(160, 160, 160, 0.3333333333), -7px 13.3px 7px rgba(160, 160, 160, 0.2857142857), -8px 15.2px 8px rgba(160, 160, 160, 0.25), -9px 17.1px 9px rgba(160, 160, 160, 0.2222222222), -10px 19px 10px rgba(160, 160, 160, 0.2), -11px 20.9px 11px rgba(160, 160, 160, 0.1818181818), -12px 22.8px 12px rgba(160, 160, 160, 0.1666666667), -13px 24.7px 13px rgba(160, 160, 160, 0.1538461538), -14px 26.6px 14px rgba(160, 160, 160, 0.1428571429), -15px 28.5px 15px rgba(160, 160, 160, 0.1333333333), -16px 30.4px 16px rgba(160, 160, 160, 0.125), -17px 32.3px 17px rgba(160, 160, 160, 0.1176470588), -18px 34.2px 18px rgba(160, 160, 160, 0.1111111111), -19px 36.1px 19px rgba(160, 160, 160, 0.1052631579), -20px 38px 20px rgba(160, 160, 160, 0.1), -21px 39.9px 21px rgba(160, 160, 160, 0.0952380952), -22px 41.8px 22px rgba(160, 160, 160, 0.0909090909), -23px 43.7px 23px rgba(160, 160, 160, 0.0869565217), -24px 45.6px 24px rgba(160, 160, 160, 0.0833333333), -25px 47.5px 25px rgba(160, 160, 160, 0.08);',
          '  font-size: 17px;',
          '  text-rendering: optimizeLegibility;',
          '  -webkit-font-smoothing: antialiased;',
          '}',
          '',
          '.fa-tagged-link {',
          '  text-decoration: none !important;',
          '}',
          '',
          '.fa-tagged-link:hover {',
          '  color: #f73 !important;',
          '  text-decoration: none !important;',
          '}',
          '',
          'span.fa-topic-tag {',
          '  color: #fff;',
          '  background-color: #39c;',
          '  padding: 1px 5px;',
          '  border-radius: 3px;',
          '  margin-right: 4px;',
          '  display: inline;',
          '  text-decoration: none!important',
          '}'
        ].join('\n');
     
        $(['<style type="text/css">', styles, '</style>'].join('\n')).appendTo('head');
       
      });
    }(jQuery));

