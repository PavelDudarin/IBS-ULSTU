<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@include file="init.jsp"%>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title><%=titleCabinetName%> - Данные по судну</title>
	<style type="text/css">
		@import url(resources/css/shipDetails.css);
	</style>
	<script type="text/javascript">
		var openImg = function(div) {
			window.open(div.getAttribute('src'), '_blank');
		};				
	</script>
</head>
<body>
	<div class="caption">ЯМАЛ</div>
	<div class="header">			
			<div class="ship-image">
				<div>
					<img id="ship-image" onclick="openImg(this);" src="resources/images/ships/testData/yamal.jpg"/>
				</div>
			</div>  	
    	<div style="display: inline-block;">
    		<ul>
    			<li><a href="#">Данные СМС "Виктория"</a></li>
	    		<li><a href="#">Данные Коспас-Сарсат</a></li>
	    		<li><a href="#">Данные Морского Регистра</a></li>
	    		<li><a href="#">Данные Речного Регистра</a></li>  
	    		<li><a href="#">Данные Реестра</a></li>
	    		<li><a href="#">Инспекции судна в иностранных портах</a></li>
	    		<li><a href="#">Техническое состояние судна</a></li>  			    		
    		</ul>
    	</div>    	
    </div>
    <div class="section" style="clear: both; margin-top: 5px;">
        <div class="mss-cs-alert-row">
    		<div class="mss-sc-alert-icon-danger-cargo"></div><span>Судно с опасным грузом</span>
    	</div>    		
    	<div class="mss-cs-alert-row">
    		<div class="mss-sc-alert-icon-target-factor"></div><span>Судно имет высокий целевой фактор</span>
    	</div>
		
    	<div class="mss-cs-alert-row">
    		<div class="mss-sc-alert-icon-alert"></div><span>Судно с сигналом SSAS</span>
    	</div>
    </div>
    <div class="section">
		<div class="header tableHeader">1. Общие сведения</div>
		<table class="table">
			<tbody>
				<tr><td>Название</td><td>ЯМАЛ / YAMAL</td></tr>
				<tr><td>IMO</td><td>9077549</td></tr>
				<tr><td>MMSI</td><td>273132400</td></tr>
				<tr><td>Номер РРР</td><td>—</td></tr>
				<tr><td>Номер РМРС</td><td>863420</td></tr>
				<tr><td>Флаг</td><td>Российская Федерация / RUS</td></tr>
			</tbody>
		</table>
	</div>			
	<div class="section">
		<div class="header tableHeader">2. Местоположение</div>
		<table class="table">		
			<tbody>
				<tr><td>Дата позиции</td><td>16.10.2016 12:40:43 UTC</td></tr>
				<tr><td>Источник</td><td>АИС</td></tr>
				<tr><td>Координаты</td><td>69° 02.711' N - 33° 04.314' E</td></tr>
				<tr><td>Скорость, узл</td><td>0.0</td></tr>
				<tr><td>Курс, °</td><td>—</td></tr>
			</tbody>
		</table>
	</div>
</body>
</html>