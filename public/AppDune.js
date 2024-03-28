var myApp = angular.module('myApp', []);
angular.module('myApp', []).controller('TimingsController', function($scope) {
  $scope.dates = [
      { day: 'Sun', date: 11 },
      { day: 'Mon', date: 12 },
      { day: 'Tue', date: 13 },
      { day: 'Wed', date: 14 },
      { day: 'Thu', date: 15 },
      { day: 'Fri', date: 16 },
      { day: 'Sat', date: 17 }
  ];

  $scope.times = [
      { time: '11:00' },
      { time: '14:30' },
      { time: '18:00' },
      { time: '21:30' }
  ];

  $scope.selectDate = function(selectedDate) {
      $scope.selectedDate = selectedDate;
  };

  $scope.selectTime = function(selectedTime){
      $scope.selectedTime = selectedTime;
  }
  // Set default selected values
  $scope.selectedDate = $scope.dates[0];
  $scope.selectedTime = $scope.times[0];
  
  function updateTicketsHTML(count) {
    let date = $scope.selectedDate.date;
    let day = $scope.selectedDate.day;
    let time = $scope.selectedTime.time;
      ticketsHTML = "";
      for (var i = 0; i < count; i++) {
          ticketsHTML += `
              <div class="ticket">
                  <div class="tic">
                      <div class="barcode">
                          <div class="card"></div>
                          <img src="image/barcode.png">
                          <div class="card">
                              <h3>XXX Cinemas</h3>
                          </div>
                      </div>
                      <div class="tic_details">
                          <h5 class="pvr"><span>XXX</span> Cinemas</h5>
                          <h1>Dune</h1>
                          <div class="seat_det">
                              <div class="seat_cr">
                                  <h6>DATE</h6>
                                  <h6>${date} <span>${day}</span></h6>
                              </div>
                              <div class="seat_cr">
                                  <h6>TIME</h6>
                                  <h6>${time}</h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
      }
      document.getElementById("content").innerHTML = ticketsHTML;
  }

  let seats = document.querySelector(".all-seats");
for (var i = 0; i < 60; i++) {
  let randint = Math.floor(Math.random() * 2);
  let booked = randint === 1 ? "booked" : "";
  seats.insertAdjacentHTML(
    "beforeend",
    '<input type="checkbox" name="tickets" id="s' +
      (i + 2) +
      '" /><label for="s' +
      (i + 2) +
      '" class="seat ' +
      booked +
      '"></label>'
  );
}
var ticketsHTML = "";
let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
  ticket.addEventListener("change", () => {
    let amountElement = document.querySelector(".amount");
    let countElement = document.querySelector(".count");
    let count = Number(countElement.innerHTML);
    let amount = parseFloat(amountElement.innerHTML.replace('Rp.', '').trim()) || 0; 

    if (ticket.checked) {
      count += 1;
      amount += 50000;
      updateTicketsHTML(count);
    } else {
      count -= 1;
      amount -= 50000;
      updateTicketsHTML(count);
    }

    amountElement.innerHTML = "Rp." + amount.toFixed(0);
    countElement.innerHTML = count;
  });
});
});

function togglePopup(){
  document.querySelector(".popup").classList.toggle("active");
}

