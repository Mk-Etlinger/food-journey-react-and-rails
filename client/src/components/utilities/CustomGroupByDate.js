import moment from 'moment';

export const customGroupByDate = ( array ) => {
    return array.reduce(( key, item ) => {
        let date = moment( item.created_at ).format( 'Y-M-D' )
        key[ date ] = key[ date ] || [];
        key[ date ].push( item );
        return key
    }, {})
}

// Don't use this!
// Array.prototype.customGroupByDate = function() {
//     return this.reduce( function(key, item){
//         let date = moment(item.created_at).format('Y-M-D')
//         key[date] = key[date] || [];
//         key[date].push(item);
//         return key
//     }, {})
// }