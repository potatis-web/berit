<script lang='ts'>
  import { signup } from "../account.remote";
  const { name, _password, phone } = signup.fields;
</script>

<form {...signup}>
    <input {...phone.as("text")}>
    <input placeholder="Username" {...name.as("text")}>
    <input placeholder="Password" {..._password.as("password")}>
</form>