var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: '10.16.238.101:8200',
  //log: 'trace'
});

// client.cluster.state(function (errot,resp) {
//   console.log(resp.metadata.indices);
// });
// client.mget({
//   index: 'shoppingcartapi-2017-09-04',
//   body: {
//     ids: [1, 2, 3]
//   }
// }, function(error, response){
//   console.log(response);
// });
client.bulk({
  refresh:true,
  body:[{"update":{"_index":"logx_emailservice_e3-2017.10.17","_type":"logx","_id":"\\x00\\x00\\x8BR\\x00\\x01saveLogToDBFailed             SXEC02         ERROk\\x11\\xBA\\xEC\\xC3g\\xC39"}}
  ,{ "doc" : {"kibanaSendEmailNum":3} }]
}, function (error, response) {
 console.log(response);
});