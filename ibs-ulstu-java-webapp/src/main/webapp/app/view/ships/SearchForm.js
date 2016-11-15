Ext.define('More.view.ships.SearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchform',
    layout: 'anchor',
    //bodyPadding: 10,
    defaults: {
        anchor: '100%',
        padding: 15,
        enableKeyEvents: true
        },
    initComponent: function(arguments){
        this.items =  [{
            xtype: 'textfield',
            name : 'name',
            fieldLabel: 'Наименование',
            emptyText: 'Введите наименование  для поиска...'
        },{
            xtype: 'textfield',
            name : 'nameLat',
            fieldLabel: 'Наименование (лат.)',
            emptyText: 'Введите наименование лат.  для поиска...',
            vtype:'alpha'
        },{
            xtype: 'textfield',
            name : 'callSign',
            fieldLabel: 'Позывной',
            emptyText: 'Введите позывной  для поиска...'
        },{
            xtype: 'numberfield',
            name : 'imo',
            fieldLabel: 'IMO',
            minValue: 1,
            emptyText: 'Введите IMO для поиска...'
        },{
            xtype: 'numberfield',
            name : 'mmsi',
            fieldLabel: 'MMSI',
            emptyText: 'Введите MMSI для поиска...',
            minValue: 1
           }];
        this.dockedItems = [{
            xtype:'toolbar',
            docked: 'top',
            items: ['->',{
                text: 'Найти',
                action: 'advancedSearch',
                iconCls : 'ship-search'
                },{
                text: 'Очистить',
                action: 'clearForm',
                iconCls : 'ship-clear'
                }]
        }];
        this.callParent(arguments);
    }

});