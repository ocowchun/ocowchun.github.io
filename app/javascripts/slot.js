'use strict';

$(function() {
	var $btnMove = $('#btnMove');
	var $list = $('#list');

	$btnMove.on('click', function() {
		slotGo();
	});

	function init() {
		var html = "";
		_(20).times(function(n) {
			html += "<li>" + "<img src='http://www.avatarpro.biz/avatar?=" + n + "' alt='' />" + "</li>"
		});
		$list.html(html + html);
	}

	init();

	var current = 0;
	var intervalID;

	function slotGo() {
		var liHeight = $list.find('li').first().height();
		$list.css("margin-top", "0px");
		var limit = liHeight * Math.floor(20 + Math.random() * 20);
		var position = "-" + limit + "px";
		$list.animate({
			'margin-top': position
		}, 3000, function() {});
	}


})