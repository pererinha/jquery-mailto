/**
 * jQuery.mailto
 * By Daniel Camargo (http://twitter.com/pererinha | http://danielcamargo.com.br/)
 * Copyright (c) 2009
 * Released under the MIT license (MIT-LICENSE.txt)
 * Demo: http://www.danielcamargo.com.br/stuffs/jquery-mailto/
 * 2009-07-07
 */

(function ($) {
    $.fn.mailto = function (options) {
        var opts = $.extend({},$.fn.mailto.defaults, options);
        // iterate and reformat each matched element
        return this.each(function () {
            $this = $(this);
            // build element specific options
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            var address = $this.html();
            // call our format function
            link = $.fn.mailto.format(address, opts);
            $this.html(link);
        });
    };
    // plugin defaults
    $.fn.mailto.defaults = {
        at: '@',
        domain: 'gmail',
        extension: 'com',
        country : '' /* like br, au, uk... */,
        dot : '.'
    };
    // Format and returns the mailto link
    $.fn.mailto.format = function (txt, opts) {
    	var mail = $.trim(txt) + opts.at + opts.domain + opts.dot + opts.extension + ((opts.country!='') ? opts.dot + opts.country : '');
    	var ahref = $('<a></a>');
    	ahref
    		.attr('href','mailto:' + mail)
    		.html(mail);
    	return ahref;
    };
})(jQuery);