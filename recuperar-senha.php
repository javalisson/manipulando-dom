<?php
$usuario = isset($_POST["usuario"]) ? $_POST["usuario"] : "";
$senha = isset($_POST["senha"]) ? $_POST["senha"] : "";
?>
<!DOCTYPE html>
<html>
<head>
	<title>Recuperar senha</title>
	<meta charset="utf-8">
</head>
<body>
	<h1>Problemas com sua senha?</h1>
	<p>Os valores de usuário e senha que você forneceu são:</p>
	<p>Usuário: <code><?=$usuario?></code><br />
	Senha: <code><?=$senha?></code></p>
</body>
</html>