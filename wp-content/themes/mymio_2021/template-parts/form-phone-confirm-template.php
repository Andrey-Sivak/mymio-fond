<div class="contact-form__form-field phone-confirm">

    <p class="contact-form__form-field_note">Подтвердите номер телефона</p>

    <span class="phone-confirm-error"></span>

    <div class="phone-confirm__wrap">
        <input type="text"
               name="phone-confirm"
               id="phone-confirm"
               placeholder="****"
               class="contact-form__input">
        <span class="phone-confirm__btn check">Проверить</span>
        <span class="phone-confirm__btn send active">Получить код</span>
        <input type="hidden" name="is-phone-confirm" value="" data-req="true">
    </div>
    <p class="phone-confirm-resend">Код придет в течение 5 минут. Если код не пришел, нажмите "Отправить повторно"</p>
    <p class="phone-confirm-message"></p>
</div>

<script>
    (function () {
        const phoneInput = document.querySelector('input[name="main_info_phone1"]');
        const phoneConfirmInput = document.querySelector('input[name="is-phone-confirm"]');
        const codeInput = document.querySelector('input[name="phone-confirm"]');
        const sendConfirmationBtn = document.querySelector('.phone-confirm__btn.send');
        const checkConfirmationBtn = document.querySelector('.phone-confirm__btn.check');
        const errorWrap = document.querySelector('.phone-confirm-error');
        const successMessage = document.querySelector('.phone-confirm-message');
        const resendText = document.querySelector('.phone-confirm-resend');

        let message;
        const resendDelay = 5 * 60 * 1000;
        const project = 'mymiofond.ru';
        const apiKey = '82dc53f1bd307d163827a6b216690f34';
        let isBtnActive = true;
        let isFirstTime = true;

        sendConfirmationBtn.addEventListener('click', sendConfirmation);
        phoneInput.addEventListener('keydown', () => {
            clearError();
            hideResendMessage();
            unblockBtn(sendConfirmationBtn, 0);
        });
        checkConfirmationBtn.addEventListener('click', confirmation);

        function sendConfirmation(e) {
            e.preventDefault();

            if (!isBtnActive) return;

            blockBtn(this);

            const phone = checkNumber(phoneInput.value);

            if (!phone) {
                setError('Неверный формат номера телефона.');
                unblockBtn(this, 10);
                return;
            }

            message = Math.floor(1000 + Math.random() * 9000);
            const url = `https://sms.notisend.ru/api/message/send/?project=${project}&recipients=${phone}&message=${message}&apikey=${apiKey}`;

            fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors',
            })
                .then(() => {
                    unblockBtn(this, resendDelay);
                    changeSendBtnText();
                    showResendMessage();
                    activeConfirmationBtn();
                });
        }

        function unblockBtn(btn, delay) {
            setTimeout(() => {
                if (btn.classList.contains('block')) {
                    btn.classList.remove('block');
                }
                isBtnActive = true;
            }, delay);
        }

        function blockBtn(btn) {
            if (!btn.classList.contains('block')) {
                isBtnActive = false;
                btn.classList.add('block');
            }
        }

        function checkNumber(number) {

            if (!number) {
                return false;
            }

            const phone = number.replace(/[^0-9#*]/g, '');

            if (phone.length === 11) {
                return phone;
            }

            return false;
        }

        function setError(message) {
            errorWrap.innerHTML = message;
        }

        function clearError() {
            errorWrap.innerHTML = '';
        }

        function activeConfirmationBtn() {
            if (!checkConfirmationBtn.classList.contains('active')) {
                checkConfirmationBtn.classList.add('active');
            }
        }

        function changeSendBtnText() {
            if (isFirstTime) {
                sendConfirmationBtn.innerHTML = 'Получить повторно';
            }

            isFirstTime = false;
        }

        function confirmation() {
            const isCorrect = checkCode();
            setConfirmMessage(isCorrect);
            if (isCorrect) {
                hideResendMessage();
                phoneConfirmInput.value = '1';
            }
        }

        function checkCode() {
            return parseInt(codeInput.value) === parseInt(message);
        }

        function setConfirmMessage(isSuccess) {
            if (isSuccess) {
                if (successMessage.classList.contains('error')) {
                    successMessage.classList.remove('error');
                }

                successMessage.classList.add('success');
                if (checkConfirmationBtn.classList.contains('active')) {
                    checkConfirmationBtn.classList.remove('active');
                }
                if (sendConfirmationBtn.classList.contains('active')) {
                    sendConfirmationBtn.classList.remove('active');
                }
                successMessage.innerHTML = 'Успешно!'

                return;
            }

            if (successMessage.classList.contains('success')) {
                successMessage.classList.remove('success');
            }

            successMessage.classList.add('error');
            successMessage.innerHTML = 'Ошибка!'
        }
        
        function showResendMessage() {
            if (!resendText.classList.contains('active')) {
                resendText.classList.add('active');
            }
        }

        function hideResendMessage() {
            if (resendText.classList.contains('active')) {
                resendText.classList.remove('active');
            }
        }
    })();
</script>