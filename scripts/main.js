//(function(){
//  'use strict';
//  	var username = localStorage.getItem('username');
//    var message = [
//     {
//       username: '.login-form-username',
//       created_at: new Date(),
//       content:Math.random()
//     }
//   ]
//    
//  $(document).ready(function(){
//    
//    route();
//    
//    $(document).on('submit', '.login-form', function(event){
//      event.preventDefault();
//      username = ($(this).find('.login-form-username').val());
//      localStorage.setItem('username', username);
//      window.location.hash = '/chat';
//    });
//    
//    $(window).on('hashchange', function(event){
//      event.preventDefault();
//      route();
//    });
//    $(window).on('hashchange', function(event){
//      event.preventDefault();
//      route();
//    });
//  });
//    
//    function route(){
//      switch (window.location.hash){
//      case '':
//        $('.application').html(JST['login']());
//        break;
//      case '#/chat':
//        renderChat()
//        //$('.application').htmls(JST['chat']());
//        break;
//    };
//    }
//    function renderChat(){
//      $('.application').html(JST['chat']());
//      console.log(username);
//   };
//   
//   function message(message) {
//      this.username = username;
//      this.created_at = Date;
//      this.content = message;
//      
//    }
//   $.ajax({
//     url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
//     type:"POST",
//     data: {
//       username: '.login-form-username',
//       created_at: new Date(),
//       content: "Hello"
//     }
//   })
//   function deleteInvalidMessages(){
//  $.ajax({
//    url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/"
//  }).then(function(messages) {
//    console.log(messages);
//    var invalid = _.reject(messages, function(message) {
//      return message.hasOwnProperty('username')
//          && message.hasOwnProperty('created_at')
//          && message.hasOwnProperty('content')
//    });
//    console.log(invalid);
//    invalid.forEach(function(message) {
//      $.ajax({
//        url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/" + message._id,
//        type: "DELETE"
//      })
//    });
//  });
//} 
//
//})();

(function(){
  'use strict';
  
  var username ='';
  var message ='';
  
  $(document).on('submit', '.login-form', function(event){
    event.preventDefault();
    username = $(this).find('login-form-username').val();
    window.chatRouter.navigate('/chat', {trigger: true});
  });
  $(document).on('submit', '.new-message', function(event){
    event.preventDefault();
    message = $(this).find('.message-input').val();
    postMessage();
  });
  
  var ChatRouter = Backbone.Router.extend({
    
  })
});