jQuery(function(a){var b=a('code');if(b.length){function f(h){var j='',k='cut'===h?'X':'C';return j=/iPhone|iPad/i.test(navigator.userAgent)?'No support!':/Mac/i.test(navigator.userAgent)?'Press \u2318-'+k+' to '+h:'Press Ctrl-'+k+' to '+h,j}function g(h){setTimeout(function(){h.className='clipboard clipboard'},400)}hljs.configure({useBR:!0}),b.each(function(h,j){hljs.highlightBlock(j)});var c=document.querySelectorAll('.codebox:not(.spoiler) > dd');[].forEach.call(c,function(h){h.firstChild.insertAdjacentHTML('beforebegin','<i class="clipboard clipboard" data-clipboard></i>')});var d=new Clipboard('[data-clipboard]',{target:function(h){return h.nextElementSibling}});d.on('success',function(h){h.clearSelection(),h.trigger.className='clipboard check-circle',g(h.trigger)}),d.on('error',function(h){h.trigger.className='clipboard exclamation-triangle',g(h.trigger),alert(f(h.action))})}});