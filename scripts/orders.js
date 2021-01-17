$(document).ready(function(){
    let selectedCount = 0;
    $('input:checkbox').change(
        function(){
            selectedCount =  $(".order-item .form-check-input:checked").length;
            let element = $(this);
            let target = element.attr('data-target')
            if (element.is(':checked') && selectedCount != 0) {
                console.log('gets here',$(`#${target}`).hasClass('selected'))
                if (!$(`#${target}`).hasClass('selected')) {
                    console.log('helloooooo')
                    $(`#${target}`).addClass('selected')
                }
                $('#select-count #count').html(selectedCount)
                $('.dispatch-container').show()
                return
            }
            else if (selectedCount == 0) {
                $('.dispatch-container').hide()
            }
                $(`#${target}`).removeClass('selected');
                $('#select-count #count').html(selectedCount)
               
        }
    );
    $('.dispatch').click(function(e){
        e.preventDefault();
        selectedCount =  $(".order-item .form-check-input:checked").length;
        $('#select-count #count').html(selectedCount -1)
        let target = $(this).attr('data-target');
        $(`#${target}`).hide()
        $(`#${target} .form-check-input:checked`).prop("checked", false);
    })
    $('.dispatch-selected').click(function(e){
        e.preventDefault();
        $(".order-item .form-check-input:checked").each(function(index, element){
            selectedCount =  $(".order-item .form-check-input:checked").length;
            $('#select-count #count').html(selectedCount-1)
            let target = $(element).attr('data-target')
            $(`#${target}`).hide()
            $(`#${target} .form-check-input:checked`).prop("checked", false);
        })
    })
})