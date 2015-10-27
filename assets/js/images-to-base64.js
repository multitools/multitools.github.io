<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<title>Image to base64 - MultiTools Dozens of tools in same place</title>
		<meta name="description" content="You can publish your banner for free, discover interesting sites,
			access offers and companies.">
		<meta name="keywords" content="Banner,Publish Banner free,Banner Free,Publish your site,Publish your
			Company,access offer,Publish affiliate banner.">
		<meta name="robots" content="index, follow">
		<meta name="author" content="Ricardo Henrique">
		<meta name="reply-to" content="mybannersreceiver@gmail.com">
		<link rel="icon" href="assets/images/MultiTools32x32.png" sizes="32x32">
		<meta name="twitter:card" content="summary">
		<meta name="twitter:site" content="@mybanners">
		<meta name="twitter:creator" content="@ricardohenriq">
		<meta property="og:title" content="Publish your Banner to World">
		<meta property="og:description" content="You can publish your banner for free, discover interesting sites,
			access offers and companies.">
		<meta property="og:url" content="http://mybanners.github.io/">
		<meta property="og:image" content="http://mybanners.github.io/assets/images/Leprechaun150x150.gif">
		<meta property="og:type" content="website">
		<meta property="og:site_name" content="MyBanners - Publish your Banner to World">
		<link rel="stylesheet" href="library/Bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/css/main.css">
		<script defer src="library/jquery-1.11.1/jquery-1.11.1.min.js"></script>
		<script defer src="library/Bootstrap/js/bootstrap.min.js"></script>
		<script defer src="assets/js/main.js"></script>
	</head>
	<body>
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">MultiTools
						<img src="assets/images/MultiTools32x32.png" style="display:inline-block;">
					</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li><a href="index.html">Words and Texts</a></li>
						<li><a href="hashes.html">Hashes</a></li>
						<li><a href="passwords.html">Generate Passwords</a></li>
						<li><a href="my-ip.html">Check your IP</a></li>
						<li class="dropdown active">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Edit Images <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="colored-to-black-white.html">Color to Black & White</a></li>
								<li class="active"><a href="images-to-base64.html">Convert images to Base64<span class="sr-only">(current)</span></a></li>
							 </ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MORE TOOLS <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="colorpick.html">Colorpick</a></li>
								<li><a href="world-time.html">World Time</a></li>
								<li><a href="ascii-art.html">ASCII Art</a></li>
								<li><a href="lorem-ipsum.html">Lorem Ipsum</a></li>
							 </ul>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#">DONATE</a></li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">INFORMATIONS <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="#">Contact</a></li>
								<li><a href="#">TOS</a></li>
								<li><a href="#">FAQ</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="wrapper">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 span7 text-center">
						<div class="block block">
							<a href="#">
								<img src="temp/728x90black.png">
							</a>
						</div>
						<div class="block block">
							<h1 class="title">
								Converta uma imagem de seu computador para base64.
							</h1>
							<h2>
								Simplesmente envie um arquivo pelo botão escolher arquivo e automáticamente será gerada 
								uma representação da imagem em base64 na caixa de texto abaixo. (Convertendo para base64 
								o resultado terá tamanho 37% maior que o original).
							</h2>
						</div>
						<div class="block block">
							<input type='file' id="asd" class="block">
							<img id="img" src="" style="max-width:100%" class="block">
							<textarea rows="20" id="base" class="block"></textarea>
							<div class="block">
								<button class="btn gray" onclick="copyToClipboard('base')">Copy to Clipboard</button>
							</div>
						</div>
						<div class="block block">
							<a href="#">
								<img src="temp/728x90black.png">
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="text-center">
			My Banners - 2015. All rights reserved
		</footer>
	</body>
</html>