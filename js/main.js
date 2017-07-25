
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

$(".complimentaryDinner[name='complimentaryDinner']").click(function () {
    var radioListValue = this.value;
    $(".complimentary-dinner .radioListValue").val(radioListValue);

});

$(".complimentaryTour[name='complimentaryTour']").click(function () {
    var radioListValue = this.value;
    $(".complimentary-tour .radioListValue").val(radioListValue);

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


$(".radioGroup[name$='radioGroup']").click(function() {
    var test = $(this).val();

    $("div.formChoice").hide();
    $("#formChoice" + test).show();
});








