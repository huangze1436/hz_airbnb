import hyRequest from ".."

export function getHomeGoodPriceDate() {
    return hyRequest.get({
        url: '/home/goodprice'
    })
}