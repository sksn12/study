import { firebaseAuth, googleProvider, githubProvider } from "./firebase";
class AuthService {
  login(providerName) {
    // 매계변수로 구글인지 깃허브인지 받아와 그에 해당하는 authProvider를 생성시켜줌
    const authProvider = this.getPorvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  getPorvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "GitHub":
        return githubProvider;
      default:
        throw new Error(`not suported proiver${providerName}`);
    }
  }
}

export default AuthService;
