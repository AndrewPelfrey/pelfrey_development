import useTitle from "../hooks/useTitle";
export default function About(){
  useTitle("About");
  return (<section className="section"><div className="container"><h1 className="h1">About</h1></div></section>);
}
