/* Zzhljs - http://devs.forumvi.com */
jQuery(function($){
    var $code = $("code");
    if ($code.length) {
        hljs.configure({
            useBR: true
        });
        $code.each(function (i, block) {
            hljs.highlightBlock(block);
        });

        function fallbackMessage(action) {
            var actionMsg = '';
            var actionKey = (action === 'cut' ? 'X' : 'C');

            if (/iPhone|iPad/i.test(navigator.userAgent)) {
                actionMsg = 'No support!';
            } else if (/Mac/i.test(navigator.userAgent)) {
                actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
            } else {
                actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
            }

            return actionMsg;
        }

        function afterClipboard(ele) {
            setTimeout(function(){
                ele.className = 'clipboard clipboard';
            }, 400);
        }

        var snippets = document.querySelectorAll('.codebox:not(.spoiler) > dd');

        [].forEach.call(snippets, function (snippet) {
            snippet.firstChild.insertAdjacentHTML('beforebegin', '<i class="clipboard clipboard" data-clipboard></i>');
        });

        var clipboardSnippets = new Clipboard('[data-clipboard]', {
            target: function (trigger) {
                return trigger.nextElementSibling;
            }
        });

        clipboardSnippets.on('success', function (e) {
            e.clearSelection();
            e.trigger.className = 'clipboard check-circle';
            afterClipboard(e.trigger);
        });

        clipboardSnippets.on('error', function (e) {
            e.trigger.className = 'clipboard exclamation-triangle';
            afterClipboard(e.trigger);
            alert(fallbackMessage(e.action));
        });
    }
});
