//发送登陆请求————未测试
function sendLoginRequest(){
    $.ajax({
        url: "http://localhost:8082/user/login",
        method: 'POST',
        dataType: 'json',
        data: {
            "id":"UserTest",
            "password":"6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"
        },
        processData: false,
        headers: { "Content-Type": "application/json" },
        success: function (data) {
          alert(JSON.stringify(data));
        },
        error: function(data, status){
          alert(status);
        }
    });
};

//发送烧写文件上传请求————未完成
function sendUploadRequest() {
    //为每一个设备进行一次文件的上传
    console.log("upload success!");
};

//发送烧写任务提交请求————未测试
function sendBurnRequest(){
    $.ajax({
        url: "http://localhost:8080/api/device/burn",
        method: 'POST',
        headers: {
            "Authorization": "d554ebd9824bfd7a0a915c79d0551264b9222638f84302a2e80462546e139862"
        },
        //contentType: 'application/json',
        dataType: 'json',
        data: {
            //这是一个json数组，其中元素是一个json对象
            "tasks":[{
                "boardname":"ESP32DevKitC",
                "deviceid":"",
                "runtime":30,
                "filehash":"e634b5ff7c980d68206f40a8d785af58bb0d901ce71d7fa5ee7791fc5d0f42e8",
                "clientid":"",
                "taskindex":1
            }]
        },
        processData: false,
        success: function (data) {
          alert(JSON.stringify(data));
        },
        error: function(data, status){
          // alert(status);
          alert("successfully entered the waiting queue!");
        }
    });
};

//显示系统支持的设备种类————未测试
function sendShowBoradRequest() {
    $.ajax({
        url: "http://localhost:8080/api/device/type",
        method: 'GET',
        headers: {
            "Authorization": "d554ebd9824bfd7a0a915c79d0551264b9222638f84302a2e80462546e139862"
        },
        //contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success: function (data) {
          alert(JSON.stringify(data));
        },
        error: function(data, status){
          alert(status);
        }
    });
};

//显示设备列表————未测试
function sendShowDevicesRequest() {
    $.ajax({
        url: 'http://localhost:8080/api/device/list\\?boardname=\"ESP32DevKitC\"',
        method: 'GET',
        headers: {
            "Authorization": "d554ebd9824bfd7a0a915c79d0551264b9222638f84302a2e80462546e139862"
        },
        //contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success: function (data) {
          alert(JSON.stringify(data));
        },
        error: function(data, status){
          alert(status);
        }
    });
}

// let str = 'http://localhost:8080/api/device/list\\?boardname=\"ESP32DevKitC\"';
// console.log(str);