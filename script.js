 const milkRate = 80;
const deliveryRate = 10;

let quantity = 1;


// Increase quantity

function increaseQuantity() {

    quantity++;

    updateBill();
}


// Decrease quantity

function decreaseQuantity() {

    if (quantity > 1) {

        quantity--;

        updateBill();
    }
}


// Update bill

function updateBill() {

    const milkTotal = quantity * milkRate;

    let deliveryCharge = 0;

    // ₹200 ya usse zyada par FREE delivery

    if (milkTotal < 200) {

        deliveryCharge = deliveryRate;
    }

    const total = milkTotal + deliveryCharge;


    document.getElementById("quantity").textContent = quantity;

    document.getElementById("milkPrice").textContent = milkTotal;

    document.getElementById("deliveryCharge").textContent =
        deliveryCharge;

    document.getElementById("totalPrice").textContent = total;
}


// Order Now button

function selectMilk() {

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });
}


// Order form

document.getElementById("orderForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const address =
            document.getElementById("address").value;


        const milkTotal = quantity * milkRate;

        let deliveryCharge = 0;

        if (milkTotal < 200) {

            deliveryCharge = deliveryRate;
        }

        const total = milkTotal + deliveryCharge;


        document.getElementById("orderMessage").innerHTML =

            `
            ✅ Order Received! <br><br>

            Thank you, <b>${name}</b>.<br>

            Milk Quantity: <b>${quantity} L</b><br>

            Total Amount: <b>₹${total}</b><br><br>

            We will deliver your milk to:<br>

            ${address}
            `;


        document.getElementById("orderForm").reset();

        quantity = 1;

        updateBill();
    }
);


// Initial bill

updateBill();