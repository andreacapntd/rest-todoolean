function getReadTasks() {

  $.ajax({

    url: 'http://157.230.17.132:3002/todos',
    method: 'GET',
    success: function(data) {
      console.log('data', data);
      getPrintTasks(data);
    },
    error: function(err) {
      console.log('err', err);
    }
  });
}

function getPrintTasks(tasks) {

  var target = $('#to_do_list');

  for (var i = 0; i < tasks.length; i++) {

    var task = tasks[i];
    var text = task.text;
    task.text = `<li> <span> ${text} </span> <span> <i class="fas fa-trash-alt"></i> </span> </li> `
    target.append(task.text);

  }

};




function init() {

  getReadTasks();

}



$(document).ready(init);
