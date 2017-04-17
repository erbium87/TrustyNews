
//on click to make favorite
$(document).on("click", ".favorite", function (e) {

	e.preventDefault();


	$(this).attr("data-status", true);

	var thisId = $(this).attr("data-id");

	$.ajax({
		method: "POST",
		url: "/favorites/" + thisId,
		data: {
			saved: true
		}
	})
	.done(function(data) {
		console.log(data);
	});
});

$(document).on("click", ".unfavorite", function (e) {

	
	// var status = $(this).attr("data-status");
	var thisId = $(this).attr("data-id");

	$(this).attr("data-status", false);

	$.ajax({
		method: "POST",
		url: "/unfavorite/" + thisId,
		data: {
			saved: false
		}
	}).done(function(data) {
		console.log(data);
	});
});

//on click for showing comment field to make comment
$(document).on("click", ".commentButton", function (e) {
	$(".addComment").empty();
	e.preventDefault();
	var thisId = $(this).attr("data-id");

	$.ajax({
		method: "GET",
		url: "/comment/" + thisId
	}).done(function(data) {
		console.log(data);
		$(".addComment").append("<textarea id = 'bodyinput' name = 'body' ></textarea>");
		$(".addComment").append("<br><button data-id='" + data._id + "'id = 'saveComment' class='btn btn-default btn-sm'> Save Comment</button>");
		
		if(data.comment) {
			$("#titleinput").val(data.comment.title);
			$("#bodyinput").val(data.comment.body);
		}
	});
});

//save comment to db
$(document).on("click", "#saveComment", function(e) {
	e.preventDefault();
	var thisId = $(this).attr("data-id");

	$.ajax({
		method: "POST",
		url: "/comment/" + thisId,
		data: {
			title: $("#news").val(),
			body: $("#bodyinput").val()
		}
	}).done(function(data) {
		$(".addComment").empty();
	});

	$("#titleinput").val("");
	$("#bodyinput").val("");
});

