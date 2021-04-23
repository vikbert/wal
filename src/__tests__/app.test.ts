import { render } from "@testing-library/svelte";
import App from "../App.svelte";

test("should render the text hello world!", () => {
  const results = render(App);

  console.log(results);

});
