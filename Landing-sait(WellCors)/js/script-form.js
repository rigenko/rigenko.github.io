$(document).ready(function() {
	"use strict";
	$('form[data-form="form"]').submit(function(){ // we take everything at the event of dispatch
		var form = $(this);
		var error = false;

		// checking empty fields
		if(form.find('input[type="text"]').length){
			form.find('input[type="text"]').each( function(){
				if ($(this).val() == '') {
					alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!');
					error = true;
				}
			});
		}
		
		// email validation
		if (!error) {
			if(form.find('input[name="user_email"]').length){
				var pattern = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				var email = form.find('input[name="user_email"]').val();
				if(!(pattern.test(email))){
					alert('Формат email неправильный');
					error = true;
				}
			}
		}

		if (!error) { // if there is no error
		
			// new FormData
			var data = new FormData();

			//add files to send
			if(form.find('input[type="file"]')[0]){
				jQuery.each(form.find('input[type="file"]')[0].files, function(i, file) {
					data.append('attachment[]', file);
				});
			}
			if(form.find('input[type="file"]')[1]){
				jQuery.each(form.find('input[type="file"]')[1].files, function(i, file) {
					data.append('attachment[]', file);
				});
			}
			if(form.find('input[type="file"]')[2]){
				jQuery.each(form.find('input[type="file"]')[2].files, function(i, file) {
					data.append('attachment[]', file);
				});
			}

			// add form fields to submit
			if(form.find('input[name]:not([type=checkbox])').length){
				jQuery.each(form.find('input[name]:not([type=checkbox])'), function() {
					var inp = $(this);
					data.append(inp.attr('name'), inp.val());
				});
			}

			// add textarea to send
			if(form.find('textarea').length){
				data.append(form.find('textarea').attr('name'), form.find('textarea').val());
			}

			// add select to send
			if(form.find('select').length){
				jQuery.each(form.find('select'), function() {
					var sel = $(this);
					data.append(sel.attr('name'), sel.val());
				});
			}
			
			// add checkbox for sending
			if(form.find('input[type="checkbox"]').length){
				jQuery.each(form.find('input[type="checkbox"]'), function() {
					var check = $(this);
					if (check.is(':checked')){
						data.append(check.attr('name'), check.val());
					}
				});
			}

			// add radio to send
			if(form.find('input[type="radio"]').length){
				jQuery.each(form.find('input[type="radio"]'), function() {
					var check = $(this);
					if (check.is(':checked')){
						data.append(check.attr('name'), check.val());
					}
				});
			}

			// get the action of the form
			var action = form.attr('action');

			$.ajax({ // initialize an ajax request
				type: 'POST', // send in POST format, you can GET
				url: action, // the way to the worker
				dataType: 'json', // we are waiting for the answer in json format
				data: data, // data for dispatch
				processData: false,
				contentType: false,
				cashe: false,
				beforeSend: function(data) { // event before dispatch, you can add your own effect
					form.find('button[type="submit"]').attr('disabled', 'disabled'); // for example, disable the button
					},
				success: function(data){ // event after a successful call to the server and receiving a response
					if (data['result'] == 'error') { // if the handler returned an error
						alert(data['error']); // let's show her text
					} else { // if everything is ok
						alert('Письмo oтпрaвлeнo!'); // we write that everything is ok
					}
					},
				error: function (xhr, ajaxOptions, thrownError) { // in case of an unsuccessful request to the server
					alert(xhr.status); // let's show the answer of the server
					alert(thrownError); // and text of errors
					},
				complete: function(data) { // event after any output, remove the added effects
					form.find('button[type="submit"]').prop('disabled', false); // turn on the button back
					form.find('input[type="text"]').val(''); // clear input type = "text"
					form.find('textarea').val(''); // clear textarea
					form.find('input[type="file"]').val(''); // clear input type = "file"
					}
							
					});
		}
		return false; // turn off the standard form sending
	});
});
