export const maskInit = () => {
    jQuery(".phone-mask").inputmask({
        mask: "+7(999)999-99-99",
        "clearIncomplete": true
    });

    jQuery(".date-mask").inputmask({
        mask: "99.99.9999",
        "clearIncomplete": true
    });

    jQuery(".year-mask").inputmask({
        mask: "9999",
        "clearIncomplete": true
    });
}