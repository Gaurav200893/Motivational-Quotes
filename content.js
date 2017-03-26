$(document).ready(function(){
	

	var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://www.google.com/jsapi';
    headID.appendChild(newScript);

	//google.load("language", "1");

	
	//feeds
	$.get("https://www.quotesdaddy.com/feed", function(data, status){	
		processFeedData(data);
    });
	
});

function processFeedData(data){
	
	var html_quote = $(data).find("rss")
		.find("item")
			.find("description").html();
	quote_pieces = html_quote.split('" -');
	
	console.log(quote_pieces);
	
	quote_text = quote_pieces[0];
	
	quote_text = quote_text.replace(/["]+/g, '');
	quote_author = quote_pieces[1];
	console.log(quote_author);
	
	var html_quotes = ""+quote_text.replace(/&lt;br\s*\/&gt;/g,'<br/>');
	$("#quotes").html(html_quotes);
	console.log($(".container-author").find(".author").html(quote_author));
	
	
	
	
	
	
}