fileref=document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", 'prototype.js');
document.getElementsByTagName("head")[0].appendChild(fileref);

function init() {
	if($('question')){
		$('question').setStyle({'visibility' : 'visible'});
		$('answer').observe('click', function(){
			$('question').show();
			$('answer').hide();
		});
		$('question').observe('click', function(){
			$('answer').show();
			$('question').hide();
		});
		
		var a_h = $('a_text').getHeight();
		var a_td = $('a_text').up('td');
		var aw_h = a_td.getHeight();

		var fnt = 48;
		var cnt = 0;
		while(a_h < aw_h){
			fnt = fnt*1.1;
			$('a_text').setStyle({'font-size': fnt+'px'});
			var a_h = $('a_text').getHeight();
			cnt++;
			if(cnt>50){ break; }
		}
		$('a_text').setStyle({'font-size': (fnt*.75)+'px'});
		
		var q_h = $('q_text').getHeight();
		var q_td = $('q_text').up('td');
		var qw_h = q_td.getHeight();

		var fnt = 48;
		var cnt = 0;
		while(q_h < qw_h){
			fnt = fnt*1.1;
			$('q_text').setStyle({'font-size': fnt+'px'});
			var q_h = $('q_text').getHeight();
			cnt++;
			if(cnt>50){ break; }
		}
		$('q_text').setStyle({'font-size': (fnt*.75)+'px'});
		$('question').hide();
		
	}
	if($('board_page')){
	}
}
window.onload = init;
