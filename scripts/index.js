$(document).ready(function() {
    $('#adb-device-list').hide();

    $('.ddms-navbar-device').click(function() {
        $('#adb-device-list').toggle();
    });

    adb.getHostVersion().then(function(version) {
        var segments = version.replace(/(\d{4})/, '$1,').split(',').map(function(seg) {
            return parseInt(seg, 16);
        });
        //$('#adb-host-version').html('v' + segments.join('.'));
    });

    adb.listDevices().then(function(devices) {
        devices.forEach(function(device) {
            var li = document.createElement('LI');

            $('#adb-device-list').append($(li).html(device.model).click(function() {
                console.log(JSON.stringify(device));
                $('#adb-device-list').hide();
            }));
        });
    }, function(error) {
        console.error('List devices error: ' + error);
    });
});

