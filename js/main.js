
$(".radioTitle[name='titleRadio']").click(function () {
    var radioListValue = this.value;
    $(".radio .radioListValue").val(radioListValue);

});

$(".dietaryRegistration[name='delegateDietary']").click(function () {
    var radioListValue = this.value;
    $(".delegate-dietary .radioListValue").val(radioListValue);
});

$(".delegateDinner[name='delegateDinner']").click(function () {
    var radioListValue = this.value;
    $(".delegate-dinner .radioListValue").val(radioListValue);

});

$(".delegateTour[name='delegateTour']").click(function () {
    var radioListValue = this.value;
    $(".delegate-tour .radioListValue").val(radioListValue);

});

$(".accompanyingDietary[name='accompanyingDietary']").click(function () {
    var radioListValue = this.value;
    $(".accompanying-dietary .radioListValue").val(radioListValue);

});


$(".accompanyingDinner[name='accompanyingDinner']").click(function () {
    var radioListValue = this.value;
    $(".accompanying-dinner .radioListValue").val(radioListValue);

});


$(".accompanyingTour[name='accompanyingTour']").click(function () {
    var radioListValue = this.value;
    $(".accompanying-tour .radioListValue").val(radioListValue);

});

$(".additionalDietary[name='additionalDietary']").click(function () {
    var radioListValue = this.value;
    $(".additional-dietary .radioListValue").val(radioListValue);

});

$(".additionalDinner[name='additionalDinner']").click(function () {
    var radioListValue = this.value;
    $(".additional-dinner .radioListValue").val(radioListValue);

});

$(".additionalTour[name='additionalTour']").click(function () {
    var radioListValue = this.value;
    $(".additional-tour .radioListValue").val(radioListValue);

});

$(".letterInvitation[name='letterInvitation']").click(function () {
    var radioListValue = this.value;
    $(".letter-invitation .radioListValue").val(radioListValue);

});


$("#form-content").submit(function(){
    $("#ss-submit").attr("disabled", true);
    setTimeout(function(){
        $("#ss-submit").attr("disabled", false);
    }, 1000);
});

$("#hidden_iframe").on('load',function () {
    $("#myModal").modal('show');
    $("#form-content")[0].reset();
    setTimeout(function(){
        $("#myModal").modal('hide');
    }, 2000);
});



// $("#additional").on("click",function () {
//
//     var additional = $('<div class="additional-person-list">' +
//         '<div class="form-item clearfix col-md-6">' +
//         '<span class="content-title stylized-header">Full Name</span>' +
//         '<input class="content-input form-control" name="entry.1921757688" id="entry.1921757688" autocomplete="off" required type="text" value="" aria-required="true" aria-invalid="false">' +
//         '</div>' +
//         '<div class="form-item additional-dietary clearfix col-md-12">' +
//         '<span class="content-title stylized-header">Special Dietary</span>' +
//         '<label class="radio-inline">' +
//         '<input class="additionalDietary" type="radio" name="additionalDietary" value="Vegetarian" required>Vegetarian' +
//         '</label>' +
//         '<label class="radio-inline">' +
//         '<input class="additionalDietary" type="radio" name="additionalDietary" value="Halal">Halal' +
//         '</label>' +
//         '<input class="hidden radioListValue" name="entry.1952409614" id="entry.1952409614" value="">' +
//         '</div>' +
//         '<div class="form-item additional-dinner clearfix col-md-12">' +
//         '<span class="content-title stylized-header">Gala Dinner(19 October)</span>' +
//         '<label class="radio-inline">' +
//         '<input class="additionalDinner" type="radio" name="additionalDinner" value="Yes" required>Yes' +
//         '</label>' +
//         '<label class="radio-inline">' +
//         '<input class="additionalDinner" type="radio" name="additionalDinner" value="No">No' +
//         '</label>' +
//         '<input class="hidden radioListValue" name="entry.1234762368" id="entry.1234762368" value="">' +
//         '</div>' +
//         '<div class="form-item additional-tour clearfix col-md-12">' +
//         '<span class="content-title stylized-header">City Tour (20 October, morning)</span>' +
//         '<label class="radio-inline">' +
//         '<input class="additionalTour" type="radio" name="additionalTour" value="Yes" required>Yes' +
//         '</label>' +
//         '<label class="radio-inline">' +
//         '<input class="additionalTour" type="radio" name="additionalTour" value="No">No' +
//         '</label>' +
//         '<input class="hidden radioListValue" name="entry.1428386918" id="entry.1428386918" value="">' +
//         '</div>' +
//         '</div>');
//
//     $(".additional-person-container").append(additional);
// });



