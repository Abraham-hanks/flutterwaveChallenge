$(document).ready(function(){
   
    // Listener for Custom select and open on click
    $('.custom-select-wrapper').click(function (e) {
        this.querySelector('.custom-select').classList.toggle('open');  
    })
    //Attach listener to all Custom select options to get value on click
    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                console.log('clicked')
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
            }
        })
    }
    //Close Custom select when you click on anywhere outside the Custom select
    window.addEventListener('click', function(e) {
        const select = document.querySelector('.custom-select')
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    });

    //Change Steps of registration
    let changeStep = function(name, step){
        var pre = './assets/DoNotChangeName/';
        var post= '.svg';
        var src = pre + name + post;
        if($(`#step-${step}`).attr('src')){
            $(`#step-${step}`).attr('src', src);
        }
    }

    $('.reg-btn').click(function (e) {
        //get data-target
        let target = $(this).attr("data-target");
        let current = $(this).attr("data-current");
        let step = $(this).attr("data-step");
        let steps = {'2':'bvn-2-orange', '3': 'bvn-3-orange'};
        let name = steps[step];
        changeStep(name, step);
        //change html based on data-target
        $(`#${current}`).hide();
        $(`#${target}`).show();
    })

    $('.previous').click(function (e) {
        e.preventDefault();
        //get data-target
        let target = $(this).attr("data-target");
        let current = $(this).attr("data-current");
        let step = $(this).attr("data-step");
        let steps = {'2':'bvn-2-grey', '3': 'bvn-3-grey'};
        let name = steps[step];
        changeStep(name, step);
        //change html based on data-target
        $(`#${current}`).hide();
        $(`#${target}`).show();
    })
})
