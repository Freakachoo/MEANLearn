angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr) {
    return {
        notify: function(msg, type) {
            if (type == 'success') {
                mvToastr.success(msg);
            } else {
                mvToastr.warning(msg);
            }
            console.log(msg);
        }
    }
});