<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@include file="init.jsp"%>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">	
	<title><%=titleCabinetName%> - Реестр судов</title>
	<%@include  file="imports.jsp"%>
	<script type="application/javascript">
		Ext.application({
			name: 'More',
			extend: 'Ext.app.Application',
			controllers: ['ShipsController'],
			launch: function(){
				Ext.create('More.view.ships.Main',{
					renderTo: 'mainDiv'
				});
                }
		});
</script>
</head>
<body>
	<%@include file="header.jsp"%>
	<%@include file="leftMenu.jsp"%>	
	<div id="mainDiv"></div>
</body>
</html>