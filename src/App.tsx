import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID, // SDKを組み込み
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
        setIsReady(true);
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  return (
    <div className="App">
      <h1>kagunyan-create-liff-app</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      {isReady && liff.isLoggedIn() && <p>ログイン中です！</p>}
      {isReady && <Button />}
      <br />
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
    </div>
  );
}

export default App;
