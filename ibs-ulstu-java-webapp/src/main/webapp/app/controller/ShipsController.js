Ext.define('More.controller.ShipsController', {
    extend: 'Ext.app.Controller',
	views: ['More.view.ships.Main'],
	stores: ['More.store.Ship'],
	initialized : false,
	getShipsGrid: function(){
        return Ext.ComponentQuery.query('shipsgrid')[0];
    },
    getQuerySearchShip: function(){
        return Ext.ComponentQuery.query('#querySearchShip')[0];
    },
    getSearchForm: function(){
        return Ext.ComponentQuery.query('searchform')[0];
    },
    getDetalizationPanel: function(){
    	return Ext.ComponentQuery.query('panel [name=detalizationPanel]')[0];
    },
	init : function() {
        this.control({
            'shipsgrid button[action=searchShip]' : {
                click : this.onBtnSearchShip
            },
            'shipsgrid' : {
                cellclick : this.oncellclick
            },
            'searchform button[action=advancedSearch]' : {
                click : this.onBtnAdvancedSearch
            },
            'searchform button[action=clearForm]' : {
                click : this.onBtnClearSearchForm
            },
            'button[name=detalizationButton] menuitem' : {
                click: this.onDetalizationPositionChanged
            }
        });
        this.initialized = true;
    	},
    onBtnSearchShip : function() {
        var query = this.getQuerySearchShip().getValue();
        this.getShipsGrid().getStore().filter('name',query);
    },
    onDetalizationPositionChanged: function(menuitem,e,eOpts){
    	var detalizationPosition = menuitem.name;
    	if (detalizationPosition === 'hidden')
    		// Скрываем панель детализации
    		this.getDetalizationPanel().hide();
    	else{
    		// Сначала нужно удостовериться, что панель детализации не скрыта
    		if (this.getDetalizationPanel().isHidden())
    			this.getDetalizationPanel().show();
    		// Далее нужно раскрыть панель, так как при инициалиации формы она и ее элементы не отрендерины - это может привести к ошибкам работы с DOM (обращение к еще несуществующим эл-там)
    		this.getDetalizationPanel().expand(false);
    		// Далее непосредственно изменение региона панели в рамках Border Layout
    		this.getDetalizationPanel().setRegion(detalizationPosition==='down'?'south':'east');
    	}
    },
    oncellclick : function(view, cell, cellIndex, record, row, rowIndex, e ){
        this.showInfo(record);
    },
    showInfo : function(record){
    	// Передаем GET-параметр на карточку детализации судна
    	this.getDetalizationPanel().el.selectNode('iframe').src = 'shipDetails?shipId='+record.getId();
    	// Раскрываем карточку, если она еще не раскрыта
    	this.getDetalizationPanel().expand();
    		
    },
    onBtnClearSearchForm : function(){
        this.getSearchForm().reset();
    },
    onBtnAdvancedSearch : function(){
        var values = this.getSearchForm().getValues();
        this.getShipsGrid().getStore().filter([{
                property : 'name',
                value    : values.name
            },{
                property : 'nameLat',
                value    : values.nameLat
            },{
                property : 'callSign',
                value    : values.callSign
            },{
                property : 'imo',
                value    : values.imo
            },{
                property : 'mmsi',
                value    : values.mmsi
            }]);
     }
});
