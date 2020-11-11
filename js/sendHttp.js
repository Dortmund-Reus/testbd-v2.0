let user_token = "";
//map

//发送登陆请求————已测试
function sendLoginRequest(){
    let payload =  {
      "id":"UserTest",
      "password":"6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"
    };
    $.ajax({
        url: "http://localhost:8082/user/login",
        async: false,
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(payload),
        processData: false,
        headers: { "Content-Type": "application/json" },
        success: function (data) {
          alert(JSON.stringify(data));
          user_token = data.data.token;
          //console.log(data.data.token);
          //这里的token是string类型的
          console.log(user_token);
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
            "Authorization": user_token
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
          alert(status);
          //alert("successfully entered the waiting queue!");
        }
    });
};

let boardNames = [];
//显示系统支持的设备种类————已测试
function sendShowBoradRequest() {
    $.ajax({
        url: "http://localhost:8080/api/board/list",
        async: false,
        method: 'GET',
        headers: {
            "Authorization": user_token
        },
        //contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success: function (data) {
          let device_types = data.data.boards;
        //  alert(JSON.stringify(data));
       //   console.log(device_types);
          for(let i = 0; i < device_types.length; i++)
          {
            boardNames.push(device_types[i].boardname);
          }
          //alert(data.data.devices);
        },
        error: function(data, status){
          alert(status);
        }
    });
};

let url_str = 'http://localhost:8080/api/device/list\?boardname=all';
//console.log(str);

//记录收到的设备json数组
let devices_json;
//显示设备列表————已测试
function sendShowDevicesRequest() {
    $.ajax({
        url: url_str,
        async: false,
        method: 'GET',
        headers: {
            "Authorization": user_token
        },
        //contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success: function (data) {
          devices_json = data;
          alert(JSON.stringify(devices_json));
        },
        error: function(data, status){
          alert(status);
        }
    });
}
//sendShowDevicesRequest();

