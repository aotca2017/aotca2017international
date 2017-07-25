
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


$(".delegateRadio[name$='delegateRadio']").click(function() {
    var numberChoice = $(this).val();

    $("div.formChoice").hide();
    $("#formChoice" + numberChoice).show();

});

$(".accompanyRadio[name$='accompanyRadio']").click(function() {
    var radioChoice = $(this).val();
    $("div.radioChoice").hide();
    $("#additionalContainer" + radioChoice).show();

});









