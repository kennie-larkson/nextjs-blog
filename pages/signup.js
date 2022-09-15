import { useState, useEffect } from "react";

import Layout from "../components/layout";
import Body from "../components/body";
import SignupForm from "../components/signupform";

const Signup = ({}) => {
  return (
    <>
      <Layout form>
        <SignupForm />
      </Layout>
    </>
  );
};

// const SignupForm = () => {
//   const [username, setUsername] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   // const [pwd, setPwd] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     if (window.location.search.includes("success=true")) {
//       setSuccess(true);
//       setTimeout(() => setSuccess(false), 5000);
//     }
//   }, []);

//   const handleUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleFname = (e) => {
//     setFname(e.target.value);
//   };

//   const handleLname = (e) => {
//     setLname(e.target.value);
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email", email);
//   };

//   return (
//     <>
//       <Layout signupform>
//         <form
//           name="membership-form"
//           method="POST"
//           action="/signupform?success=true"
//           data-netlify="true"
//           onSubmit={handleSubmit}
//         >
//           <div className="container text-center p-10 mt-20 bg-gray-100">
//             <input
//               type="text"
//               value={email}
//               onChange={handleEmail}
//               name="membership-form"
//               placeholder="Enter a valid email!"
//               class="form-input px-4 py-3 my-5 rounded-full md:w-96 md:mr-5 hover:shadow-md"
//             ></input>
//             <button
//               type="submit"
//               className=" rounded-full px-4 focus:outline-yellow-800 bg-yellow-400 hover:bg-yellow-300 hover:shadow-md text-yellow-800 hover:text-yellow-800 transition duration-300 py-2 justify-center"
//             >
//               Subscribe
//             </button>
//           </div>
//         </form>
//       </Layout>
//     </>
//   );
// };

export default Signup;

//items-center justify-center my-20 p-10
