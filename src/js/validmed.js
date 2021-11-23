"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const formMed = document.getElementById("form-med");
  formMed.addEventListener("submit", SendForm);

  async function SendForm(e) {
    e.preventDefault();

    let error = formValidate(formMed);
    if (error === 0) {
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert("data sent");
        form.reset();
      } else {
        alert("Error");
      }
    } else {
      //alert("complete form before");
    }
    let formData = new FormData(formMed);
  }
  function formValidate(formMed) {
    let error = 0;

    let RequiredFields = document.querySelectorAll(".required");

    for (let i = 0; i < RequiredFields.length; i++) {
      const inputReq = RequiredFields[i];
      removeError(inputReq);

      if (inputReq.classList.contains("surname")) {
        let errorSurname = document.querySelector(".error__message-surname");
        if (surnameValidate(inputReq)) { 
          addError(inputReq);
          errorSurname.classList.add("error__message-show");
          errorSurname.innerHTML = "Introduceți un nume valid";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorSurname.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("name")) {
        let errorName = document.querySelector(".error__message-name");
        if (nameValidate(inputReq)) {
          addError(inputReq);
          errorName.classList.add("error__message-show");
          errorName.innerHTML = "Introduceți un prenume valid";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorName.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("phone")) {
        let errorPhone = document.querySelector(".error__message-phone");
        if (phoneValidate(inputReq)) {
          addError(inputReq);
          errorPhone.classList.add("error__message-show");
          errorPhone.innerHTML = "Introduceți un numar valid";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorPhone.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("email")) {
        let errorEmail = document.querySelector(".error__message-email");
        if (emailValidate(inputReq)) {
          addError(inputReq);
          errorEmail.classList.add("error__message-show");
          errorEmail.innerHTML = "Introduceți un email valid";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorEmail.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("hour")) {
        let errorHour = document.querySelector(".error__message-hour");
        if (hourValidate(inputReq)) {
          addError(inputReq);
          errorHour.classList.add("error__message-show");
          errorHour.innerHTML = "Introduceți ora";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorHour.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("date")) {
        let errorDate = document.querySelector(".error__message-date");
        if (dateValidate(inputReq)) {
          addError(inputReq);
          errorDate.classList.add("error__message-show");
          errorDate.innerHTML = "Introduceți data";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorDate.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      }
    }

    return error;
  }
  function addError(inputReq) {
    inputReq.classList.add("error__border");
  }
  function removeError(inputReq) {
    inputReq.classList.remove("error__border");
  }
  function addSucces(inputReq) {
    inputReq.classList.add("succes__border");
  }
  function surnameValidate(inputReq) {
    return !/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?){3,10}$/.test(inputReq.value);
  }
  function nameValidate(inputReq) {
    return !/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?){3,10}$/.test(inputReq.value);
  }
  function phoneValidate(inputReq) {
    return !/^.{8,11}$/.test(inputReq.value);
  }
  function emailValidate(inputReq) {
    return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      inputReq.value
    );
  }
  function hourValidate(inputReq) {
    return !/^([01]\d|2[0-3]):?([0-5]\d)$/.test(inputReq.value);
  }
  function dateValidate(inputReq) {
    return !/^(\d{4})-(\d{1,2})-(\d{1,2})$/.test(inputReq.value);
  }
});
