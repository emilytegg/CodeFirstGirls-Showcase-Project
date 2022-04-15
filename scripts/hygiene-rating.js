function attachEvents() {
    getFoodRatings();
}

async function getFoodRatings() {
    const twelve = await getEstablishmentById(342769);
    const mightyWiener = await getEstablishmentById(830288);
    const bk = await getEstablishmentById(342728);
    const babooJi = await getEstablishmentById(342234);
    const plantHustler = await getEstablishmentById(463041);
    const sevenBone = await getEstablishmentById(708982);

    setFoodRatings([twelve, bk, mightyWiener, babooJi, plantHustler, sevenBone])
}

async function getEstablishmentById(id) {
    var res = await window.fetch(`https://api.ratings.food.gov.uk/Establishments/${id}`, {
        headers: {
            "x-api-version": 2,
        },
    })

    return await res.json()
}

function setFoodRatings(restaraunts) {
    let cards = document.querySelectorAll("[data-restauraunt]")
    let ratings = restaraunts.map((res) => ({ "name": res.BusinessName, "url": getRatingPicture(res.RatingValue), "foodUrl": getFoodUrl(res.FHRSID) }))

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i]
        let ratingIndex = ratings.findIndex(rat => rat.name === card.getAttribute("data-restauraunt"));
        if (ratingIndex > -1) {
            let rating = ratings[ratingIndex]
            card.innerHTML += `<div class=\"text-center mt-2\"><a href=\"${rating.foodUrl}"\"><img src=\"${rating.url}\" /></a></div>`
        }
    }
}

function getRatingPicture(score) {
    return `https://ratings.food.gov.uk/images/scores/medium/fhrs_${score}_en-gb.JPG`
}

function getFoodUrl(id) {
    return `https://ratings.food.gov.uk/business/en-GB/${id}/`
}

document.addEventListener('DOMContentLoaded', attachEvents)