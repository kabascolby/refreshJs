import { Stack } from "./stack";

const st = new Stack();

st.push(5);
st.push("Lamine");
console.log(st.count, st.peek(), st);

window.st = st;
