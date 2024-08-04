import liff from "@line/liff";

export const Button = () => {
  return liff?.isLoggedIn() ? <LogOutButton /> : <LoginButton />;
};

export const LoginButton = () => {
  const handleClick = () => {
    if (!liff.isLoggedIn()) {
      liff.login(); // 何も指定してない場合はエンドポイントURLに返る
    }
  };
  return <button onClick={() => handleClick()}>LINEログイン</button>;
};

export const LogOutButton = () => {
  const handleClick = () => {
    if (liff.isLoggedIn()) {
      liff.logout();

      window.location.href = "/"; // ログアウト後の遷移先
    }
  };
  return <button onClick={() => handleClick()}>LINEログアウト</button>;
};
