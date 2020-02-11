export class BasicDataTableFunctions {
    sortRecord(key, sortorder, sortArray) {
        if (sortorder)
            return sortArray.sort((a, b) => (a[key] < b[key] ? 1 : -1))
        else
            return sortArray.sort((a, b) => (a[key] > b[key] ? 1 : -1))
    }
    searchRecord(searchText, searcArray) {
        if (searchText === '')
            return searcArray
        else
            return this.filterTransform(searchText.toLowerCase(), searcArray)
    }
    filterTransform(searchText, searcArray) {
        if (searchText === undefined || searchText === '') return searcArray
        return searcArray.filter(searchRecords => {
            let flag
            for (let record in searchRecords) {
                flag = false
                if (searchRecords[record])
                    flag = searchRecords[record].toString().toLowerCase().indexOf(searchText) > -1
                if (flag)
                    break
            }
            return flag
        })
    }
}