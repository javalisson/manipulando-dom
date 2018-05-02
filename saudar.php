<?php
$nome = isset($_GET["nome"]) ? $_GET["nome"] : "Mundo";
?>
<!DOCTYPE html>
<html>
<head>
	<title>Saudações!</title>
	<meta charset="utf-8">
</head>
<body>
	<h1>Olá, <?=$nome?>!</h1>
</body>
</html>