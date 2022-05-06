
$(document).ready(function(){

    let id;
    let date;
    let status;

    // on clicking any particlar date we will fetch habitId and date and at the same time display form.
    $('.updatable-date').on('click', function(){
        
        id = $(this).attr('id');
        date = $(this).attr('assignedDate');
        $('.update-form').show();
    })

    // getting user selected option
    $('#myForm').on('change', function() {
        status = $('input[name="status"]:checked').val();
    });

    // closing the form
    $('.close-form').on('click', ()=>{    
       $('.update-form').hide();
    })

    // on clicking update we are assigning a link to the update btn.
    $('.update').on('click', () => {

        $('#myForm').attr('action',`/history/update/?id=${id}&date=${date}&status=${status}`);
        $('.update-form').hide();
    })
});