export const listSorter = (order, content) => {
    switch (order) {
        case 'ALPHABET':
            return content.sort((a, b) => {
                let title1 = a.title.toLowerCase(),
                    title2 = b.title.toLowerCase()
                if (title1 < title2) {
                    return -1
                }
                if (title1 > title2) {
                    return 1
                }
                return 0
            })
        case 'VIEWS':
            return content.sort((a, b) => {
                return b.views - a.views
            })
        case 'OLDEST':
            return content.sort((a, b) => {
                let date1 = a.date,
                    date2 = b.date
                if (date1 < date2) {
                    return -1
                }
                if (date1 > date2) {
                    return 1
                }
                return 0
            })
        case 'LATEST':
            return content.sort((a, b) => {
                let date1 = a.date,
                    date2 = b.date
                if (date1 < date2) {
                    return 1
                }
                if (date1 > date2) {
                    return -1
                }
                return 0
            })
        default:
            return content
    }
}