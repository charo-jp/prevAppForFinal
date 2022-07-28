
// if checkbox for special resources is checked then show input if not hide
$('#specialResourcesCheck').click(function() {
    let isChecked = $('#specialResourcesCheck').is(':checked');
    if(isChecked) {
        $('#specialResInput').show();
    }else{
        $('#specialResInput').hide();
    }
});

// if checkbox for ethics review is checked then show input if not hide
$('#ethicsReviewCheck').click(function() {
    let isChecked = $('#ethicsReviewCheck').is(':checked');
    if(isChecked) {
        $('#ethicsReviewInput').show();
        $('#checkList').show();
    }else{
        $('#ethicsReviewInput').hide();
        $('#checkList').hide();
    }

});




