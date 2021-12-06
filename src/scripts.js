
var currentHourNumberM

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

headingDateEl.text(currentDate)

var currentHour = currentMoment.format("hh")
var currentHourMeridium = currentMoment.format("a")
var currentHourNumber = parseInt(currentHour)

// Make sure that on 12 and 24 hrs you don't have issues!
// console.log(currentMoment.add(7, "hours").format("hh"))


function currentHourFormatConverter() {
    if (currentHourMeridium === "pm" && currentHourNumber !== 12 || currentHourMeridium === "am" && currentHourNumber === 12) {
        currentHourNumberM = currentHourNumber + 12
    }
}

function checkHours() {
    for (i= 0; i < hours.length; i++) {
        var hourEl = hours[i]
        var hour = (parseInt(hourEl.attr('id')) )
        hourEl.removeClass("past present future")
        if (hour < currentHourNumberM ) hourEl.next().addClass("past")
        if (hour === currentHourNumberM) hourEl.next().addClass("present")
        if (hour > currentHourNumberM) hourEl.next().addClass("future")
    }
}

buttonsEl.on('click', function() {
    console.log($(this).prev().val())
})
currentHourFormatConverter();
checkHours()



// var mainHeadingEl = $('#main-heading');
// var jumbotronEl = $('.jumbotron')
// var testEl = $('<h1>')
// mainHeadingEl.text('Hello')
// testEl.text = 'hello';
// // mainHeadingEl.attr('class', 'red')
// mainHeadingEl.addClass('red');