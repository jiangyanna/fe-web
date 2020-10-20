export default function ({ $axios, redirect}: any) {
  $axios.onRequest((config: any) => {
    console.log('Making request to ' + config.url);
  });
  // $axios.onRequestError((err: any) => {
  //   console.log('---request error:', err)
  // });

  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status);
    if (code) {
      console.log('接口请求失败：', error);
    }
  });
}