import moment from 'moment';

Array.prototype.customGroupByDate = function() {
    return this.reduce( function(key, item){
        let date = moment(item.created_at).format('Y-M-D')
        key[date] = key[date] || [];
        key[date].push(item);
        return key
    }, {})
}