Ext.define('More.model.Ship', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'integer'
	}, {
		name : 'flagImage',
		type:  'string'
	}, {
		name : 'name',
		type:  'string'
	}, {
        name : 'nameLat',
        type:  'string'
    },{
		name : 'callSign',
		type:  'string'
	}, {
		name : 'imo',
		type:  'string'
	}, {
		name : 'mmsi',
		type:  'string'
	}],
	idProperty : 'id'
});