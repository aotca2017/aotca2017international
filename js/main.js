
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
    $(this).change();
});

$(".accompanyRadio[name$='accompanyRadio']").click(function() {
    var radioChoice = $(this).val();
    $("div.radioChoice").hide();
    $("#additionalContainer" + radioChoice).show();
    $(this).change();
});

$(function(){
    $('#form-content').on('change', '*', function(e){

        var $form = $(this).closest('form');

        var $total = $form.find("[name='entry.2019220793']");

        if ($(e.target).is($total)) {
            return;
        }

        var data = $form.serializeArray().reduce(function(obj, item){
            obj[item.name] = item.value;
            return obj;
        }, {});

        var model = {};
        model.complimentary = data['entry.651229178'] == 'Complimentary';

        var $companions = $form.find("[name='entry.350075210']");
        if ($companions.is(':visible')) {
            model.companions = data['entry.350075210'];
        } else {
            model.companions = 0;
        }

        model.courierRequested = data['entry.193270809'] == 'Send Invitation via Courier';
        model.paymentMethod = 'bank-deposit';

        var total = 0;
        if (!model.complimentary) {
            total += 300.00;
        }
        if (model.companions) {
            total += 200.00 * Number(model.companions);
        }
        if (model.courierRequested) {
            total += 20.00;
        }

        if (total > 0) {
            if (model.paymentMethod == 'paypal') {
                total += 15.00;
            } else {
                total += 20.00;
            }
        }

        console.log('Total...', total);

        $total.val(total);
    });
    $($('#form-content input')[0]).change();
});
