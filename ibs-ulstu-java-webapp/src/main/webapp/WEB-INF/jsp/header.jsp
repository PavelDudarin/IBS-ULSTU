<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<script>
	function goToLk(){
		window.location = 'lk';
	}
	
	var openInsctructions = function(){
		window.open('api/rest/documents/instructions/pdf');
	}
	
	var logout = function(){
		var result = confirm('Вы действительно хотите выйти из системы?');
		alert('Пользователь '+(!result?'не ':'')+'инициировал действие выхода из системы');
	}
	
	/**
		блок функция для подмены иконок локали =)
	*/
	function i18nSwitch(locale){
		var i18nRuDom = document.getElementById('i18nRu');
		var i18nEnDom = document.getElementById('i18nEn');
		i18nRuDom.name=locale==='ru_RU'?'ru_RU':'en_US';
		i18nEnDom.name=locale==='ru_RU'?'en_US':'ru_RU';
	}	
	function i18nRu(){
		i18nSwitch('ru_RU');
	}
	function i18nEn(){
		i18nSwitch('en_US');
	}
	
</script>

<div class="headerCt">
	<div class="logo"></div>
	<div class="pageTitle">Веб-приложение IBS-УлГТУ. Реестр судов</div>
	<div class="rightCt">
		<a href="#" class="portalActions" name="lk" title="Перейти в личный кабинет" onClick="goToLk()"></a>
		<a href="#" class="portalActions" name="instruction" title="Инструкция пользователя (PDF)" onClick="openInsctructions()"></a>
		<a href="#" class="portalActions" name="logout" title="Выйти из системы" onCLick="logout()"></a>
		<a href="#" name="ru_RU" id="i18nRu" title="Переключить язык интерфейса на Русский" onMouseOver="i18nRu()"></a>
		<a href="#" name="en_US" id="i18nEn" title="Переключить язык интерфейса на Английский" onMouseOver="i18nEn()"></a>
	</div>	
</div>