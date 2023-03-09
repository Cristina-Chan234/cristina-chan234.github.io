<!DOCTYPE html">


<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Login para 1 usuario</title>

</head>



<body>


<SCRIPT  language=JavaScript> 

function go(){

    


if (document.form.password.value=='CHUC04' && document.form.login.value=='usuario1'){ 
        document.form.submit(); 

    

if (document.form.password.value=='CHAN12' && document.form.login.value=='usuario2'){ 
        document.form.submit(); 

    

if (document.form.password.value=='SUNZA18' && document.form.login.value=='usuario3'){ 
        document.form.submit(); 

  


  } 
   

 else{ 
         
alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
  
 

  }
 

} 



</SCRIPT> 
<FORM name=form action="secciones.HTML">




<P>Usuario:  <INPUT type=text name="user">

<P>Contraseña: <INPUT type=password name="password"> 

		
<INPUT type=text name="go"  placelholder="Ingresar"> 


<INPUT onclick=go() type=button value=Acceder>




</FORM> 

</body>

</html>