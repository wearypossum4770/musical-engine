import * as yup from "yup";

let schema = yup.object().shape({});

let firstName = yup.lazy();
let middleName = yup.lazy();
let lastName = yup.lazy();
let username = yup.lazy();
let email = yup.lazy();
let password = yup.lazy();
