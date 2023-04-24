<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Curriculum</title>
	<style>

      body{

      	background:-webkit-radial-gradient(center,circle,rgba(61, 49, 205),rgb(84,36,8,0.6));
      }

      div{
      
      	border-radius:10px;
      	background:-webkit-radial-gradient(center,circle,rgba(8,36,39,0.6),rgba(237, 14, 26,0.2));
      	padding:25px;
      	padding-bottom: 85px;
      	width:65%;
      	height: 55%;
      	margin:15px auto;
      }

      img{
      background-size:cover; 
      background-position:center;
      border-radius: 50%;
      float: left;
      margin-right:75px;
      margin-left: 20px;
      }
      legend{
      	font-size: 15px;
      	background:rgb(57, 7, 256);
      	border-radius:20px;
      	width:25%;
      	height:20px;
      	padding: 12px;
      }

      legend:hover{
       background:rgb();
      }
    
    fieldset{
    	border-radius:20px;
         animation-name:cambiarColorr;
         animation-duration:7s;
         animation-delay:0.5s;
         animation-iteration-count:infinite;
         animation: direction; normal;/*Sirve para que  Empieze de cero 0-100*/
         animation-fill-mode:forwards

         animation-timing-function:ease-in-out;
         /*comienza la animacion lentamente*/ 
    	font-size: 20px;
    	margin-bottom: 20px;
    }

    fieldset:hover{
    	color: cornflowerblue;
    }

    @keyframes cambiarColorr{
	0%{
     background:-webkit-radial-gradient(center,circle,rgba(23, 148, 26),rgb(237, 148,2));
    opacity: 0.6;
	}
	90%{
		background:rgb(8,36,39);	
	}
}
#margen-arriba{

	margin-bottom: 50%;
}

a{
	text-decoration: none;
	background: rgb(7);
	border-radius: 20px;
	margin-left: 60px;
	margin-bottom: 10px;
	width: 80px;
	height: 100px;
	padding: 10px;
}
a:hover{
	color: white;
	background:rgb(57, 7, 256);
}
#dd{
	margin-top: 25px;

}
#titulo{
 margin-top:30px;
 font-size: 20px;
 margin-bottom: 70px;
 background: transparent;
 width: 20px;
 height: 10px;
}
	</style>
</head>
<!--------------------------------------------------------------->

<body>

	<div>
		
		<img src="photo_2023-04-22_20-31-19.jpg" alt="Pefil" width="150" height="150">

		<div id="titulo">

		<h1 id="margen-arriba">Omar Pimentel</h1>

         </div>

		<a  href="https://www.facebook.com/OmarE3n/">Mi Facebook</a>
		<a href="">Mi Instagran</a>
		<a href="https://t.me/TheQuab">Mi Telegram</a>
		<a href="">Mi whatsapp</a>
<!---------------------------------------------------------------->
		<fieldset id="dd">
			<legend><strong>Datos Personales</strong></legend>
			<ul>
				<li><strong>Direccion: </strong>Direccion: San Sebastian de los reyes. Edo. Aragua. Calle la Pista Sector El polvero</li>
		         <li><strong>Telefono: </strong>+58414-224-5294</li>
				<li><strong>Cedula: </strong>28.050.922</li>
				<li><strong>Fecha de nacimiento: </strong>  23/06/2001</li>
				<li><strong>Email: </strong> archpaladin@gmail.com</li>
			</ul>
		</fieldset>
<!----------------------------------------------------------------->
		<fieldset>
		<legend><strong>Formacion Academica</strong></legend>  
		<ul>
		<li><strong>Primaria: </strong>E.B.E. "Andres Rodriguez Ramirez"</li>
		<li><strong>Secundaria: </strong>E.B.E. "Andres Rodriguez Ramirez"</li>
		<li><strong>Educacion Superior: </strong> U.N.E.R.G. San Juan de los Morros, Area de Ingenieria en Sistemas. Ing. Informatica</li>
        <li><strong>Curso: </strong>Developer Junior en Javascript</li> 
		</ul>
		</fieldset>
<!------------------------------------------------------------------>
		<fieldset>
		<legend><strong>Experiencia Laboral</strong></legend>
		<ul>
			<li><span>Vigilante Turno-nocturno Granja H&H Puro Lomo<span></li>
			<li><span>Conductor de Rutas Publicas C&C Aragua</span></li>
			<li><span>Desarrollador Web en Hostinger</span></li>
			
		</ul> 
		</fieldset>
<!------------------------------------------------------------------>
	  <fieldset>
	  <legend><strong>Habilidades y Destrezas</strong></legend> 
	  <ul>
	  	<li>Comunicación</li>
	  	<li>Liderazgo</li>
	  	<li>Resolución de problemas</li>
	  	<li>Adaptabilidad</li>
	  	<li>Negociación</li>
	  	<li>Creatividad</li>
	  </ul>
	  </fieldset>
	</div>
<!----------------------------------------------------------------->
</body>

</html>
