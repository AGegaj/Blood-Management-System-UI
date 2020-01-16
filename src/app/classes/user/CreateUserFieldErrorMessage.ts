export class CreateUserFieldErrorMessage {

  private _nameError: String = '';
  private _surnameError: String = '';
  private _usernameError: String = '';
  private _emailError: String = '';
  private _passwordError: String = '';
  private _countryError: String = '';
  private _cityError: String = '';
  private _personalNumberError: String = '';
  private _roleIdError = '';
  private _campTitleError: String = '';


  constructor() {
  }


  get nameError(): String {
    return this._nameError;
  }

  set nameError(value: String) {
    this._nameError = value;
  }

  get surnameError(): String {
    return this._surnameError;
  }

  set surnameError(value: String) {
    this._surnameError = value;
  }

  get usernameError(): String {
    return this._usernameError;
  }

  set usernameError(value: String) {
    this._usernameError = value;
  }

  get emailError(): String {
    return this._emailError;
  }

  set emailError(value: String) {
    this._emailError = value;
  }

  get passwordError(): String {
    return this._passwordError;
  }

  set passwordError(value: String) {
    this._passwordError = value;
  }


  get countryError(): String {
    return this._countryError;
  }

  set countryError(value: String) {
    this._countryError = value;
  }

  get cityError(): String {
    return this._cityError;
  }

  set cityError(value: String) {
    this._cityError = value;
  }



  get personalNumberError(): String {
    return this._personalNumberError;
  }

  set personalNumberError(value: String) {
    this._personalNumberError = value;
  }

  get campTitleError(): String {
    return this._campTitleError;
  }

  set campTitleError(value: String) {
    this._campTitleError = value;
  }

  get roleIdError(): string {
    return this._roleIdError;
  }

  set roleIdError(value: string) {
    this._roleIdError = value;
  }

}
