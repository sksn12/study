# study
## html

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="NewFile.css">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body class="total">
	<header class="header">
		<nav class="nav">
		 	<p class="title">youngman kim</p>
		 	<div class="nav_right">
		 		<p class="home">home</p>
		 		<p class="about">about</p>
		 		<p class="contact">contact</p>
		 		
		 	</div>
		 </nav>
	</header>
	<div class="main">
		<div class="container">
		<img src="photo-boards-25QCezs8-oo-unsplash.jpg" class="profile"/>
		<div class="info">
			<p class="name">김영만</p>
			<p class="year">1998.02.02</p>
		</div>
		<img src="moises-rodriguez-b1fuDczpg9c-unsplash.jpg" class="img">
		</div>
		<div class="info_container">
			<div class="info_content">
				<p class="content_title">안녕하세요 싸피8기 대전6반 김영만입니다.</p>
				<p class="content">저는 영화보는것을 좋아하고 음악듣는것을 좋아합니다.</p>
			</div>
		</div>
		
		<footer class="footer">
			<div class="footer_content">123</div>
		</footer>
	</div>
</body>
</html>


## css
@charset "UTF-8";

.total{
	width:100%;
	height:100vh;
	margin:0;
}

.header{
	width:100%;
	background-color:#3c3c3c;
	height:60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.nav{
	width:60%;
	height:100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.title{
	font-size: 22px;
	color: white;
	
}

.nav_right{
	display: flex;
	flex-direction: row;
}

.home{
	margin-right: 5px;
	font-size: 18px;
	color: white;
	cursor: pointer;
	height:100%;
}
.about{
	margin-right: 5px;
	font-size: 18px;
	color: white;
	cursor: pointer;
}
.contact{
	margin-right: 5px;
	font-size: 18px;
	color: white;
	cursor: pointer;
}

.container{
	width:100%;
	height: 450px;
	background-color:#3c3c3c;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	
}
.profile{
	width: 150px;
	height: 150px;
	background-color:#3c3c3c;
	position: absolute;
	z-index: 1;
	border-radius: 50%; 
	display: flex;
	justify-content: center;
	align-items: center;
	color:white;
}


.img{
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
}

.info{
	width: 100px;
	height: 100px; 
	position: absolute;
	z-index: 1;
	display: flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;
	margin-top: 250px;
}

.name{
	color:white;
	margin:0;
	font-size: 20px;
}
.year{
	color:white;
	margin-top: 10px;
}

.info_container{
	width: 100%;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.info_content{
	width: 50%;
	height: 80%;
	display: flex;
	align-items: center;
	flex-direction:column;
	justify-content: center;
}

.content_title{
	font-size:28px;
	font-weight: 600;
}

.content{
	font-size:16px;
}

.footer{
	width: 100%;
	height: 140px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color:#3c3c3c;
}
.footer_content{
	width: 50%;
	height: 80%
}
