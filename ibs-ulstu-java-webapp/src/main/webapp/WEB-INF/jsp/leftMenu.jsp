<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<script>
	// флаг, показывающий, открыто левое меню или нет
	var leftMenuCollapsedFlag = false;
	/**
		функция открывает или скрывает левое меню
	*/
	function collapseExpandLeftMenu(imgDom){
		if (leftMenuCollapsedFlag === false){
			imgDom.parentElement.style.marginLeft = '-240px';
			imgDom.src = 'resources/images/leftMenu/expand_transparent.gif';
		}else{
			imgDom.parentElement.style.marginLeft = '0';
			imgDom.src = 'resources/images/leftMenu/collapse_transparent.gif';
		}
		leftMenuCollapsedFlag = !leftMenuCollapsedFlag;
		// немного ExtJS: пересчитаем размеры и состояние рутовой панели
		Ext.ComponentQuery.query('ships')[0].updateLayout();
	}
</script>

<div class="leftMenuCt">
	<img id="leftMenuCollapseIcon" src="resources/images/leftMenu/collapse_transparent.gif" onClick="collapseExpandLeftMenu(this)"/>
</div>