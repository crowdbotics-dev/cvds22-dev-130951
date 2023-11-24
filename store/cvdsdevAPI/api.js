import axios from "axios"
const cvdsdevAPI = axios.create({
  baseURL: "https://cvds22-dev-130951.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cvdsdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return cvdsdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return cvdsdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_zsad_list(payload) {
  return cvdsdevAPI.get(`/api/v1/zsad/`)
}
function api_v1_zsad_create(payload) {
  return cvdsdevAPI.post(`/api/v1/zsad/`, payload)
}
function api_v1_zsad_retrieve(payload) {
  return cvdsdevAPI.get(`/api/v1/zsad/${payload.id}/`)
}
function api_v1_zsad_update(payload) {
  return cvdsdevAPI.put(`/api/v1/zsad/${payload.id}/`, payload)
}
function api_v1_zsad_partial_update(payload) {
  return cvdsdevAPI.patch(`/api/v1/zsad/${payload.id}/`, payload)
}
function api_v1_zsad_destroy(payload) {
  return cvdsdevAPI.delete(`/api/v1/zsad/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cvdsdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cvdsdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cvdsdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cvdsdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_zsad_list,
  api_v1_zsad_create,
  api_v1_zsad_retrieve,
  api_v1_zsad_update,
  api_v1_zsad_partial_update,
  api_v1_zsad_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
