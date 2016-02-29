require.register("main", function(exports, require, module){
  // router import
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

// Main Backbone Starting function, this is where the router is called.
(function () {
  'use strict';

  $('document').ready(function () {
    Backbone.history.start();
  });
})();

//
// (function(){
//   'use strict';
// // Creating Global Variables for chat function.
//   var username ='';
//
//   var message ='';
//
//   var currentTime = new Date();
//
//   var textEntered = '';
// $(document).ready(function(){
//   route();
//
//   $(document).on('submit', '.login-form', function(event){
//     event.preventDefault();
//     username = $(this).find('login-form-username').val();
//     window.location.hash = '/chat';
//   });
//   $(document).on('submit', '.new-message', function(event){
//     event.preventDefault();
//     message = $(this).find('.message-input').val();
//     postMessage();
//   });
//
// });
//
// function route() {
//     switch(window.location.hash) {
//       case '':
//         $('.application').html(JST['login']());
//         break;
//       case '#/chat':
//         renderChat();
//         break;
//     }
//   }
//
//
//   var ChatRouter = Backbone.Router.extend({
//     routes: {
//      '': 'index',
//      'chat': 'chat'
//     },
//     index: function() {
//       $('application').html(JST['login']());
//     },
//     chat: renderChat
//   });
//   function fetchMessages() {
//     $.ajax({
//       url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
//     })
//     .then(function(data){
//         $('.application').html(JST['chat'](data));
//     });
//   }
//   function postMessage(newMessage){
//     $.ajax({
//       url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
//       data: {
//         username: username,
//         created_at: new Date(),
//         content: newMessage,
//       },
//       type: "POST",
//     });
//     fetchMessages();
//   }
//   function renderChat() {
//     fetchMessages();
//     $('.application').html(JST['chat']());
//   }
//   window.setInterval(fetchMessages, 10000);
// });
  
});

require.register("router", function(exports, require, module){
  "use strict";
  
});

//# sourceMappingURL=app.js.map