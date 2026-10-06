var $selected = 0, //открытый select в данный момент
	$form_data = {}; //параметры для отправки файлов

$(function() {
	'use strict';
	
	/* Модальные окна
	------------------------------------------------------- */
	$('#page').on('click', '.js-open-modal', function(){
		var $modal = $($(this).data('modalId'));
		$('#page').addClass('form-open');
		$modal.show().removeClass('bounceOutDown').addClass('bounceInUp');
		return false;
	});
	
	
	$('.js-close').on('click', function(){
		var $modal = $($(this).data('modalId'));
		$modal.removeClass('bounceInUp').addClass('bounceOutDown');
		setTimeout(function() {
			$modal.hide();
			$('#page').removeClass('form-open');
		}, 700);
		return false;
	});
	
	
	$(function(){
		$(document).click(function(event) {
			if ($('.fs-box2').is(':visible')) {
				if ($(event.target).closest('.js-form2').length) { return; }
				var $modal = $('.fs-box2:visible');
				$modal.removeClass('bounceInUp').addClass('bounceOutDown');
				setTimeout(function() {
					$modal.hide();
					$('#page').removeClass('form-open2');
				}, 700);
				event.stopPropagation();
			} else {
				if ($('.fs-box1').is(':visible')) {
					if ($(event.target).closest('.js-form').length) { return; }
					var $modal = $('.fs-box1:visible');
					$modal.removeClass('bounceInUp').addClass('bounceOutDown');
					setTimeout(function() {
						$modal.hide();
						$('#page').removeClass('form-open');
					}, 700);
					event.stopPropagation();
				}
			}
		});
	});
	
	
	if ($('#js-data-table').length) {
		
		var $language = {
			"sInfo": "Показаны с _START_ по _END_ из _TOTAL_ записей",
			"sLengthMenu": "Показать _MENU_ записей"
		},
		$table_settings = {};
		
		
		if ($('#js-data-table').hasClass('js-table0')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 120, targets: 0}, //ID заказа
					{width: 220, targets: 2}, //email
					{width: 200, targets: 3}, //телефон
					{width: 200, targets: 5}, //дата добавления
					{width: 180, targets: 6}, //статус
					{width: 140, orderable: false, targets: 7} //просмотр
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table1')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 140, targets: 0}, //ID языка
					{width: 300, orderable: false, targets: [2,3]}
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table2')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 140, targets: 0}, //ID страны
					{width: 200, orderable: false, targets: [4,5]}
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table3')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 120, targets: 0}, //ID заявки
					{width: 220, targets: 1}, //имя
					{width: 220, targets: 2}, //email
					{orderable: false, targets: 3},
					{width: 200, targets: 4}, //дата добавления
					{width: 180, targets: 5} //статус
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table4')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 140, targets: 0}, //ID курса
					{orderable: false, width: 180, targets: 4} //действие
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table5')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 120, targets: 0}, //ID отзыва
					{width: 120, targets: 1}, //ID школы
					{width: 160, targets: 2}, //оценка школе
					
					{orderable: false, targets: 4}, //отзыв
					{width: 200, targets: 5}, //дата добавления
					{width: 180, targets: 6}, //показывать
					{orderable: false, width: 180, targets: 7} //действие
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table6')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 120, targets: 0}, //ID отзыва
					{width: 220, targets: 1}, //имя
					{orderable: false, targets: 2}, //отзыв
					{width: 180, targets: 3}, //показывать
					{width: 180, targets: 4}, //выводить на главной
					{orderable: false, width: 180, targets: 5} //действие
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table7')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 140, targets: 0}, //ID школы
					{width: 300, targets: [1,2]},
					{width: 200, orderable: false, targets: 4}, //изображение
					{width: 160, targets: 5}, //выводить на главной
					{width: 160, orderable: false, targets: 6} //действие
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table8')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				columnDefs: [
					{width: 120, targets: 0}, //ID вопроса
					{width: 160, orderable: false, targets: 2} //изображение, действие
				]
			};
		}
		
		
		if ($('#js-data-table').hasClass('js-table9')) {
			$table_settings = {
				"language": $language,
				"order": [[ 0, "desc" ]],
				"autoWidth": false,
				columnDefs: [
					{width: 140, targets: 0}, //ID курса
					{orderable: false, width: 180, targets: 5} //действие
				]
			};
		}
		
		
		var $t = $('#js-data-table').DataTable($table_settings);
		$('#js-data-table_length, #js-data-table_filter').wrapAll('<div class="table-container">');
		$('#js-data-table_info, #js-data-table_paginate').wrapAll('<div class="table-container">');
		
		var $form_select = '<div class="numrows">'+
			'<div class="sort-container js-write-form-select0" id="js-numrows-selected">10</div>'+
			'<div id="js-numrows-form" class="button-group js-form-select">'+
				'<a href="#" class="js-switch" data-value="0">10</a>'+
				'<a href="#" class="js-switch" data-value="1">25</a>'+
				'<a href="#" class="js-switch" data-value="2">50</a>'+
				'<a href="#" class="js-switch" data-value="3">100</a>'+
			'</div>'+
		'</div>';
		
		var $wrap_select_length = $('#js-data-table_length'),
			$select_length = $wrap_select_length.find('select');
		
		$select_length.hide().before($form_select);
		
		$('#js-numrows-form').children('.js-switch').on('click', function(){
			var $this = $(this),
				$value = $this.data('value');

			$('#js-numrows-selected').text($this.text());
			$('#js-numrows-form').hide();
			$select_length.children('option').eq($value).prop('selected', true);
			$select_length.change();
			return false;
		});
	}
	
	/* SELECT
	------------------------------------------------------- */
	$('#page').on('click', '.js-write-form-select0', function(){
		$('.js-form-select').hide();
		$(this).next('.button-group').show();
		return false;
	});
	
	
	$('#page').on('click', '.js-open-form-select', function(){
		$('.js-form-select').hide();
		$selected = $(this);
		$selected.children('.js-form-select').show();
		return false;
	});
	
	
	$(function(){
		$(document).click(function(event) {
			if ($('.js-form-select').is(':visible')) {
				if ($(event.target).closest('.js-form-select').length) { return; }
				$('.js-form-select').hide();
				event.stopPropagation();
			}
		});
	});
	
	
	$('#page').on('click', '.js-option', function(){
		var $this = $(this);
		$('.js-form-select').hide();
		$selected.data('value', $this.data('value')).children('span').text($this.text());
		return false;
	});
	
	
	$('#page').on('click', '.js-option2', function(){
		var $this = $(this),
			$options = []; //выбранные параметры списка
		$('.js-form-select').hide();
		
		if ($this.hasClass('selected')) {
			$this.removeClass('selected');
		} else {
			$this.addClass('selected');
		}
		
		$('#js-interior').find('.js-option2').filter('.selected').each(function() {
			$options.push($(this).children('.label').text());
		});
		
		$selected.children('span').text($options.join(', '));
		return false;
	});
	
	
	/* Вход в панель управления 
	------------------------------------------------------- */
	$('#js-login').on('click', function(){
		var $container = $('#page'),
			$password = $('#password-l'),
			$data = {}; //Ответ от сервера
		
		$.post('./handlers_a/ajax_sign_in.php',
			{
				login: $('#login-l').val(),
				password: $password.val()
			},
			function(data){ // Обработчик ответа от сервера
				$data = $.parseJSON(data);
				if ($data.name === 'signin') {
					window.location.href = $data.redirect;
				} else {
					$password.val('').blur();
					var $field = $('#'+ $data.name +'-l'),
						$offset = $field.offset(),
						$icon = $('<i class="fa fa-exclamation-circle icon-error"></i>');
					$container.children('.icon-error').remove();		
					$icon.css({top: $offset.top + 12, left: $offset.left + $field.width()});
					$container.prepend($icon);
					$container.children('.icon-error').delay(7000).fadeOut(500);
					popupInfo($data.error, true);
				}
  			});
		return false; 
	});


	/*  Статус
	------------------------------------------------------- */
	$('#page').on('click', '.js-status', function(){
		var $this = $(this),
			$d = $this.data(),
			$select = $('#js-item'+ $d.id).find('.js-open-status'),
			status_class = 'new',
			$data = {}; //Ответ от сервера
		
		if ($d.status === 2) {
			status_class = 'wait';
		}
		
		if ($d.status === 3 || $d.status === 4) {
			status_class = 'ok';
		}
		
		if ($d.status === 0) {
			status_class = 'no';
		}

		$select.removeClass('new wait ok no').addClass(status_class).children('span').text($this.text());
		$('.js-form-select').hide();
		
		$.post('./handlers_a/ajax_status.php', $d, 
			function(data) { // Обработчик ответа от сервера
				$data = $.parseJSON(data);
				
				if ($data.name === 'success') {
					popupInfo('Изменения сохранены');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});
		
		return false;
	});
	
	
	/*  Показывать на главной
	------------------------------------------------------- */
	$('#page').on('click', '.js-home-page', function(){
		var $this = $(this),
			$d = $this.data(),
			$select = $('#js-item'+ $d.id).find('.js-open-home-page'),
			status_class = 'no',
			$data = {}; //Ответ от сервера
		
		if ($d.status === 1) {
			status_class = 'ok';
		}

		$select.removeClass('ok no').addClass(status_class).children('span').text($this.text());
		$('.js-form-select').hide();
		
		$.post('./handlers_a/ajax_home_page.php', $d, 
			function(data) { // Обработчик ответа от сервера
				$data = $.parseJSON(data);
				
				if ($data.name === 'success') {
					popupInfo('Изменения сохранены');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});
		
		return false;
	});
	
	
	/* Загрузка содержания брони
	------------------------------------------------------- */
	$('#page').on('click', '.js-view', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_booking.php',
			{
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					
					$('#js-booking').html($data.booking);
					$('#page').addClass('form-open');
					$('#js-modal-booking').show().removeClass('bounceOutDown').addClass('bounceInUp');

				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});

	
	/* Новый отзыв о сервисе
	------------------------------------------------------- */
	$('#js-client-add').on('click', function(){
		var $d = {}, //передаем на сервер
			$data = {}; //ответ от сервера
		
		$d.action = 'add';
		$d.username = $('#js-username-new').val();
		$d.comment = $('#js-comment-new').val();

		$.post('./handlers_a/ajax_reviews.php', $d, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$d.id = $data.id;
					templateClient($d);
					$('#js-client-add-modal').find('.js-close').click();
					popupInfo('Отзыв добавлен');

				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Шаблон отзыва о сервисе
	------------------------------------------------------- */
	function templateClient($obj) {
		
		var $tr = '<tr id="js-item'+ $obj.id +'">'+
			'<td class="column">'+ $obj.id +'</td>'+
			'<td class="column">'+ $obj.username +'</td>'+
			'<td class="column"><div class="description">'+ $obj.comment +'</div></td>'+
			
			'<td class="column" data-order="3">'+
				'<div class="select ok js-open-form-select js-open-status">'+
					'<span>да</span>'+
					'<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">'+
						'<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65656 5.69492L9.69697 1.72882C10.101 1.32204 10.101 0.711867 9.69697 0.305087C9.29293 -0.101693 8.68687 -0.101693 8.28283 0.305087L4.94949 3.55932L1.71717 0.305085C1.31313 -0.101695 0.70707 -0.101695 0.30303 0.305085C0.101009 0.508475 -1.11131e-07 0.711864 -1.77809e-07 1.01695C-2.22261e-07 1.22034 0.101009 1.52542 0.303029 1.72881L4.34343 5.69492C4.64646 6.1017 5.35353 6.1017 5.65656 5.69492Z" fill="#4d4d4d"></path>'+
					'</svg>'+
					'<div class="options options2 js-form-select">'+
						'<a href="#" class="js-status" data-status="3" data-id="'+ $obj.id +'" data-action="reviews">да</a>'+
						'<a href="#" class="js-status" data-status="0" data-id="'+ $obj.id +'" data-action="reviews">нет</a>'+
					'</div>'+
				'</div>'+
			'</td>'+
			
			'<td class="column" data-order="0">'+
				'<div class="select ok js-open-form-select js-open-home-page">'+
					'<span>нет</span>'+
					'<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">'+
						'<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65656 5.69492L9.69697 1.72882C10.101 1.32204 10.101 0.711867 9.69697 0.305087C9.29293 -0.101693 8.68687 -0.101693 8.28283 0.305087L4.94949 3.55932L1.71717 0.305085C1.31313 -0.101695 0.70707 -0.101695 0.30303 0.305085C0.101009 0.508475 -1.11131e-07 0.711864 -1.77809e-07 1.01695C-2.22261e-07 1.22034 0.101009 1.52542 0.303029 1.72881L4.34343 5.69492C4.64646 6.1017 5.35353 6.1017 5.65656 5.69492Z" fill="#4d4d4d"></path>'+
					'</svg>'+
					'<div class="options options2 js-form-select">'+
						'<a href="#" class="js-home-page" data-status="1" data-id="'+ $obj.id +'" data-action="reviews">да</a>'+
						'<a href="#" class="js-home-page" data-status="0" data-id="'+ $obj.id +'" data-action="reviews">нет</a>'+
					'</div>'+
				'</div>'+
			'</td>'+
			
			'<td class="column">'+
				'<a href="#" class="icon2 js-client-edit" data-id="'+ $obj.id +'">'+
					'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">'+
						'<path d="M990,418.3v462.8C990,941,941,990,881.1,990H118.9C59,990,10,941,10,881.1V118.9C10,59,59,10,118.9,10h462.7v40.8H130.3c-54.9,0-79.4,24.5-79.4,79.4v739.6c0,54.9,24.5,79.4,79.4,79.4h739.5c54.9,0,79.4-24.5,79.4-79.4V418.3H990z M882.7,59.5l57.7,57.7c15.9,15.9,15.9,41.8,0,57.7l-28.9,28.9L367.2,748.2v0H251.7V632.8L796.1,88.4l0,0L825,59.5C840.9,43.6,866.8,43.6,882.7,59.5z M796.1,146.1L295,647.2l-2,59.7l59.7-2v0l501.1-501L796.1,146.1z M853.8,88.4L825,117.2l57.8,57.8l28.9-28.9L853.8,88.4z"/>'+
					'</svg>'+
				'</a>'+
				'<a href="#" class="icon2 js-client-delete" data-id="'+ $obj.id +'">'+
					'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">'+
						'<path d="M990,213.3H826.7v714.5c0,22.6-18.3,40.9-40.9,40.9H214.2c-22.5,0-40.9-18.3-40.9-40.9V213.3H10v-39.1h285.8V72.1c0-22.6,18.3-40.8,40.9-40.8h326.6c22.5,0,40.9,18.3,40.9,40.8v102.1H990V213.3z M664.3,92c0-11.3-9.1-20.4-20.4-20.4H357.1c-11.3,0-20.4,9.1-20.4,20.4v82.2h327.6V92z M785.8,213.3H214.2v694.1c0,11.3,9.1,20.4,20.4,20.4h530.9c11.2,0,20.4-9.1,20.4-20.4V213.3z M581.7,376.6h40.8v387.9h-40.8V376.6z M377.5,376.6h40.8v387.9h-40.8V376.6z"/>'+
					'</svg>'+
				'</a>'+
			'</td>'+
		'</tr>';
		
		$t.row.add($($tr)).draw(false);
	}


	/* Открыть окно редактирования отзыва о сервисе
	------------------------------------------------------- */
	$('#page').on('click', '.js-client-edit', function(){
		var $id = $(this).data('id'),
			$d = $t.row('#js-item'+ $id).data();

		$('#js-username-edit').val($d[1]);
		$('#js-comment-edit').val(toTextarea($d[2]));
		$('#js-client-save').data('id', $id);

		$('#page').addClass('form-open');
		$('#js-client-edit-modal').show().removeClass('bounceOutDown').addClass('bounceInUp');
		return false;
	});

	
	/* Редактирование отзыва о сервисе
	------------------------------------------------------- */
	$('#js-client-save').on('click', function(){
		var $id = $(this).data('id'),
			$li = $('#js-item'+ $id),
			$d = {}, //передаем на сервер
			$rowData = $t.row($li).data(), //данные с DataTable
			$newData = {}, //передаем в DataTable
			$data = {}; //ответ от сервера
		
		$d.action = 'edit';
		$d.id = $id;
		$d.username = $('#js-username-edit').val();
		$d.comment = fromTextarea($('#js-comment-edit').val());
		
		$newData = $rowData;
		$newData[1] = $d.username;
		$newData[2] = '<div class="description">'+ $d.comment +'</div>';

		$.post('./handlers_a/ajax_reviews.php', $d, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row($li).data($newData).draw();
					$('#js-client-edit-modal').find('.js-close').click();
					popupInfo('Изменения сохранены');

				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление отзыва о сервисе
	------------------------------------------------------- */
	$('#page').on('click', '.js-client-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_reviews.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Отзыв удален');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Шаблон полей стоимости курса
	------------------------------------------------------- */
	function templateFields($value) {
		
		return '<div class="input-group js-group" id="js-group'+ $value +'" data-value="'+ $value +'">'+
			'<input class="input__field js-weeks" type="text" placeholder="Недель">'+
			'<input class="input__field js-price" type="text" placeholder="Цена за неделю">'+
			'<a href="#" class="icon2 js-price-del" data-value="'+ $value +'">'+
				'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M990,213.3H826.7v714.5c0,22.6-18.3,40.9-40.9,40.9H214.2c-22.5,0-40.9-18.3-40.9-40.9V213.3H10v-39.1h285.8V72.1c0-22.6,18.3-40.8,40.9-40.8h326.6c22.5,0,40.9,18.3,40.9,40.8v102.1H990V213.3z M664.3,92c0-11.3-9.1-20.4-20.4-20.4H357.1c-11.3,0-20.4,9.1-20.4,20.4v82.2h327.6V92z M785.8,213.3H214.2v694.1c0,11.3,9.1,20.4,20.4,20.4h530.9c11.2,0,20.4-9.1,20.4-20.4V213.3z M581.7,376.6h40.8v387.9h-40.8V376.6z M377.5,376.6h40.8v387.9h-40.8V376.6z"></path></svg>'+
			'</a>'+
		'</div>';
	}
	
	
	/* Добавить поля стоимости курса
	------------------------------------------------------- */
	$('#js-price-add').on('click', function(){
		
		var $value = $('.js-group').length ? $('.js-group').first().data('value') : 1;
		
		$('#js-price-group').prepend(templateFields($value));
		return false;
	});
	
	
	/* Удалить поля стоимости курса
	------------------------------------------------------- */
	$('#page').on('click', '.js-price-del', function(){
		var $value = $(this).data('value');
		$('#js-group'+ $value).remove();
		return false;
	});
	
	
	/* Редактирование страницы 
	------------------------------------------------------- */
	$('#js-page').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$data = {}; //ответ от сервера
		
		$d.meta_title = $('#js-meta-title').val();
		$d.meta_description = $('#js-meta-description').val();
		$d.meta_keywords = $('#js-meta-keywords').val();
		
		$d.text_en = $('#js-page-text-en').find('.fr-element').html();
		$d.text_es = $('#js-page-text-es').find('.fr-element').html();
		$d.text_ua = $('#js-page-text-ua').find('.fr-element').html();
		$d.text_ru = $('#js-page-text-ru').find('.fr-element').html();
		$d.text_cn = $('#js-page-text-cn').find('.fr-element').html();

		$.post('./handlers_a/ajax_page.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo('Изменения сохранены');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Настройки
	------------------------------------------------------- */
	$('#js-settings-save').on('click', function(){
		var $d = {}, //передаем на сервер
			$data = {}; //ответ от сервера
		
		$d.meta_title = $('#js-meta-title').val();
		$d.meta_description = $('#js-meta-description').val();
		$d.meta_keywords = $('#js-meta-keywords').val();
		
		$d.tel = $('#js-tel').val();
		$d.email = $('#js-email').val();
		$d.facebook = $('#js-facebook').val();
		$d.instagram = $('#js-instagram').val();
		$d.vk = $('#js-vk').val();
		$d.ok = $('#js-ok').val();
		$d.telegram = $('#js-telegram').val();
		
		$d.address_en = $('#js-address-en').val();
		$d.address_es = $('#js-address-es').val();
		$d.address_ua = $('#js-address-ua').val();
		$d.address_ru = $('#js-address-ru').val();
		$d.address_cn = $('#js-address-cn').val();
		
		$d.schedule_en = $('#js-schedule-en').val();
		$d.schedule_es = $('#js-schedule-es').val();
		$d.schedule_ua = $('#js-schedule-ua').val();
		$d.schedule_ru = $('#js-schedule-ru').val();
		$d.schedule_cn = $('#js-schedule-cn').val();

		$.post('./handlers_a/ajax_settings.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo('Изменения сохранены');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование вопроса
	------------------------------------------------------- */
	$('#js-faq').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Вопрос добавлен', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.question_en = $('#js-question-en').val();
		$d.question_es = $('#js-question-es').val();
		$d.question_ua = $('#js-question-ua').val();
		$d.question_ru = $('#js-question-ru').val();
		$d.question_cn = $('#js-question-cn').val();
		
		$d.answer_en = $('#js-answer-en').find('.fr-element').html();
		$d.answer_es = $('#js-answer-es').find('.fr-element').html();
		$d.answer_ua = $('#js-answer-ua').find('.fr-element').html();
		$d.answer_ru = $('#js-answer-ru').find('.fr-element').html();
		$d.answer_cn = $('#js-answer-cn').find('.fr-element').html();
		
		$.post('./handlers_a/ajax_faq.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление вопроса
	------------------------------------------------------- */
	$('#page').on('click', '.js-faq-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_faq.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Вопрос удален');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование партнера (с нами работают)
	------------------------------------------------------- */
	$('#js-partner').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Партнер добавлен', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.partner_link = $('#js-partner-link').val();
		$d.img = $('#js-img').data('value');

		$.post('./handlers_a/ajax_partners.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление партнера (с нами работают)
	------------------------------------------------------- */
	$('#page').on('click', '.js-partner-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_partners.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Партнер удален');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование языка
	------------------------------------------------------- */
	$('#js-language').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Язык добавлен', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.title_en = $('#js-title-en').val();
		$d.title_es = $('#js-title-es').val();
		$d.title_ua = $('#js-title-ua').val();
		$d.title_ru = $('#js-title-ru').val();
		$d.title_cn = $('#js-title-cn').val();
		
		$d.img = $('#js-img').data('value');

		$.post('./handlers_a/ajax_languages.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление языка
	------------------------------------------------------- */
	$('#page').on('click', '.js-language-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_languages.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Язык удален');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование страны
	------------------------------------------------------- */
	$('#js-country').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Страна добавлена', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.language = $('#js-language-select').data('value');
		
		$d.title_en = $('#js-title-en').val();
		$d.title_es = $('#js-title-es').val();
		$d.title_ua = $('#js-title-ua').val();
		$d.title_ru = $('#js-title-ru').val();
		$d.title_cn = $('#js-title-cn').val();
		
		$d.img = $('#js-img').data('value');
		$d.flag = $('#js-flag').data('value');

		$.post('./handlers_a/ajax_countries.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление страны
	------------------------------------------------------- */
	$('#page').on('click', '.js-country-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_countries.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Страна удалена');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование города
	------------------------------------------------------- */
	$('#js-city').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Город добавлен', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.country = $('#js-country-select').data('value');
		
		$d.title_en = $('#js-title-en').val();
		$d.title_es = $('#js-title-es').val();
		$d.title_ua = $('#js-title-ua').val();
		$d.title_ru = $('#js-title-ru').val();
		$d.title_cn = $('#js-title-cn').val();
		
		$d.img = $('#js-img').data('value');

		$.post('./handlers_a/ajax_cities.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление города
	------------------------------------------------------- */
	$('#page').on('click', '.js-city-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_cities.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Город удален');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование школы
	------------------------------------------------------- */
	$('#js-school').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Школа добавлена', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.city_id = $('#js-city-select').data('value');
		$d.meta_title = $('#js-meta-title').val();
		$d.meta_description = $('#js-meta-description').val();
		$d.meta_keywords = $('#js-meta-keywords').val();
		$d.title = $('#js-title').val();
						  
		$d.img_mini = $('#js-img-mini').data('value');
		$d.img = $('#js-img').data('value');
		
		$d.description_en = $('#js-description-en').val();
		$d.description_es = $('#js-description-es').val();
		$d.description_ua = $('#js-description-ua').val();
		$d.description_ru = $('#js-description-ru').val();
		$d.description_cn = $('#js-description-cn').val();
	
		$d.about_us_en = $('#js-about-us-en').find('.fr-element').html();
		$d.about_us_es = $('#js-about-us-es').find('.fr-element').html();
		$d.about_us_ua = $('#js-about-us-ua').find('.fr-element').html();
		$d.about_us_ru = $('#js-about-us-ru').find('.fr-element').html();
		$d.about_us_cn = $('#js-about-us-cn').find('.fr-element').html();
		
		$d.residence_en = $('#js-residence-en').find('.fr-element').html();
		$d.residence_es = $('#js-residence-es').find('.fr-element').html();
		$d.residence_ua = $('#js-residence-ua').find('.fr-element').html();
		$d.residence_ru = $('#js-residence-ru').find('.fr-element').html();
		$d.residence_cn = $('#js-residence-cn').find('.fr-element').html();
		
		$d.registration_fee = $('#js-registration-fee').val();
		$d.home_page = $('#js-home-page').data('value');
		$d.currency = $('#js-currency').data('value');
		$d.subcategory = $('#js-subcategory').data('value');
		
		$.post('./handlers_a/ajax_catalog.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление школы
	------------------------------------------------------- */
	$('#page').on('click', '.js-school-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_catalog.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Школа удалена');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование курса
	------------------------------------------------------- */
	$('#js-course').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Курс добавлен', //сообщение в случае успеха
			$price_str = '',
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.school = $('#js-school-select').data('value');
		
		$d.title_en = $('#js-title-en').val();
		$d.title_es = $('#js-title-es').val();
		$d.title_ua = $('#js-title-ua').val();
		$d.title_ru = $('#js-title-ru').val();
		$d.title_cn = $('#js-title-cn').val();
		
		$d.description_en = $('#js-description-en').val();
		$d.description_es = $('#js-description-es').val();
		$d.description_ua = $('#js-description-ua').val();
		$d.description_ru = $('#js-description-ru').val();
		$d.description_cn = $('#js-description-cn').val();
		
		$('.js-group').each(function(){
			
			var $this = $(this);
			var $weeks = $this.children('.js-weeks').val();
			var $price = $this.children('.js-price').val();
			
			if ($price_str !== '') { $price_str += ','; }
			
			$price_str += $weeks +':'+ $price;
		});
		
		
		$d.price = $price_str;

		$.post('./handlers_a/ajax_courses.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление курса
	------------------------------------------------------- */
	$('#page').on('click', '.js-course-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_courses.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Курс удален');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование жилья
	------------------------------------------------------- */
	$('#js-accommodation').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Жилье добавлено', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.school = $('#js-school-select').data('value');
		
		$d.title_en = $('#js-title-en').val();
		$d.title_es = $('#js-title-es').val();
		$d.title_ua = $('#js-title-ua').val();
		$d.title_ru = $('#js-title-ru').val();
		$d.title_cn = $('#js-title-cn').val();
		
		$d.price = $('#js-price').val();

		$.post('./handlers_a/ajax_accommodation.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление жилья
	------------------------------------------------------- */
	$('#page').on('click', '.js-accommodation-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_accommodation.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Жилье удалено');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование статьи на странице "полезная информация"
	------------------------------------------------------- */
	$('#js-info').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Статья добавлена', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.country = $('#js-country-select').data('value');
		
		$d.title_en = $('#js-title-en').val();
		$d.title_es = $('#js-title-es').val();
		$d.title_ua = $('#js-title-ua').val();
		$d.title_ru = $('#js-title-ru').val();
		$d.title_cn = $('#js-title-cn').val();
		
		$d.text_en = $('#js-text-en').find('.fr-element').html();
		$d.text_es = $('#js-text-es').find('.fr-element').html();
		$d.text_ua = $('#js-text-ua').find('.fr-element').html();
		$d.text_ru = $('#js-text-ru').find('.fr-element').html();
		$d.text_cn = $('#js-text-cn').find('.fr-element').html();

		$.post('./handlers_a/ajax_info.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление статьи на странице "полезная информация"
	------------------------------------------------------- */
	$('#page').on('click', '.js-info-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_info.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Статья удалена');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Добавление редактирование статьи на странице "новости"
	------------------------------------------------------- */
	$('#js-article').on('click', function(){
		var $d = $(this).data(), //передаем на сервер
			$success = 'Статья добавлена', //сообщение в случае успеха
			$data = {}; //ответ от сервера
		
		if ($d.action === 'edit') {
			$success = 'Изменения сохранены'; //сообщение в случае успеха
		}
		
		$d.title_en = $('#js-title-en').val();
		$d.title_es = $('#js-title-es').val();
		$d.title_ua = $('#js-title-ua').val();
		$d.title_ru = $('#js-title-ru').val();
		$d.title_cn = $('#js-title-cn').val();
		
		$d.text_en = $('#js-text-en').find('.fr-element').html();
		$d.text_es = $('#js-text-es').find('.fr-element').html();
		$d.text_ua = $('#js-text-ua').find('.fr-element').html();
		$d.text_ru = $('#js-text-ru').find('.fr-element').html();
		$d.text_cn = $('#js-text-cn').find('.fr-element').html();
		
		$d.img = $('#js-img').data('value');
		$d.img_big = $('#js-img-big').data('value');

		$.post('./handlers_a/ajax_article.php', $d,
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					popupInfo($success);
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});


	/* Удаление статьи на странице "новости"
	------------------------------------------------------- */
	$('#page').on('click', '.js-article-delete', function(){
		var $id = $(this).data('id'),
			$data = {}; //ответ от сервера

		$.post('./handlers_a/ajax_article.php',
			{
				action: 'delete',
				id: $id
			}, 
			function(data) { // Обработчик ответа от сервера

				$data = $.parseJSON(data);

				if ($data.name === 'success') {
					$t.row('#js-item'+ $id).remove().draw(false);
					popupInfo('Статья удалена');
				} else if ($data.name === 'error') {
					popupInfo($data.error, true);
				} else {
					popupInfo('Возникла ошибка', true);
				}
		});		
		return false;
	});
	
	
	/* Загрузка файлов
	------------------------------------------------------- */
	if ($('#upload').length) {
		var $file_u; //загружаемый файл в данный момент

		$('.js-file').on('click', function(){
			$form_data = $(this).data(); //параметры для отправки файлов
			$('#photoupload').click();
			return false;
		});


		$('#photoupload').change(function() {
			$file_u = this.files[0]; //загружаемый файл в данный момент
		});


		$('#upload').fileupload({
			change: function (e, data) {
				if (upFileValidate($file_u) === 'error') {
					popupInfo('Этот тип файла не поддерживается (разрешено JPG, PNG или GIF)', true);
					return false;
				}
			},

			add: function (e, data) {
				data.formData = $form_data; //параметры для отправки файлов
				var jqXHR = data.submit();
			},
			success: function (result, textStatus, jqXHR) {

				var $result = $.parseJSON(result);

				if ($result.code === '1') {
					popupInfo('Файл загружен');
					
					var $file = $result.file,
						$wrap = $($file.wrap),
						$src = '/img/'+ $file.folder +'/'+ $file.name;
					
					$wrap.data('value', $file.name);
					
					if ($wrap.children('img').length) {
						$wrap.children('img').attr('src', $src);
					} else {
						$wrap.prepend('<img src="'+ $src +'" alt="">');
					}
					
				} else if ($result.code === '2') {
					popupInfo('Этот тип файла не поддерживается (разрешено JPG, PNG или GIF)', true);
				} else {
					popupInfo('Возникла ошибка', true);	   
				}
			}
		});
	}
	
	
	/* Очистка загруженного файла
	------------------------------------------------------- */
	$('.js-reset-file').on('click', function(){
		var $wrap = $($(this).data('wrap'));
		$wrap.empty().data('value', '');
		return false;
	});
		
	
	if ($('.fs-editor').length) {
		
		var $folder = 'schools/description';
		
		if ($('#js-faq').length) {
			$folder = 'faq';
		}
		
		if ($('#js-page').length) {
			$folder = 'other_pages';
		}
		
		$('.fs-editor').froalaEditor({
			editorClass: 'froala-element',
			heightMin: 300,
			heightMax: 500,
			zIndex: 12,
			paragraphFormat: {
				N: 'Normal',
				H2: 'Heading 2'
			},		
			toolbarButtons: [
				'bold', 'italic', 'paragraphFormat', 'formatOL', 'formatUL',
				'insertLink', 'insertImage', 'insertVideo', 'undo', 'redo', 'selectAll'
			],
			htmlAllowedTags: ['p', 'h2', 'br', 'img', 'ol', 'ul', 'li', 'a', 'iframe'],
			linkInsertButtons: ['linkBack'],
			linkEditButtons: ['linkOpen', 'linkEdit', 'linkRemove'],
			imageEditButtons: ['imageReplace', 'imageRemove'],
			imageUploadURL: "./handlers_a/upload_img.php",
			imageUploadParams: {
				folder: $folder
			},
			videoInsertButtons: ['videoByURL', 'videoEmbed'],
			videoEditButtons: ['videoRemove'],
			videoResize: false,
			videoTextNear: false,
			language: 'ru'
		})	
		.on('froalaEditor.image.removed', function (e, editor, $img) {
			$.ajax({
				method: "POST",
				url: "./handlers_a/delete_img.php",
				data: {
					src: $img.attr('src')
				}
			});
		});
		
		
		$('.fs-editor').each(function(){
			$(this).children('div').last().remove();
		});
	}
	
	
	
});


function popupInfo($text, $error){
	'use strict';
	
	if ($('.popup-info').length) { 
		$('.popup-info').remove();
	}
		
	var $class = 'popup-info',
		$icon = 'fa fa-check-circle',
		$popupInfo = '';
		
	if ($error) {
		$class = 'popup-info popup-error';
		$icon = 'fa fa-exclamation-circle';
	}
		
	$popupInfo = $('<div><i class="'+ $icon +'"></i><p>'+ $text +'</p></div>')
	.addClass($class);
	$('#page').prepend($popupInfo);
	$('.popup-info').delay(7000).fadeOut(500);
}


/* Шаблон оценки товара
------------------------------------------------------- */
function templateRating($r) {
	'use strict';
	var $i = 1,
		$rating = '';
	
	while ($i <= 5) {
		
		var $class = ($r >= $i) ? 'filling' : '';
		
		$rating += '<svg class="'+ $class +' js-rating-point" data-value="'+ $i +'" width="24" height="22" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.888 8.21333C23.5832 7.18667 22.5166 6.45333 21.4499 6.30667L16.7262 5.72L14.7452 1.61333C14.1357 0.586667 13.069 0 12.0024 0C10.7834 0 9.7167 0.586667 9.25956 1.61333L7.27862 5.72L2.55486 6.30667C1.4882 6.45333 0.421544 7.18667 0.116785 8.21333C-0.187974 9.24 0.116785 10.4133 0.878682 11.1467L4.23103 14.2267L3.31676 18.6267C3.16438 19.6533 3.62151 20.8267 4.53579 21.4133C5.14531 21.8533 5.75483 22 6.36435 22C6.82148 22 7.27862 21.8533 7.73576 21.7067L11.85 19.5067L15.9643 21.7067C16.4214 22 16.8785 22 17.3357 22C17.9452 22 18.5547 21.8533 19.1642 21.4133C20.0785 20.8267 20.5356 19.6533 20.3833 18.6267L19.469 14.2267L22.8213 11.1467C23.888 10.4133 24.1928 9.24 23.888 8.21333ZM16.4214 13.2L17.6404 19.2133L12.0024 16.28L6.36435 19.2133L7.58338 13.2L3.012 9.09333L9.25956 8.36L12.0024 2.93333L14.7452 8.36L20.9928 9.09333L16.4214 13.2Z"></path></svg>';
		
		$i ++;
	}
	
	return $rating;
}


function templateRating2($r) {
	'use strict';
	var $i = 1,
		$rating = '';
	
	while ($i <= 5) {
		
		var $class = ($r >= $i) ? 'filling' : '';
		
		$rating += '<svg class="'+ $class +'" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9347 4.85333C13.7569 4.24667 13.1347 3.81333 12.5125 3.72667L9.75692 3.38L8.60138 0.953333C8.24583 0.346667 7.62361 0 7.00139 0C6.29029 0 5.66807 0.346667 5.40141 0.953333L4.24586 3.38L1.49033 3.72667C0.868117 3.81333 0.245901 4.24667 0.0681244 4.85333C-0.109652 5.46 0.0681245 6.15333 0.512565 6.58667L2.4681 8.40667L1.93477 11.0067C1.84589 11.6133 2.11255 12.3067 2.64588 12.6533C3.00143 12.9133 3.35698 13 3.71253 13C3.9792 13 4.24586 12.9133 4.51253 12.8267L6.91251 11.5267L9.31248 12.8267C9.57915 13 9.84581 13 10.1125 13C10.468 13 10.8236 12.9133 11.1791 12.6533C11.7125 12.3067 11.9791 11.6133 11.8902 11.0067L11.3569 8.40667L13.3124 6.58667C13.9347 6.15333 14.1124 5.46 13.9347 4.85333ZM9.57915 7.8L10.2903 11.3533L7.00139 9.62L3.71253 11.3533L4.42364 7.8L1.757 5.37333L5.40141 4.94L7.00139 1.73333L8.60138 4.94L12.2458 5.37333L9.57915 7.8Z"></path></svg>';

		$i ++;
	}
	
	return '<span class="rating">'+ $rating +'</span>';
}


function fromTextarea($str) {
	'use strict';
	$str = $.trim($str);
	$str = str_replace('\n\n\n', '\n\n', $str);

	var $lines = $str.split('\n\n');
	var $formated = [];
	$.each($lines, function(i, v) {
		$formated.push('<p>{1}</p>'.replace('{1}', v));
	});

	$str = $formated.join('');
	$str = $str.replace(/([^>])\n/g, '$1<br>');
	
	$str = str_replace('<p></p>', '', $str);
	$str = str_replace('<br></p>', '</p>', $str);
	return $str;
}


function toTextarea($str) {
	'use strict';
	$str = $str.replace(/\<p\>(.*?)\<\/p\>/gim, '$1\n\n');
	$str = $str.replace(/\<br\>/g, '\n');	
	$str = $.trim($($str).text());
	return $str;
}


/* Проверка файла перед загрузкой
------------------------------------------------------- */
function upFileValidate($file) {
	'use strict';
	
	var $allowed = ['jpg', 'jpeg', 'gif', 'png'], //список расширений файлов разрешенных для загрузки
		$parts = $file.name.split('.'), //разбиваем имя по разделителю "."
		$ext = ($parts.length > 1) ? $parts.pop() : ''; //расширение файла

	return ($.inArray($ext, $allowed) === -1) ? 'error' : '';
}


function str_replace(search, replace, subject, count) {
  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);
  if (count) {
    this.window[count] = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
      s[i] = (temp)
        .split(f[j])
        .join(repl);
      if (count && s[i] !== temp) {
        this.window[count] += (temp.length - s[i].length) / f[j].length;
      }
    }
  }
  return sa ? s : s[0];
}


function nl2br( str ) {	// Inserts HTML line breaks before all newlines in a string
	// 
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	return str.replace(/([^>])\n/g, '$1<br/>');
}