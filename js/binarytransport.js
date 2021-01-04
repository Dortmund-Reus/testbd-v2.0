/**
 *
 * jquery.binarytransport.js
 *
 * @description. jQuery ajax transport for making binary data type requests.
 * @version 1.0 
 * @author Henry Algus <henryalgus@gmail.com>
 *
 */

// use this transport for "binary" data type
$.ajaxTransport("+binary", function(options, originalOptions, jqXHR){
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == 'binary')) 
        || (options.data 
        && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) 
        || (window.Blob && options.data instanceof Blob))))
       )
    {
        return {
            // create new XMLHttpRequest
            send: function(headers, callback){
        // setup all variables
                var xhr = new XMLHttpRequest(),
        url = options.url,
        type = options.type,
        async = options.async || true,
        // blob or arraybuffer. Default is blob
        dataType = options.responseType || "blob",
        data = options.data || null,
        username = options.username || null,
        password = options.password || null;

                xhr.addEventListener('load', function(){
            var data = {};
            data[options.dataType] = xhr.response;
            // make callback and send data
            callback(xhr.status
                    , xhr.statusText
                    , data
                    , xhr.getAllResponseHeaders());
                });

                xhr.open(type, url, async, username, password);

        // setup custom headers
        for (var i in headers ) {
            xhr.setRequestHeader(i, headers[i] );
        }

                xhr.responseType = dataType;
                xhr.send(data);
            },
            abort: function(){
                jqXHR.abort();
            }
        };
    }
});
function downloadFile(url, headers, filename) {
return $.ajax({
  url:url,
  dataType:"binary",
  processData: false,
  headers:headers
})
.then(function handleFile(data) {
    console.log(this.response || data);
    var file = URL.createObjectURL(this.response || data);
    filename = filename || url.split("/").pop();
    var a = document.createElement("a");
    // if `a` element has `download` property
    if ("download" in a) {
      a.href = file;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // use `window.open()` if `download` not defined at `a` element
      window.open(file)
    }
  })
}

