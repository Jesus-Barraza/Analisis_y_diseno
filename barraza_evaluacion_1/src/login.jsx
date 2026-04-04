import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function Login({ onSuccess }) {
  return (
    <GoogleOAuthProvider clientId="73623285481-tg4udr55mmc989bidrf0455fi3k5n9f4.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log("Error en login");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default Login;
