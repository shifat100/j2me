//get file extension
function fileExtention(filename) {
    var fsplit = filename.split('.');
    var extention = fsplit[fsplit.length - 1];
    return extention;
}

//get base file Name
function baseFileName(filename) {
    var s = filename.split('/');
    var name = s[s.length - 1];
    return name;
}

function alertSuccess(successcount, failcount) {
    alert('Installation completed, success ' + successcount + ', failure ' + failcount + '');
}

navigator.mozSetMessageHandler('activity', function (activityReq) {
    var _files = activityReq.source.data.blobs;
    if (_files.length == 0) {
        return;
    }
    var successcount = 0;
    var failcount = 0;
    var allcount = _files.length;
    for (var i = 0; i < _files.length; i++) {
        const _file = _files[i];
        if (!_file.name.toLowerCase().endsWith('.jar')) {
            //alert('Only jar format can be uploaded!');
            //return;
            failcount++;
            continue;
        }
        //fs.createUniqueFile('/Phone',_file.name,_file);
        const reader = new FileReader();
        reader.readAsArrayBuffer(_file);
        reader.onload = function (readRes) {
            JARStore.installJAR(_file.name, readRes.target.result).then(
                () => {
                    successcount++;
                    document.body.innerHTML+=('<font style="color: green"><b>(+)</b> '+baseFileName(_file.name) + ' Installed</font><hr>');
                    if (successcount + failcount >= allcount) {
                        alertSuccess(successcount, failcount);
                        refreshGameList();
                    }
                },
                (errname) => {
                    failcount++;
                    document.body.innerHTML+=('<font style="color: red"><b>(x)</b> '+baseFileName(_file.name) + ': ' + errname+'</font><br>');
                    if (successcount + failcount >= allcount) {
                        alertSuccess(successcount, failcount);
                        refreshGameList();
                    }
                }
            );
        }
    }

});

			














document.body.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        window.location.href= 'index.html';
    }
})