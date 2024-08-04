import liff from "@line/liff";

export const Button = () => {
  return liff?.isLoggedIn() ? <LogOutButton /> : <LoginButton />;
};

export const LoginButton = () => {
  const handleClick = () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  };
  return <button onClick={() => handleClick()}>LINEログイン</button>;
};

export const LogOutButton = () => {
  const handleClick = () => {
    if (liff.isLoggedIn()) {
      liff.logout();
    }
  };
  return <button onClick={() => handleClick()}>LINEログアウト</button>;
};
