function getReadTasks() {

  var target = $('#to_do_list');

  $.ajax({

    url: 'http://157.230.17.132:3002/todos',
    method: 'GET',
    success: function(data) {
      console.log('data', data);
    },
    error: function(err) {
      console.log('err', err);
    }
  });
}




function init() {

  getReadTasks();

}



$(document).ready(init);
