export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';


const nameInput = document.getElementById("name-input");
const durationInput = document.getElementById("duration-input");
const reviewInput = document.getElementById("reviews-input");
const itemsContainer = document.getElementById("items-container");
const totalReviews = document.getElementById("total-reviews");

const nameInputModal = document.getElementById("name-input-modal");
const durationInputModal = document.getElementById("duration-input-modal");
const reviewInputModal = document.getElementById("reviews-input-modal");


const totalReviewsTemplate = (totalReviews) => `
Total reviews: ${totalReviews}
`;

const getItemId = (ID) => `item-${ID}`;

const itemTemplate = ({ id, name, duration, reviews }) => `
<li id="${getItemId(id)}" class="item">
    <img src="images/Dark-Knight-70822-scaled-768x1137.jpg" />
    <div>
        <h1 class="item-name">"${name}"</h1>
            <div>
                <h3 class="item-duration">${duration} min</h3>
                <h3 class="item-reviews">${reviews} reviews</h3>
            </div>
    </div>
    <div class="item-buttons">
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="edit-button">Edit </button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="delete-button">Delete </button>
    </div>    
</li>`;


export const clearInputs = () => {
    nameInput.value = "";
    durationInput.value = "";
    reviewInput.value = "";
};

export const clearInputsFromModal = () => {
    nameInputModal.value = "";
    durationInputModal.value = "";
    reviewInputModal.value = "";
};

export const addItemToPage = ({ id, name, duration, reviews }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, duration, reviews })
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        duration: durationInput.value,
        reviews: reviewInput.value,
    };
};

export const getInputValuesFromModal = () => {
    return {
        name: nameInputModal.value,
        duration: durationInputModal.value,
        reviews: reviewInputModal.value,
    };
};

export const renderTotalReviews = (reviews) => {
    totalReviews.innerHTML = "";
    totalReviews.insertAdjacentHTML(
        "afterbegin",
        totalReviewsTemplate(reviews),
    )
}