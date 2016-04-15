var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=datasetMetadataSearch&q=id:bfe6243d-7061-49ac-893a-83ea58e3d06e";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
