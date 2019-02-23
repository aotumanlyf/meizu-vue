import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';
const AUTH_TOKEN = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;  //token
// data转成 string  {}  name=wpwpw&age=18
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use( function (req) {
  // console.log('axios',req);
  // if(req.method.post){
  //   // let form = new FormData();
  //   //  Object.keys(req.data).map(function (key) {
  //   //     form.append(key,req.data[key])
  //   //  });
  //   //
  //   //  req.data = form;
  //   req.data = JSON.stringify(req.data);
  // }
  // return req;
  console.log(req)
},function(err){
  //请求失败网络错误
  if(err){

  }
});

// response  响应
// axios.interceptors.response.use(function (res) {
//     console.log('this is axios',res);
//     if(res.data.code === 201){
//       //跳转
//       console.log(router)
//       router.push('/login')
//       // window.location.href = '#/login'
//     }
//     return res;
//
//
// });

export default axios;



