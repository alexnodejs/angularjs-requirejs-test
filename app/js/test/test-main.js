require({
    baseUrl: '/base/js'
}, ['bootstrap', 'app', 'test/unit/controllers.test'], function() {
    window.__testacular__.start();
});
