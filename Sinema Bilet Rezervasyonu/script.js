const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculateTotal();
    }
}); 

select.addEventListener("change",calculateTotal);

function calculateTotal(){
        const selectedSeats = container.querySelectorAll(".seat.selected");
        
        const selectedSeatsArr = [];
        const seatsArr = [];

        selectedSeats.forEach(function(seat){
            selectedSeatsArr.push(seat);
        });

        seats.forEach(function(seat){
            seatsArr.push(seat);
        });

        let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
            return seatsArr.indexOf(seat);
        });
 

        let selectedSeatCount = selectedSeats.length;    
        count.innerText = selectedSeatCount; 
        amount.innerText = selectedSeatCount*select.value;

        saveToLocalStorage(selectedSeatIndexs);
        getFromLocalStorage();
}

function getFromLocalStorage(){
    localStorage.getItem('selectedSeats');
    localStorage.getItem('selectedMovieIndex');
    
}

function saveToLocalStorage(indexs){    
    localStorage.setItem("selectedSeats",JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex",select.selectedIndex);
}

