import historyNetworkSource from "../datasource/history"

// read a stopwatch history by id
const getHistory = async (id) => {
    return await historyNetworkSource.getHistory(id)
}

// read all stopwatch history
const getAllHistory = async (id) => {
    return await historyNetworkSource.getAllHistory(id)
}

// delete a stopwatch history by id
const deleteHistoryByID = async (id) => {
    return await historyNetworkSource.deleteHistoryByID(id)
}

// delete all stopwatch history by id
const deleteAllHistory = async () => {
    return await historyNetworkSource.deleteAllHistory()
}

export default {
    getHistory,
    deleteHistoryByID,
    deleteAllHistory,
    getAllHistory
}