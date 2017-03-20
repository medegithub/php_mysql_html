<?php
	$con = mysql_connect('localhost','root','') or die("数据库连接失败".mysql_error());
	mysql_set_charset('utf8',$con);
	$db = mysql_select_db('userinfo') or die('数据库连接失败'.mysql_error());
	
	if(!empty($_POST['uname'])){
		$query = "select * from user_msg where uname='".$_POST['uname']."'";
		$name = mysql_query($query);

		if(mysql_num_rows($name)){
			echo "<script>window.location.href=\"http://192.168.1.36/a/php_sql_practice/regist.html\";if(typeof (Storage) != undefined) localStorage.setItem('result','registed');</script>";
		}else{
			$newuser = "insert into user_msg(uname,upsw,uweb,uage,ubirthday) values('".$_POST['uname']."','".$_POST['upsw']."','".$_POST['uweb']."','".$_POST['uage']."','".$_POST['ubirthday']."')";
			mysql_query($newuser);
			echo "<script>window.location.href=\"http://192.168.1.36/a/php_sql_practice/regist.html\";if(typeof (Storage) != undefined) localStorage.setItem('result','success');</script>";
		}
	}else{
		echo "<script>window.location.href=\"http://192.168.1.36/a/php_sql_practice/regist.html\";if(typeof (Storage) != undefined) localStorage.setItem('result','fail');</script>";
	}
?>
