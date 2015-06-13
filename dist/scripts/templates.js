this["JST"] = this["JST"] || {};
this["JST"]["chat"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"total-container\">\n	<div class=\"container-sidebar\">\n		<img class=\"profile-pic\" src=\"/profile/usr.jpg\"></img>\n		<ul class=\"username\">"
    + this.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</ul>\n	</div>\n	<div class=\"main-container\">\n		<div class=\"message-entry-container\">\n			<ul class=\"chatlog\"> \n				\n			</ul>\n			<div class=\"messagelog\">\n				<entry class=\"text-entry-field\"></entry>\n			<form class=\"createmessage\">\n  			<input class=\"typemessage\" type=\"text\" placeholder=\"Type your message here\">\n  			<input class=\"submit-message\" type=\"submit\" value=\"Send\">\n			</form>\n				</div>\n		</div>\n	</div>\n\n</div>";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"login-container\">\n   <h1 class=\"loginProgam\">Chattery</h1>\n      <hr></hr>\n      <form class=\"login-form\">\n      <input type=\"text\" class=\"login-form-username\" placeholder=\"Username\">\n      <input type=\"submit\" value=\"login\">\n </form>   \n</div>\n\n ";
},"useData":true});
this["JST"]["message"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>Username: "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</li>\n<li>Content: "
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</li>\n<li>Time: "
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</li>\n<li>Message ID: "
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});