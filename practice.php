<?php
	$con = mysql_connect('localhost','root','') or die("数据库连接失败".mysql_error());
	mysql_set_charset('utf8',$con);
	$db = mysql_select_db('userinfo') or die('数据库连接失败'.mysql_error());
	mysql_query("insert into user_msg values(null,'a书','数据','失败',23,'shl')");

	// $name = $_POST['uname'];
	// $psw = $_POST['upsw'];
	// $web = $_POST['uweb'];
	// $age = (int)$_POST['uage'];
	// $birthday = $_POST['ubirthday'];

	// $query = 'select * from user_msg where uname="'.$name.'"';
	// $sele = mysql_query($query);
	// $rs = mysql_num_rows($sele);

	// if(!$rs){
	// 	$ins = "insert into user_msg(uname,upsw,uweb,uage,ubirthday) values('".$name."','".$psw."','".$web."',".$age.",'".$birthday."')";
	// 	echo $ins;
	// 	mysql_query($ins);
	// 	echo '<script>window.location.href="http://localhost/php_sql_practice/regist.html"</script>';
	// }
?>
