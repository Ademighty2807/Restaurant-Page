import createRestaurantHomepage from './restaurant'
import createTabs from './tabs'

function initialLoad() {
    createTabs()
    createRestaurantHomepage();
}

export default initialLoad;