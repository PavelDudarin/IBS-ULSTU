Ext.define('More.view.ships.Main', {
    extend: 'Ext.Panel',
    xtype: 'ships',
    requires: ['More.view.ships.ShipsGrid','More.view.ships.SearchForm'],
    layout: 'border',
    defaults: {
    	split: true,
    },
    height: 670,
    items: [{
    	title: 'Список судов',
    	region: 'center',
    	xtype: 'shipsgrid',
    },{
        title: 'Расширенный поиск',
        region:'west',
        xtype: 'searchform',
        width: 400,
        collapsible: true,
        collapsed: true
    },{
    	title: 'Карточка детализации',
    	region: 'east',
    	collapsible: true,
    	collapsed: true,
    	width: 750,
    	height: 300,
    	name: 'detalizationPanel',
    	html: '<iframe src="shipDetails" style="width:100%; height:100%;border:none;"/>'
    }]
});