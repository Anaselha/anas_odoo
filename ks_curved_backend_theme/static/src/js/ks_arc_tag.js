odoo.define('ks_curved_backend_theme.ks_arc', function(require) {
    "use strict";


    var core = require('web.core');
    var AbstractAction = require('web.AbstractAction');

    var KsArc = AbstractAction.extend({

        on_attach_callback: function() {
            var self = this;
            $('body').addClass('ks_appsmenu_active')
        },

    });

    core.action_registry.add('ks_arc_tag', KsArc);
    return KsArc;
});