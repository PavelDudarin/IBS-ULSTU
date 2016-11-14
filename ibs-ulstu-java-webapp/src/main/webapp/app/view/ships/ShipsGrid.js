Ext.define('More.view.ships.ShipsGrid', {
    extend : 'Ext.grid.Panel',
    columnLines: true,
    autoScroll: true,
	alias: 'widget.shipsgrid',
	store: 'More.store.Ship',
    columns : [],
    initComponent: function(arguments){
        this.columns = [{
            header: 'Флаг',
            dataIndex: 'flagImage',
            sortable : false,
            align: 'center',
            renderer:function(v) {
                if (v)
                    return '<img src="data:image/png;base64,'+ v.toString() +'" />';
                else
                    return '-';
                },
        },{
            header: 'Наименование',
            dataIndex: 'name',
            flex:1
        },{
            header: 'Наименование (лат.)',
            dataIndex: 'nameLat',
            sortable : false,
            flex:1
        },{
            header: 'Позывной',
            dataIndex: 'callSign',
            sortable : false,
            flex:1
        },{
            header: 'IMO',
            dataIndex: 'imo',
            sortable : false,
            flex:1
        },{
            header: 'MMSI',
            dataIndex: 'mmsi',
            sortable : false,
            flex:1
        }];
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Быстрый поиск:',
                emptyText: 'Введите текст для поиска...',
                width: 300,
                itemId: 'querySearchShip',
            },{
                xtype: 'button',
                iconCls : 'ship-search',
                action: 'searchShip',
            }, '->',{
                xtype: 'button',
                text: 'Детализация',
                icon: 'resources/images/ships/preview-right.gif',
                name: 'detalizationButton',
                menu: [{
                    text: 'Справа',
                    name: 'right'
                },{
                    text: 'Снизу',
                    name: 'down'
                },{
                    text: 'Скрыто',
                    name: 'hidden'
                }]
            }]
        },{
            xtype: 'pagingtoolbar',
            store:this.store,
            dock: 'bottom',
            displayInfo: true
        }];
        this.callParent(arguments);
    }
});