import React from 'react'

function useSortingHook(items, config = null) {
    const [sortedField, setSortedField] = React.useState<any>(config);
    const sortedItems:any = React.useMemo(()=>{
        let sortedList:any = [...items];
        if(sortedField !== null) {
            sortedList.sort((a,b)=>{
                if(a[sortedField.key] < b[sortedField.key]) {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if(a[sortedField.key] > b[sortedField.key]) {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedList;
    }, [items, sortedField]);

    const sortField:any = (key) => {
        let direction = 'ascending';
        if(sortedField && sortedField.key === key && sortedField.direction === 'ascending') {
            direction = 'descending';
        }
        setSortedField({key, direction});
    }
    return {sortedList: sortedItems, sortField, sortedField}
}

export default useSortingHook;
