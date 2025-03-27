import AuthForm from '../components/AuthForm';

export default function Home() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Welcome to Algo Root</h1>
        <AuthForm isLogin={true} />
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}