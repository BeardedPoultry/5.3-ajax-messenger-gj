export default Backbone.View.extend({
// This is where the view indicates which template file to use during operation.
  template: JST.index,

  events: {
    'submit .login-form: login'
  },
// Function used to create User Name variable that is usable once logged into the chat application
  login: function(e){
    e.preventDefault();
    var username = this.$('.login-form-username').val();
    this.collection.add({name: username});
  },

  initialize: function(){
    this.render();
  },

  render: function() {
    this.$el.html(this.)
  }


})
