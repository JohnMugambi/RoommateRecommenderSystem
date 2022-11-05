import { useApiGetRequest } from "api/useApiGetRequest";

function Contact() {
  const { data, error, isLoaded } = useApiGetRequest("/auth/test");

  console.log("data : ", data);
  console.log("error : ", error);
  console.log("isLoaded : ", isLoaded);
  return <div>this is the contact page</div>;
}

export default Contact;
