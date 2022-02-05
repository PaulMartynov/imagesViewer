import React from "react";

export default function App(): JSX.Element {
  return (
    <>
      <header>
        <div className={"filter"}>
          <select />
        </div>
      </header>
      <main className={"albums"}>
        <div className={"albums__loader"}>{"Loading..."}</div>
        <div className={"albums__content"}>{"Content"}</div>
      </main>
    </>
  );
}
