
var currentHourNumberM
var eventsArray = []

var currentMoment = moment()
var currentDate = moment().format('dddd, MMMM Do YYYY')

var nineEl = $("#9")
var tenEl = $("#10")
var elevenEl = $("#11")
var twelveEl = $("#12")
var thirteenEl = $("#13")
var fourteenEl = $("#14")
var fifteenEl = $("#15")
var sixteenEl = $("#16")
var seventeenEl = $("#17")
var eighteenEl = $("#18")
var nineteenEl = $("#19")
var twentyEl = $("#20")

var hours = [
    nineEl, tenEl, elevenEl, twelveEl, thirteenEl, fourteenEl, fifteenEl, sixteenEl, seventeenEl, eighteenEl, nineteenEl, twentyEl
]

var headingDateEl = $("#currentDay")
var inputsEl = $("<textarea>")
var buttonsEl = $(".buttons")
var eventDivEl = $(".row")

headingDateEl.text(currentDate)

var currentHour = currentMoment.format("hh")
var currentHourMeridium = currentMoment.format("a")
var currentHourNumber = parseInt(currentHour)

// Fucntions ran on start
function currentHourFormatConverter() {
    if (currentHourMeridium === "pm" && currentHourNumber !== 12 || currentHourMeridium === "am" && currentHourNumber === 12) {
        currentHourNumber = currentHourNumber + 12
    }
}
function checkHours() {
    for (i= 0; i < hours.length; i++) {
        var hourEl = hours[i]
        var hour = (parseInt(hourEl.attr('id')) )
        hourEl.removeClass("past present future")
        if (hour < currentHourNumber ) hourEl.next().addClass("past")
        if (hour === currentHourNumber) hourEl.next().addClass("present")
        if (hour > currentHourNumber) hourEl.next().addClass("future")
    }
}
function retrieveSavedEventsFromLocalStorage() {
    var localStorageArray = JSON.parse(localStorage.getItem("Events"))
    if (localStorageArray !== null) eventsArray = localStorageArray
    console.log(eventsArray)
    // console.log(eventsArray.attr('time:13'))
    
    
}
function fillEmptyEventsWithPlaceholders() {
    for(i= 9; i < 21; i++) {
        var dateTextareaPlaceholderEl = $(`#${i}`).next()
        dateTextareaPlaceholderEl.text("Schedule a reminder or an event here.")
    }
}
function renderSavedEvents() {
    savedEventsLocalStorArray = JSON.parse(localStorage.getItem("Events"))
    if (savedEventsLocalStorArray !== null) {
        for (i= 0; i < savedEventsLocalStorArray.length; i++) {
            var dateTextareaEl = $(`#${savedEventsLocalStorArray[i].time}`).next()
            dateTextareaEl.text(savedEventsLocalStorArray[i].event) 
        }
    }
    
}
// Functions from event listeners
function saveOnLocalStorage() {
    localStorage.setItem("Events", JSON.stringify(eventsArray))
}
eventDivEl.on('click', '.saveBtn', function () {
    var inputText = $(this).prev().val()
    var hour = $(this).parent().children(0).attr('id')
    var eventObject = {
        time: hour,
        event: inputText
    }
    var previousEventToOverwriteIndex = eventsArray.findIndex ( ({ time }) => time === hour );
    console.log(previousEventToOverwriteIndex)
        if(previousEventToOverwriteIndex > -1) {
            console.log("splice")
            eventsArray.splice(previousEventToOverwriteIndex, 1, eventObject)
        } else {
            console.log("push")
            eventsArray.push(eventObject)

        }
    saveOnLocalStorage()
})
currentHourFormatConverter()
checkHours()
retrieveSavedEventsFromLocalStorage()
fillEmptyEventsWithPlaceholders()
renderSavedEvents()

