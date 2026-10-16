<script lang='ts'>
  import { login } from "../account.remote";
  const { name, _password } = login.fields;
</script>

<form {...login}>
    <input placeholder="Username" {...name.as("text")}>
    <input placeholder="Password" {..._password.as("password")}>
</form>