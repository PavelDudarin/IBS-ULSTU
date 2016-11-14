Ext.define('More.store.Ship', {
	extend: 'Ext.data.Store',
	autoLoad : true,
	model: 'More.model.Ship',
	pageSize: 10,
	proxy: {
        type: 'ajax',
        url: 'app/testdata/ships.json',
            reader: {
                type: 'json',
                root: 'list'
                }
            }
});