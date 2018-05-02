(function () {
	var botao_trocar_mensagem = document.getElementById('btn_alterar_mensagem');
	var botao_adicionar_conteudo = document.getElementById('btn_adicionar_conteudo');
	var el_mensagem = document.getElementById('msg_saudacao');
	var novo_conteudo = document.getElementById('novo_conteudo');

	botao_trocar_mensagem.onclick = function () {
		console.log('click!');
		var nova_mensagem = prompt('Digite a nova mensagem') || "Olá, Mundo!";
		el_mensagem.innerHTML = nova_mensagem;
		alert('Mensagem alterada com sucesso!');
	};

	botao_adicionar_conteudo.onclick = function () {
		var texto_novo_conteudo = prompt('Digite o conteúdo') || "Texto padrão";
		var p = document.createElement("P");
		p.innerHTML = texto_novo_conteudo;
		novo_conteudo.appendChild(p);	
	}
})();

(function () {
	$(document).ready(function () {
		$('#btn_alterar_mensagem_jq').click(function() {
			console.log('click jq!');
			var nova_mensagem = prompt('Digite a nova mensagem') || "Olá, Mundo!";
			$('#msg_saudacao_jq').html(nova_mensagem);
			alert('Mensagem alterada com sucesso!');		
		});

		$('#btn_adicionar_conteudo_jq').click(function () {
			var texto_novo_conteudo = prompt('Digite o conteúdo') || "Texto padrão";
			$('#novo_conteudo_jq').append('<p>' + texto_novo_conteudo + '</p>');
		});
	});

	$('#btn_carregar_msg_assinc').click(function () {
		var nome = $('#nome-saudacao').val();
		$.ajax({
			// url: 'mensagem_assincrona.txt',
			url: 'saudacao.json.php',
			method: 'GET',
			data: {
				nome: nome
			},
			success: function(resultado) {
				// $('#msg_assincrona').html(resultado);
				$('#msg_assincrona').html(resultado.saudacao);
			}
		});
	});
})();