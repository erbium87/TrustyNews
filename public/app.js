// $.getJSON("/news", function(data) {
// 	for (var i = 0; i < data.length; i ++) {
// 		$("#news").append("<data-id=`" + data[i]._id + "`>" + data[i].title + "<br />" + data[i].link);
// 	}
// });

// $(document).on("click", "button", function() {
// 	$("#comment").empty();
// 	var thisId = $(this).attr("data-id");

// 	$.ajax({
// 		method: "GET",
// 		url: "/news/" + thisId
// 	})
// 	.done(function(data) {
// 		console.log(data);
// 		$("#comment").append("<h2>" + data.title + "</h2>");
// 		$("#comment").append("<input id = 'titleinput' name = 'title' >");
// 		$("#comment").append("<textarea id = 'bodyinput' name = 'body' ></textarea>");
// 		$("#comment").append("<button data-id='" + data._id + "'id = 'savecomment'>Save Comment</button>");
// 		if(data.comment) {
// 			$("#titleinput").val(data.comment.title);
// 			$("#bodyinput").val(data.comment.body);
// 		}
// 	});
// });

$("#scraper").on("click", function(ev) {
	// ev.preventDefault();

	$.get("/news", function(data) {});
});

$("#faves").on("click", function(){
	$.get("/")
})



$(document).on("click", "#favorite", function () {
	var thisId = $(this).attr("data-id");

	$.ajax({
		method: "POST",
		url: "/news/" + thisId,
		data: {
			title: $("#news").val(),
			body: $("#bodyinput").val()
		}
	})
	.done(function(data) {
		console.log(data);
		// $("#comment").empty();
	});
	// $("#titleinput").val("");
	// $("#bodyinput").val("");
});