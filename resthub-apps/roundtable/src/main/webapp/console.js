
/**
 * Routes
 */
(function($) {
	
    var app = $.sammy(function() {
        this.get('#/', function() {
            $('#main').html('<p>Welcome to <strong>Roundtable</strong> console page.</p>');
        });
		
        /**
         * WADL console.
         */
        this.get('#/console/wadl', function() {
            dominoes("lib/ui/jquery.ui.button.js lib/ui/jquery.ui.dialog.js $css(components/wadl/wadl-console.css) ", function() {
                $("#main").wadlConsole();
            });
        });
		
        /**
         * Monitoring console.
         */
        this.get('#/console/monitoring', function() {
			$.ajax({
                    url: 'console/monitoring',
                    dataType: 'html',
                    success: function(data) {
                        $('#main').html(data);
                    }
             });
        });
		
		/**
         * Bean details console.
         */
        this.get('#/console/beandetails', function() {
			$.ajax({
                    url: 'api/beans',
                    dataType: 'json',
                    success: function(data) {
                        $('#main').render("components/beans/beans.html", data);
                    }
                });
        });
        
    });

    $(function() {
        app.run('#/');
    });
})(jQuery);