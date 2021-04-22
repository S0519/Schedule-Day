//Array with objects with each hour of the day

let hours = [
{
    time: "09",
    message: ''
},{
    time: "10",
    message: ''
},{
    time: "11",
    message: ''
},{
    time: "12",
    message: ''
},{
    time: "13",
    message: ''
},{
    time: "14",
    message: ''
},{
    time: "15",
    message: ''
},{
    time: "16",
    message: ''
},{
    time: "17",
    message: ''
},

]

const storage = JSON.parse(localStorage.getItem('hours'))
if (storage) {
    hours = storage
}


/*Every objet in hour array I want to do this fonction to it
hours into the fonction*/

hours.forEach((hour, index) => {
    let row = $("<form>").attr({
        'class': 'row'
    });

    $('.container').append(row);

    let time = $("<section>")
        .text(dayjs().hour(hour.time).minute(0).format('h:mm A'))
        .attr({
            'class': "col-md-2 hour"
    });

let event = $("<div>").attr({
    'class': "col-md-9 description p-0"
});

let eventMessage = $("<textarea>").val(hour.message)



const currentHour = dayjs().format('H')
    
if (hour.time < currentHour){
    eventMessage.attr ({
        "class": "past", 
    })
}

if (hour.time > currentHour){
    eventMessage.attr ({
        "class": "future", 
    })
}

if (hour.time === currentHour){
    eventMessage.attr ({
        "class": "present", 
    })
}

event.append(eventMessage)



var saveButton = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn",
            'key': index
    });


let saveIcon = $("<i class='far fa-save fa-lg'></i>")
saveButton.append(saveIcon)

row.append(time, event, saveButton)
}

)



$('.saveBtn').click(function (event) {
    event.preventDefault()
    const index = $(this).attr('key')
    
    let message = $(this).siblings('.description').children('textarea').val();
    
    hours[Number(index)].message = message
    
    localStorage.setItem('hours', JSON.stringify(hours))
    
})








