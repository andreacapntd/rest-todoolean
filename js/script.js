function getReadTasks() {

  $.ajax({

    url: 'http://157.230.17.132:3002/todos',
    method: 'GET',
    success: function(data) {

      getPrintTasks(data);

    },
    error: function(err) {

      console.log('err', err);

    }
  });
}

function getPrintTasks(tasks) {

  var target = $('#to_do_list');
  target.text('');

  for (var i = 0; i < tasks.length; i++) {

    var task = tasks[i];
    var text = task.text;
    task.text = `<li> <span> ${text} </span> <span> <i data-id='${task.id}' class="fas fa-trash-alt"></i> </span> </li> `
    target.append(task.text);

  }
};


function  getAddTaskListener() {

  var btn = $('#btn');
  btn.click(getAddTask);

}

function getAddTask() {
  var target = $('#form');
  var text = target.val();
  target.val('');

  $.ajax({

    url: 'http://157.230.17.132:3002/todos',
    method: 'POST',
    data: {

      'text': text
    },
    success: function (data) {

      getReadTasks();

    },
    error: function(err) {

      console.log('err', err);

    }
  });

}

function getDeleteTaskListener() {

  $(document).on('click', '.fas', getDeleteTask);

}

function getDeleteTask() {

  var button = $(this);
  var id = button.data('id');

  $.ajax({

    url: `http://157.230.17.132:3002/todos/${id}`,
    method: 'DELETE',
    success: function (data) {

      getReadTasks();

    },
    error: function(err) {

      console.log('err', err);

    }
  });
}

function init() {

  getReadTasks();
  getAddTaskListener();
  getDeleteTaskListener();

}

$(document).ready(init);
