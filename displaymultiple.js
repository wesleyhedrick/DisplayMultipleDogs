function getDogImage(inpt) {
    fetch(`https://dog.ceo/api/breeds/image/random/${inpt}`)
    .then(x => x.json())
    .then(y => displayResults(y))
    .catch();
}

function displayResults(inpt) {
    console.log(inpt);
    console.log(inpt.message.length)
    $('body').html(`
        <div class="formcontainer">
            <form class="" action="" method ="">
                    <label for="">How many dogs do you want to see?</label>
                    <input placeholder="Type your number here." type="text" name="" id="" />
            </form>
        </div>
        <section>
            
        </section>
    `)

    for (i = 0;i<inpt.message.length;i++){
        $('body > section').append(`
            <img src="${inpt.message[i]}" alt="image of a dog">
        `);
    }

    $('body').append(`<button>Try again</button>`)
        $('button').on('click', function(e){
            renderLanding();
        })
}

function validateInput(inpt) {
    if (inpt < 1) {
        alert('Didn\'t choose anything? Here\'s three dog images.')
        getDogImage(3);
    } else if (inpt > 50) {
        console.log(inpt);
        alert('Choose a number between 1 and 50');
    renderLanding();
    } else {
        getDogImage(inpt);
    }
}


function watchForm() {
    $('form').submit(e => {
        e.preventDefault();
        let inpt = $('input').val();
        console.log(inpt);
        validateInput(inpt);
    })
}



function renderLanding () {         
    
    $('body').html(`
        <div class="formcontainer">
            <form class="" action="" method ="">
                    <label for="">How many dogs do you want to see?</label>
                    <input placeholder="Type your number here." type="integer" name="" id="" />
            </form>
        </div>
    `)
    console.log('Form is ready for input.')
    watchForm();
}

$(renderLanding());